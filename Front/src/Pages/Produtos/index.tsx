import { Navigate, useParams } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { Produtros_card } from "../../Components/Produtos_Card.tsx";
import { Pagination } from "keep-react";

export function ProdutosCategoria() {
  const { Categorias, getProdutosCategoria, ProdutosCategoria } =
    useContext(Context);
  const { categoria } = useParams();
  const isValid =
    !Categorias.length || Categorias.some((item) => item.nome === categoria);
  const idCategoria = Categorias.find((item) => item.nome === categoria)?.id;
  const [currentPage, setCurrentPage] = useState(1);
  if (!isValid) {
    return <Navigate to="/" />;
  }

  function getProdutos() {
    idCategoria !== undefined && getProdutosCategoria(idCategoria);
  }

  useEffect(() => {
    getProdutos();
  }, [categoria]);

  return (
    <>
      <header className="bg-bide-600 text-bide-300 flex h-64 justify-center items-center">
        <h1 className=" font-cookie text-12xl">{categoria}</h1>
      </header>
      <div className="w-full bg-bide-300">
        <img src="waves.svg" alt="" width={"100%"} />
      </div>
      <section className="bg-bide-300 w-full ">
        <div className="grid grid-cols-2  lg:grid-cols-HighGrid md:ml-11 gap-12  justify-center">
          {ProdutosCategoria.map((product) => (
            <Produtros_card key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
        <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      paginateWithBorder={true}
      prevNextShape="circle"
    />
        </div>
      </section>
    </>
  );
}
