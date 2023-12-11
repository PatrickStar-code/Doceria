import { CategoryProps } from "../../../Context/ContextProvider"

export function Categorias_Card({Categoria} : {Categoria:CategoryProps}) {
    return(
        <div className="relative group h-48 flex lg:m-2  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="block cursor-pointer">
            <div className="h-28">
                <div
                    className="absolute -top-20 lg:top-[-20%] md:-top-10 left-[5%] z-40  group-hover:top-[-30%] group-hover:opacity-[0.9]   duration-300 w-[90%] x justify-items-center align-middle">
                    <img src={Categoria.img_categoria}
                        className="w-36 h-36  mt-6 m-auto" alt={Categoria.nome} title={Categoria.nome} loading="lazy"
                        width="200" height="200"/>
                </div>
            </div>
            <div className="p-6   z-10 w-full">
                <p
                    className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    {Categoria.nome}
                </p>
            </div>
        </div>
    </div>

    )
}