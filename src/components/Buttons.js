import { useContext } from "react";
import "../App.css";
import DataContext from "../Context/DataContext";

export const SendEmailButton = () => {
  const {language} = useContext(DataContext)
  return (
    <button
      type="button"
      class="transition ease-in-out delay-100 hover:scale-110 inline-flex outline-none focus:outline-none tracking-wide space-x-3 items-center px-3 py-2.5 bg-blue-400 hover:bg-blue-600 rounded-2xl drop-shadow-md"
    >
      <svg
        class="w-6"
        aria-hidden="true"
        fill="none"
        stroke="white"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          stroke-linecap="linecap"
          stroke-linejoin="arcs"
        ></path>
      </svg>
      <span class="text-white footer_text_Hermes">{language === "en"? 'Send us an email':'Envianos un correo'}</span>
    </button>
  );
};

export const LinkedinButton = () => {
  return (<a href="https://mx.linkedin.com/company/hermes-corp" rel="noreferrer" target={'_blank'}>
    <button
      type="button"
      class="transition ease-in-out delay-100 hover:scale-110 inline-flex outline-none focus:outline-none space-x-3 items-center px-2.5 py-2.5 bg-blue-400 hover:bg-blue-600 rounded-2xl drop-shadow-md"
    >
      <svg
      class="w-6"
      stroke="none"
      fill="white"
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
      >
        <defs></defs>
        <path
          d="M5.82,26H.43V8.64H5.82ZM3.12,6.27A3.14,3.14,0,1,1,5.33.91,3.15,3.15,0,0,1,3.12,6.27ZM26,26H20.62V17.55c0-2-.05-4.6-2.81-4.6s-3.23,2.19-3.23,4.45V26H9.2V8.64h5.17V11h.07a5.67,5.67,0,0,1,5.1-2.8C25,8.21,26,11.8,26,16.46V26Z"
        />
      </svg>
    </button></a>
  );
};

export default SendEmailButton;
