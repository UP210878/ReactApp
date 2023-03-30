import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import React,{ useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";


const CurrentlyDown = () => {
  const {language} = useContext(DataContext);
    return (<DataContext.Provider>
      <p style={{ fontSize: "500%" }}>{language === "en" ? "header_Text_Selected" : "header_Text"}
      </p>
      <div class="pt-5">
        <section class="p-5 mt-5">{/* Texto va aqui */}</section>
        <div class="px-5 mx-5 space-x-3">
          {SendEmailButton()} {LinkedinButton()}
        </div>
      </div></DataContext.Provider>
    
  );
}

export default CurrentlyDown;
