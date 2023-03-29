import "../App.css";
import { language } from "./Header";

function handleLanguage(){
    if (language === "en") {
        language = "es"
    }

    else if (language === "es") {
        language = "en"
    }
    
    else {
        return "en"
    }
}

export default handleLanguage;