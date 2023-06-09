import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CurrentlyDown from "./Content/CurrentlyDown";
import { DataProvider } from "./Context/DataContext";
import { SendEmailButton, LinkedinButton } from "./components/Buttons";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <div class="circle"></div>
          <div class="contents flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<CurrentlyDown />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </DataProvider>
  );
}
