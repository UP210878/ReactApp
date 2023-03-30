import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import React, { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import Home from "../components/Home";

const CurrentlyDown = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <div class="p-5 flex-1">
        <section class="p-20 mt-5">{Home()}</section>
        <div class="mx-5 px-3">
        <div class="px-5 mx-5 space-x-3">
          {SendEmailButton()} {LinkedinButton()}
        </div></div>
      </div>
    </>
  );
};

export default CurrentlyDown;
