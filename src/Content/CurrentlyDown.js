import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import React, { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import Home from "../components/Home";

const CurrentlyDown = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <div class="p-5 fixed min-h-screen alignscreen">
        <div class="flex lg:p-20 pt-5 sm:mt-5 md:mt-5">
        <section>{Home()}

        <div class="lg:space-x-3 mt-4 ">
          {SendEmailButton()} {LinkedinButton()}
        </div></section></div>
      </div>
    </>
  );
};

export default CurrentlyDown;
