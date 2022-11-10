import Image from "next/image";
import Navbar from "../components/Navbar";
import kratosAtreusImg from "../assets/first-section/kratos-atreus.png";
import frameSection from "../assets/second-section/frame-section.svg";

import kratosCharImg from "../assets/second-section/chars/kratos.png";
import atreusCharImg from "../assets/second-section/chars/atreus.png";
import freyaCharImg from "../assets/second-section/chars/freya.png";
import angrbodaCharImg from "../assets/second-section/chars/angrboda.png";

import firstOptionThirdSectionImg from "../assets/third-section/op-1.png";
import secondOptionThirdSectionImg from "../assets/third-section/op-2.png";
import thirdOptionThirdSectionImg from "../assets/third-section/op-3.png";
import thirdSectionMainImg from "../assets/third-section/god-of-war-ragnarok-gow.png";

import combatAxeImg from "../assets/fouth-section/combat-axe.png";
import combatBowImg from "../assets/fouth-section/combat-bow.png";

export default function Home() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <main className="h-full mx-auto flex flex-col items-start justify-center gap-y-24">
        <section className="h-screen w-full bg-firstSection bg-cover bg-no-repeat">
          <div className="h-full flex items-center justify-center px-12">
            <div className="w-1/2 text-white flex flex-col ">
              <h1 className="text-responsiveH1 font-bold leading-[80px] self-stretch">
                Um mundo mais sombrio e primitivo
              </h1>
              <p className="text-lg w-[90%] mt-4 opacity-80">
                Do mármore e colunas ornadas do Olimpo para as florestas, este é
                um reino novo, com suas próprias espécies de criaturas, monstros
                e deuses.
              </p>
              <div className="flex gap-6 mt-12">
                <button className="bg-yellow-600 text-black-500 font-bold py-5 px-8">
                  <span>COMPRE AGORA</span>
                </button>
                <button className="font-bold py-5 px-8 border">
                  <span>SAIBA MAIS</span>
                </button>
              </div>
            </div>
            <div className="self-end">
              <Image src={kratosAtreusImg} alt="logo" className=""></Image>
            </div>
          </div>
        </section>
        <section className="w-full h-screen">
          <div className="h-full flex flex-col w-full px-[10%] py-[100px]">
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-bold text-responsiveH2 ">
                Os maiores heróis dos Nove Reinos
              </h2>
              <Image src={frameSection} alt=""></Image>
            </div>
            <ul className="flex justify-between h-[560px] w-full gap-4">
              <li className="flex flex-col h-full justify-end items-end bg-ulSecondSection relative">
                <Image
                  src={kratosCharImg}
                  alt="kratos"
                  className="max-h-full w-auto"
                ></Image>
                <span className="w-full text-center absolute bottom-10 font-bold">
                  Kratos
                </span>
              </li>
              <li className="flex flex-col h-full justify-end items-end bg-ulSecondSection relative">
                <Image
                  src={atreusCharImg}
                  alt="atreus"
                  className="max-h-full w-auto"
                ></Image>
                <span className="w-full text-center absolute bottom-10 font-bold">
                  Atreus
                </span>
              </li>
              <li className="flex flex-col h-full justify-end items-end bg-ulSecondSection relative">
                <Image
                  src={freyaCharImg}
                  alt="freya"
                  className="max-h-full w-auto"
                ></Image>
                <span className="w-full text-center absolute bottom-10 font-bold">
                  Freya
                </span>
              </li>
              <li className="flex flex-col h-full justify-end items-end bg-ulSecondSection relative">
                <Image
                  src={angrbodaCharImg}
                  alt="angrboda"
                  className="max-h-full w-auto"
                ></Image>
                <span className="w-full text-center absolute bottom-10 font-bold">
                  Angrboda
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full h-screen">
          <div className="h-full w-full relative flex justify-center px-48 ">
            <ul className="absolute w-[20%] left-[10%] flex flex-col items-center justify-center gap-6">
              <li className="w-full">
                <Image
                  src={firstOptionThirdSectionImg}
                  alt="Kratos e Atreus no Gelo"
                  quality={100}
                  className="w-full h-auto"
                ></Image>
              </li>
              <li className="w-full">
                <Image
                  src={secondOptionThirdSectionImg}
                  alt="Kratos e Atreus no Gelo"
                  quality={100}
                  className="w-full h-auto"
                ></Image>
              </li>
              <li className="w-full">
                <Image
                  src={thirdOptionThirdSectionImg}
                  alt="Kratos e Atreus no Gelo"
                  quality={100}
                  className="w-full h-auto"
                ></Image>
              </li>
            </ul>
            <Image
              src={thirdSectionMainImg}
              alt="Kratos e Atreus no barco"
              className="h-fit"
            ></Image>
            <div className="flex flex-col gap-6 w-[20%] absolute right-[10%] bottom-1/2">
              <span className="font-bold text-responsiveH2">
                lute no reino nórdico
              </span>
              <p className="text-base opacity-80 w-[90%]">
                Com a vingança contra os deuses do Olimpo em um passado
                distante, Kratos agora vive como um mortal no reino dos deuses e
                monstros nórdicos. <br/> <br/> É nesse mundo duro e implacável que ele deve
                lutar para sobreviver...e ensinar seu filho a fazer o mesmo.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-screen">
          <div className="h-full w-full relative flex flex-col px-[10%] gap-10">
            <h3 className="text-responsiveH2 font-bold uppercase ">
              armas lendárias
            </h3>
            <div className="flex gap-6 ">
              <div className=" h-full w-[50%] flex justify-between px-12 py-12 bg-black-300 relative">
                <div className="w-[50%] flex flex-col gap-4">
                  <span className="text-2xl font-bold uppercase">
                    Poder rúnico refinado
                  </span>
                  <p className="text-4 opacity-80">
                    Novas habilidades permitem que Kratos use seu machado de
                    maneiras inéditas.
                  </p>
                  <button className="bg-yellow-600 w-fit text-black-500 font-bold py-2 px-2">
                    SAIBA MAIS
                  </button>
                </div>

                <Image
                  src={combatAxeImg}
                  alt="Machado de combate"
                  className="w-auto h-full absolute right-0 top-0"
                ></Image>
              </div>
              <div className=" h-fit w-[50%] flex justify-between px-12 py-12 bg-black-300 relative">
                <div className="w-[50%] flex flex-col gap-4">
                  <span className="text-2xl font-bold uppercase">
                    Mais do que um garoto com arco
                  </span>
                  <p className="text-4 opacity-80">
                    Atreus aprimorou suas habilidades de arquearia para desferir
                    novos ataques.
                  </p>
                  <button className="bg-yellow-600 w-fit text-black-500 font-bold py-2 px-2">
                    SAIBA MAIS
                  </button>
                </div>

                <Image
                  src={combatBowImg}
                  alt="Machado de combate"
                  className="w-auto h-full absolute right-0 top-0"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
