import { Cat } from "phosphor-react";

export function Categorias_Card({Categoria,imgCard}: {Categoria: string,imgCard: string}) {
    return(
        <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="block cursor-pointer">
            <div className="h-28">
                <div
                    className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] x justify-items-center align-middle">
                    <img src={imgCard}
                        className="w-36 h-36  mt-6 m-auto" alt={Categoria} title={Categoria} loading="lazy"
                        width="200" height="200"/>
                </div>
            </div>
            <div className="p-6   z-10 w-full">
                <p
                    className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    {Categoria}
                </p>
            </div>
        </div>
    </div>

    )
}