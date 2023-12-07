import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../Pages/Home";
import { Sobre } from "../Pages/Sobre";
import { Produtos } from "../Pages/Produtos";
import { ProductCategory } from "../Pages/Products/";

export function Router(){

    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="categoria" element={<Produtos />} />
                <Route path="categoria/:categoria" element={<ProductCategory />} />
            </Route>
          
        </Routes>
    )
}