import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../Pages/Home";
import { Sobre } from "../Pages/Sobre";
import { Categorias } from "../Pages/Categorias";
import { ProdutosCategoria } from "../Pages/Produtos";


export function Router(){

    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="categoria" element={<Categorias />} />
                <Route path="categoria/:categoria" element={<ProdutosCategoria />} />
            </Route>
          
        </Routes>
    )
}