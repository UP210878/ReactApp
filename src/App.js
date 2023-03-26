import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import {MainPage,
ContactPage,
AboutPage,
PricingPage} from './webPages.js'
import 'bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/about" element= {<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
      <Footer pagina = "hol" />
    </Router>
  );
}

