import { useContext } from "react";
import { Categorias_Card } from "./Categorias";
import { Context } from "../../Context/ContextProvider";

type CategoryCartProps = {
    [key:string]: string
}

const GaleryCategory:CategoryCartProps = {
    "Bolos":
    "https://epicpadprinting.com/public/img/indus/Bolos.png",
    "Doce":
    "https://epicpadprinting.com/public/img/indus/Doces.png",
    "Tortas":
    "https://epicpadprints.com/public/img/indus/Salgados.png",
    "Cupcakes":
    "https://epicpadprints.com/public/img/indus/Cupcakes.png",
    "Pâes Doces":
    "https://epicpadprints.com/public/img/indus/Sorvetes.png",
}
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
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28  lg:gap-y-16 bg-bide-300">
               {Categorias?.map((item) => (
                <Categorias_Card key={item.id} Categoria={item.nome} imgCard={GaleryCategory[item.nome]} />
               ))}
            </section>
        </div>
    )
}