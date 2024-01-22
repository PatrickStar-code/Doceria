import { useContext } from "react";
import { Context } from "../../Context/ContextProvider";
import { Carousel} from "keep-react";


export function Home() {
  const { ProdutosDestaque } = useContext(Context);
  return (
    <>
      <section>
        <div className="py-16 bg-bide-600">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12 h-50">
                <img
                  src="Trufas.png"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-bide-300 font-bold md:text-4xl">
                  Saboreie a doçura da vida com nossos doces irresistíveis!
                </h2>
                <p className="mt-6 text-white"></p>
                {/* <p className="mt-4 text-white">
                  {" "}
                 
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <img src="waves.svg" alt="" width={"100%"} />
      </div>

      {/* <section className="mt-[-8px]">
        <h1 className="font-cookie text-10xl text-center">Categorias</h1>
        <div className="flex justify-center">
                {}
        </div>
      </section> */}
      
    <section className="container mx-auto mt-[-2rem]">
        <h2 className="text-10xl font-cookie text-center">Categorias</h2>
      <div className="mt-10">
        <ul className="-m-3.5 flex">
          <li className="m-3.5 h-48 w-1/4 bg-cover rounded-xl" ></li>
          <li className="m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          <li className="m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          <li className="m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
        </ul>
      </div>
    </section>
      <section className="mt-[-8px]">
        <h1 className="font-cookie text-10xl text-center">Os mais Pedidos</h1>
        <div className="flex justify-center">
                {}
        </div>
      </section>
    </>
  );
}
