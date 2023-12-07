import { useContext } from "react";
import { Categorias_Card } from "./Category";
import { Context } from "../../Context/ContextProvider";
export function Produtos() {

    const {Categorias} =  useContext(Context);

    return (
        <div>
            <header className="bg-bide-600 text-bide-300 flex h-64 justify-center items-center">
                <h1 className=" font-cookie text-12xl">Produtos</h1>
            </header>
            <div className="w-full bg-bide-300">
            <img src="waves.svg" alt="" width={"100%"}/>
            </div>  
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28  lg:gap-y-16 bg-bide-300">
               {Categorias?.map((item) => (
                <Categorias_Card key={item.id} Categoria={item}  />
               ))}
            </section>
        </div>
    )
}