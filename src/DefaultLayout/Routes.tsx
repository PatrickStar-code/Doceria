import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../Pages/Home";
import { Sobre } from "../Pages/Sobre";
import { Produtos } from "../Pages/Produtos";

export function Router(){
    return(
        <Routes>


            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="produtos" element={<Produtos />} >
                    {/* <Route path="/bolos" element={< />} /> */}
                </Route>
            </Route>
          
        </Routes>
    )
}