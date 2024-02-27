import { Animation, SocialLinks, SpotlightShape } from "./components";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <>
      <Head>
        <title>Semana Engenharia Informática</title>
      </Head>
      <SpotlightShape />
      <div className="flex h-screen w-screen items-center bg-primary px-4 font-iregular">
        <div className="relative z-50 m-auto block text-center text-white">
          <div className="mb-8 flex w-full justify-center">
            <Image
              alt="void"
              src="/img/void_head.svg"
              className="px-8"
              width={250}
              height={250}
            />
          </div>
          <h1 className="z-50 block font-terminal text-2xl font-bold uppercase lg:text-3xl">
            Semana da Engenharia Informática
          </h1>
          <h2 className="mt-2 uppercase font-terminal text-xl text-quinary lg:text-2xl">
            In a future not so far away
          </h2>
          <SocialLinks />
          <a
            href="https://2024.seium.org/"
            className="text-md lg:text-md mt-6 block uppercase hover:text-quinary"
          >
            Edição anterior
          </a>
          <a
            href="mailto:relacoes.externas@seium.org"
            className="text-md mt-2 block uppercase text-quinary hover:underline lg:text-lg"
          >
            Seja patrocinador
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
