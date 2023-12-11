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
    ProdutosCategoria: ProductProps[];
    getProdutosCategoria: (categoriaId: number) => void;
    
}


export const Context = createContext({} as CartContextProps);

export function ContextProvider({ children }: any) {
  const [ProdutosDestaque, setProdutosDestaque] = useState([]);
  const [ProdutosCategoria, setProdutosCategoria] = useState([]);
  const [Categorias, setCategorias] = useState([]);

  function getProdutosDestaque() {
    instance
      .get("/produto?destaque=true")
      .then((response) => {
        setProdutosDestaque(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getProdutosCategoria(categoriaId: number) {
    instance
      .get("/produto?id_categoria=" + categoriaId)
      .then((response) => {
        setProdutosCategoria(response.data);
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
    getProdutosDestaque();
    getCategorias();
  }, []);


  return <Context.Provider value={{ProdutosDestaque, Categorias,ProdutosCategoria,getProdutosCategoria}}>{children}</Context.Provider>;
}
