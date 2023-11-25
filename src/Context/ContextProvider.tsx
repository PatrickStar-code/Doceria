import { createContext, useEffect, useState } from "react";
import { instance } from "../axios";

export interface ProductProps {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "descricao": string,
    "preco": number,
    "destaque": boolean,
    "img": string
}

interface CartContextProps {
    HighlightProducts: ProductProps[];
}

export const CartContext = createContext({} as CartContextProps);

export function ContextProvider({ children }: any) {
  const [HighlightProducts, setHighlightProducts] = useState([]);

  function getHighlits() {
    instance
      .get("/produto/?destaque=true&_limit=4")
      .then((response) => {
        setHighlightProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getHighlits();
  }, []);


  return <CartContext.Provider value={{HighlightProducts}}>{children}</CartContext.Provider>;
}
