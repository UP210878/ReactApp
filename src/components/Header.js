import React,{useContext, useState} from "react";
import "../App.css";
import HermesLogo from "../Icons/HermesLogo";
import DataContext from "../Context/DataContext";

const Header = () => {
  const {language,HandleLanguage} = useContext(DataContext)
    return (
    <nav class="headerColor h-[89.95px] fixed z-20">
      <div class="flex justify-between items-center h-full md:mx-7 mx-5">
        <div class="flex flex-row h-full-items-center">
          <div class="md:mx-1 lg:ml-2 lg:mr-10 sm:mx-2">
            <button style={{ outline: "none" }}>
              <HermesLogo width={"46.17"} height={"46.08"} fill={"black"} />
            </button>
          </div>
        </div>
        <div class="md:flex md:flex-row justify-between color_text_Subdued">
          <div class="mx-2">
            <p
              onClick={HandleLanguage}
              style={{ outline: "none" }}
              class={language === "en" ? "header_Text_Selected" : "header_Text"}
            >
              ENG
            </p>
          </div>
          <div class="mx-2">
            <p
              onClick={HandleLanguage}
              style={{ outline: "none" }}
              class={language === "es" ? "header_Text_Selected" : "header_Text"}
            >
              ESP
            </p>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
