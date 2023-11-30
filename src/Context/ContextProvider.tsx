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

interface CategoryProps {
    "id": number,
    "nome": string
}

interface CartContextProps {
    HighlightProducts: ProductProps[];
    Categorias: CategoryProps[];
}


export const Context = createContext({} as CartContextProps);

export function ContextProvider({ children }: any) {
  const [HighlightProducts, setHighlightProducts] = useState([]);
  const [Categorias, setCategorias] = useState([]);

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

  function getCategorias() {
    instance
      .get("/categoria")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getHighlits();
    getCategorias();
  }, []);


  return <Context.Provider value={{HighlightProducts, Categorias}}>{children}</Context.Provider>;
}
