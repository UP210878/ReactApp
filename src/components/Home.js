import React,{useContext} from "react";
import DataContext from "../Context/DataContext";
import '../App.css'

const Home = () => {
  const {language} = useContext(DataContext);
  return (
    <div className="container color_text_Content">
      <div className="row">
        <div className="col-6">
          <div className="content_Text_Subtitle">
            <p className="home.heading.Sub">{language === "en"?"SORRY WE'RE CURRENTLY DOWN":"LAMENTAMOS ESTAR INACTIVOS"}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="content_Text_Title">
            <p className="home.heading.Title">{language === "en"?"WE'RE IMPROVING OUR WIRES TO GIVE YOU A BETTER EXPERIENCE":"ESTAMOS MEJORANDO NUESTRA CONEXIÓN PARA BRINDAR UNA MEJOR EXPERIENCIA "}
            </p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    
  );
};

export default Home;