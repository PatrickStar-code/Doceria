import { useContext } from "react";
import { CartContext } from "../../Context/ContextProvider";
import { Highlight_products_card } from "./Components/highlight_products";


export function Home() {
  const { HighlightProducts } = useContext(CartContext);
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
                <p className="mt-6 text-white">
                 
                </p>
                {/* <p className="mt-4 text-white">
                  {" "}
                 
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <div className="w-full bg-bide-300">
            <img src="waves.svg" alt="" width={"100%"}/>
        </div>  
        <section className="bg-bide-300 w-full ">
          <h1 className="text-10xl font-medium mb-6 text-center color-bide-600 font-cookie">Destaques</h1>

          <div className="grid grid-cols-2  lg:grid-cols-HighGrid md:ml-11 gap-6  justify-center">
              {HighlightProducts.map((product) => (
                <Highlight_products_card key={product.id} product={product}/>
              ))}
          </div>
      </section>
        <section className="w-full  bg-no-repeat  bg-cover bg-left  py-32 bg-[url(Cake.png)]">
        <div className="container mx-auto text-center text-white h-52">
          <h1 className="text-9xl font-medium mb-4 font-cookie text-bide-600">Doce é a Vida</h1>
         
          <p className="text-2xl text-bide-600 mb-12 text-center ">
            Mas com nosso doces, ela fica ainda mais saborasa.
          </p>
          <a
            href="#"
            className="bg-bide-600 text-white py-4 px-12 rounded-full hover:bg-bide-500"
          >
            Explorar
          </a>
        </div>
      </section>
    </>
  );
}
