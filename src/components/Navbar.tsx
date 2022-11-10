import Image from "next/image";
import logoImg from "../assets/navbar/logo.svg";
import iconImg from "../assets/navbar/icon.png";
import { useState } from "react";

export default function navbar() {
  const [color, setColor] = useState(false);
  const handleBackgroundColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if(typeof window !== "undefined") {
    document.addEventListener("scroll", handleBackgroundColor)
  };

  return (
    <nav className={`w-full h-28 flex fixed top-0 py-10 px-8 justify-between items-center z-50 2xl:px-36 ${color && "bg-black-500"}`}>
      <Image src={logoImg} alt="logo"></Image>
      <Image src={iconImg} alt="" className=" max-w-md"></Image>
      <ul className="flex gap-12 text-sm text-white justify-between items-center ">
        <li>
          {" "}
          <span className="">VIDEO E TELAS</span>
        </li>
        <li>
          {" "}
          <span>BASTIDORES</span>
        </li>
        <li>
          {" "}
          <span>COMUNIDADE</span>
        </li>
        <li>
          {" "}
          <a href="https://store.playstation.com/pt-br/product/UP9000-CUSA07408_00-00000000GODOFWAR" target="_blank" className="bg-yellow-600 text-black-500 font-bold py-5 px-8">
            {" "}
            COMPRE AGORA
          </a>
          
        </li>
      </ul>
    </nav>
  );
}
