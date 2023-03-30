import { SendEmailButton, LinkedinButton } from "../components/Buttons";
import React, { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import Home from "../components/Home";

const CurrentlyDown = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <div class="p-5">
        <div class="p-20 mt-5">
        <section>{Home()}

        <div class="space-x-3 mt-4 mx-4 px-5">
          {SendEmailButton()} {LinkedinButton()}
        </div></section></div>
      </div>
    </>
  );
};

export default CurrentlyDown;
