import {sendEmailButton, 
    linkedinButton
 } from "../components/Buttons";

function mainPage(){
    return(<><h2 style={{fontSize:'800%'}}>Hola</h2>
    {sendEmailButton()} {linkedinButton()}</>)
}

export default mainPage;