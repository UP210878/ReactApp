import React from "react";
import HermesLogo from "../Icons/HermesLogo";
import "../App.css";

const Footer = () => {
  return (
    <footer
      className={
        "footerColor p-5 w-full flex flex-col h-10 fixed bottom-0 justify-between items-center h-[144px] md:h-[97px] md:flex-row"
      }
    >
      <div className="flex space-x-2 md:mx-7 mx-2">
        <HermesLogo width={"27.17"} height={"29.08"} fill={"#FAFAFA"} />
        <p className="footer_Text_Hermes color_Text_Base_Backgorund text-white">
          HERMES CORP.
        </p>
      </div>
      <div className="md:mx-7 px-8">
        <p className="px-1:p-0 text-justify footer_Text_Address text-white">

          Av. Aguascalientes Sur #2729, Jardines de las Fuentes, 20278
          Aguascalientes, Ags.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
