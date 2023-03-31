import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import React, { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import Home from "../components/Home";

const CurrentlyDown = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <div class="p-5">
        <div class="lg:p-20 lg:mt-5 pt-5 sm:mt-5 md:mt-5">
        <section>{Home()}

        <div class="lg:space-x-3 mt-4 lg:mx-1 lg:px-20">
          {SendEmailButton()} {LinkedinButton()}
        </div></section></div>
      </div>
    </>
  );
};

export default CurrentlyDown;
