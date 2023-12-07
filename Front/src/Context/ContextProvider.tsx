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

export interface CategoryProps {
    "id": number,
    "nome": string,
    "img_categoria": string
}

interface CartContextProps {
    ProdutosDestaque: ProductProps[];
    Categorias: CategoryProps[];
}


export const Context = createContext({} as CartContextProps);

export function ContextProvider({ children }: any) {
  const [ProdutosDestaque, setProdutosDestaque] = useState([]);
  const [Categorias, setCategorias] = useState([]);

  function getHighlits() {
    instance
      .get("/produto/?destaque=true&_limit=4")
      .then((response) => {
        setProdutosDestaque(response.data);
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


  return <Context.Provider value={{ProdutosDestaque, Categorias}}>{children}</Context.Provider>;
}
