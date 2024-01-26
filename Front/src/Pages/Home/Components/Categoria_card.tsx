import { CategoryProps } from "../../../Context/ContextProvider";

export function CardCategoria({Categoria}: {Categoria:CategoryProps}){
    return(
        <div  key={Categoria.id} className="flex flex-col px-8  hover:bg-white cursor-pointer duration-500 p rounded-lg p-4  justify-between items-center">
        <div
          
        >
          <img src={Categoria.img_categoria} alt={Categoria.nome} className="w-20" />
        </div>
          <h2 className="text-8xl mt-2 font-cookie ">{Categoria.nome}</h2>
        </div>
    )
}