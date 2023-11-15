export function Home() {
  return (
    <>
      <section className="w-full  bg-no-repeat  bg-cover bg-right  py-32 bg-[url(section-image.png)]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Doce é a Vida</h1>
          <p className="text-xl text-bide- mb-12">
            Mas com nosso doces, ela fica ainda mais saborasa
          </p>
          <a
            href="#"
            className="bg-bide-600 text-white py-4 px-12 rounded-full hover:bg-bide-500"
          >
            Explorar
          </a>
        </div>
      </section>
      <section>
        <div className="py-16 bg-bide-600">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-bide-300 font-bold md:text-4xl">
                  Nuxt development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-white">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-bide-300">
            <img src="waves.svg" alt="" width={"100%"}/>
        </div>
    </>
  );
}
