import React from "react";
import "../App.css";
/*import handleLanguage from "./LanguageSwitch";*/
import HermesLogo from "../Icons/HermesLogo";
let language = "en";

function handleLanguage(){
  if (language === "en"){
    language = "es"
    return "es"
  }
  else if (language ==="es"){
    language = "en"
    return "en"
  }
  else{
    language = "en"
  }
}

const Header = () => {
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
        <div class="hidden md:flex md:flex-row justify-between color_text_Subdued">
          <div class="mx-2">
            <p
              onClick={language = "en"}
              style={{ outline: "none" }}
              class={language === "en" ? "header_Text_Selected" : "header_Text"}
            >
              ENG
            </p>
          </div>
          <div class="mx-2">
            <p
              onClick={language = "es"}
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
