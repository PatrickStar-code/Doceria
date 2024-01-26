import {Outlet} from "react-router-dom"
import { NavbarComponent } from "../Components/Navbar"
    
export function Layout(){
    return(
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}