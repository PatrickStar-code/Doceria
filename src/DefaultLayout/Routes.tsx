import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../Pages/Home";
import { Sobre } from "../Pages/Sobre";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
            </Route>
          
        </Routes>
    )
}