import { Button, SocialLinks, StarryBackground } from "./components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Semana da Engenharia Informática</title>
      </Head>
      <div className="flex h-screen w-screen select-none items-center px-4 font-iregular">
        <div className="m-auto flex flex-col items-center gap-4 text-center text-white">
          <div className="flex w-full flex-col items-center justify-center gap-4 pb-4">
            <Image
              alt="void"
              src="/img/sei-logo.svg"
              className="px-8"
              width={250}
              height={250}
            />
            <div className="flex w-full flex-row items-center justify-center gap-2">
              by
              <Link target="_blank" href="https://cesium.pt">
                <Image
                  alt="cesium"
                  width={90}
                  height={90}
                  src="/img/cesium-logo.svg"
                ></Image>
              </Link>
            </div>
          </div>
          <Button
            title="Sponsor us"
            href={"mailto:relacoes.externas@seium.org"}
          />
          <Link
            href={"https://2024.seium.org"}
            className="font-terminal-uppercase transition-all hover:underline"
          >
            Last edition
          </Link>
          <SocialLinks />
        </div>
      </div>
      <StarryBackground />
    </>
  );
}

export default Home;
