import {SocialLinks} from "./components"
import Image from "next/image";
import Head from "next/head";

function Home() {
    return (
      <>
        <Head>
          <title>Semana Engenharia Informática</title>
        </Head>
        <div className="w-screen h-screen flex items-center">
    <div className="bg-primary m-auto text-center text-white block">
        <Image src="/img/sei-logo.svg" width={400} height={400} alt="SEI logo"></Image>
      <h1 className="text-5xl font-bold font-terminal-uppercase z-50 block">SEMANA DA ENGENHARIA INFORMÁTICA</h1>
      <SocialLinks />
      <a href="https://2023.seium.org/" className="block mt-6 text-lg">
        EDIÇÃO ANTERIOR
      </a>
      <a
        href="mailto:relacoes.externas@seium.org"
        className="block mt-2 text-xl underline text-quinary"
      >
        SEJA PATROCINADOR
      </a>
    </div>
    <div className="hidden lg:block fixed bottom-0 left-0 p-0 w-1/2 h-auto">
      <img src="/img/void.svg" alt="Void" className="w-full h-auto -translate-x-1/2 translate-y-1/5"></img>
    </div>
  </div>
  </>
    );
}

export default Home;