import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import 'bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

function MainPage(){
  return <h2>Hola</h2>
}

