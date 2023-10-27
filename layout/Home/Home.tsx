import { Animation, SocialLinks } from "./components";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <>
      <Head>
        <title>Semana Engenharia Informática</title>
      </Head>
      <div className="flex h-screen w-screen items-center bg-primary px-4 font-iregular">
        <div className="relative z-50 m-auto block text-center text-white">
          <Animation />
          <h1 className="z-50 block font-terminal text-2xl font-bold uppercase lg:text-3xl">
            Semana da Engenharia Informática
          </h1>
          <h2 className="mt-2 font-terminal text-xl text-quinary lg:text-2xl">
            6-9 fevereiro 2024
          </h2>
          <SocialLinks />
          <a
            href="https://2023.seium.org/"
            className="text-md lg:text-md mt-6 block uppercase"
          >
            Edição anterior
          </a>
          <a
            href="mailto:relacoes.externas@seium.org"
            className="text-md mt-2 block uppercase text-quinary underline lg:text-lg"
          >
            Seja patrocinador
          </a>
        </div>
        <div className="fixed bottom-0 left-0 z-0 hidden h-auto w-1/2 p-0 lg:block">
          <Image
            src="/img/void.svg"
            width={2000}
            height={2000}
            alt="Void"
            className="translate-y-1/5 m-0 h-auto w-full -translate-x-1/2"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
