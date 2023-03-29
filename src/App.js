import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import mainPage from "./Content/CurrentlyDown";

export default function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={mainPage()} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


