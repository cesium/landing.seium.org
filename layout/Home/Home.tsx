import { SocialLinks } from "./components";
import Image from "next/image";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Semana Engenharia Informática</title>
      </Head>
      <div className="flex h-screen w-screen items-center">
        <div className="m-auto block bg-primary text-center text-white">
          <Image
            src="/img/sei-logo.svg"
            width={400}
            height={400}
            alt="SEI logo"
          ></Image>
          <h1 className="font-terminal-uppercase z-50 block text-5xl font-bold">
            SEMANA DA ENGENHARIA INFORMÁTICA
          </h1>
          <SocialLinks />
          <a href="https://2023.seium.org/" className="mt-6 block text-lg">
            EDIÇÃO ANTERIOR
          </a>
          <a
            href="mailto:relacoes.externas@seium.org"
            className="mt-2 block text-xl text-quinary underline"
          >
            SEJA PATROCINADOR
          </a>
        </div>
        <div className="fixed bottom-0 left-0 hidden h-auto w-1/2 p-0 lg:block">
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
