import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";


function CurrentlyDown() {
  const {language,HandleLanguage} = useContext(DataContext);
    return (<>
      <p onClick={HandleLanguage} class={language === "en" ? "header_Text_Selected" : "header_Text"}style={{ fontSize: "500%" }}>Hola
      </p>
      <div class="pt-5">
        <section class="p-5 mt-5">{/* Texto va aqui */}</section>
        <div class="px-5 mx-5 space-x-3">
          {SendEmailButton()} {LinkedinButton()}
        </div>
      </div></>
    
  );
}

export default CurrentlyDown;
