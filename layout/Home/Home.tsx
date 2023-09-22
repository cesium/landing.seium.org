import { Animation, SocialLinks } from "./components";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Semana Engenharia Informática</title>
      </Head>
      <div className="flex h-screen w-screen items-center bg-primary px-4">
        <div className="relative z-50 m-auto block text-center font-iregular text-white">
          <Animation />
          <h1 className="font-terminal-uppercase z-50 block text-3xl font-bold lg:text-5xl">
            Semana da Engenharia Informática
          </h1>
          <SocialLinks />
          <a
            href="https://cesium.link/u/3dhgc-NsVI"
            className="mt-2 block text-lg uppercase text-quinary underline lg:text-xl py-2"
          >
            Junta-te à nossa equipa
          </a>
          <a
            href="https://2023.seium.org/"
            className="text-md mt-6 block uppercase lg:text-lg"
          >
            Edição anterior
          </a>
          <a
            href="mailto:relacoes.externas@seium.org"
            className="mt-2 block text-lg uppercase text-quinary underline lg:text-xl"
          >
            Seja patrocinador
          </a>
        </div>
        <div className="fixed bottom-0 left-0 z-0 hidden h-auto w-1/2 p-0 lg:block">
          <img
            src="/img/void.svg"
            alt="Void"
            className="translate-y-1/5 h-auto w-full -translate-x-1/2"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
