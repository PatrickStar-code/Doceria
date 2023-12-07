import { Navigate, useParams } from "react-router-dom"
import { Context } from "../../Context/ContextProvider"
import { useContext } from "react"

export function ProductCategory() {
    const {categoria} = useParams()
    const {Categorias} = useContext(Context)
    const isValid = !Categorias.length || Categorias.some((item) => item.nome === categoria)
    return !isValid && <Navigate to="/"/>

    return(
        <div>
            <h1>{categoria}</h1>
        </div>
    )
}