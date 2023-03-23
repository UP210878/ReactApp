import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import {MainPage,
ContactPage,
AboutPage,
PricingPage} from './webPages.js'
import 'bootstrap'

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-4">
          <ul class="navbar-nav sm-icons">
          <Link to="/" class= "navbar-brand">New Product</Link>
            <li>
              <Link to="/" class= "nav-link">Home</Link> 
            </li>
            <li>
              <Link to="/about" class= "nav-link"> About</Link>
            </li>
            <li>
              <Link to="/pricing" class= "nav-link"> Pricing</Link>
            </li>
            <li>
              <Link to="/contact" class= "nav-link"> Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element= {<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div><MainPage></MainPage></div>;
}

function About() {
  return <h2><AboutPage></AboutPage></h2>;
}

function Contact() {
  return <h2><ContactPage></ContactPage></h2>;
}

function Pricing() {
  return <h2><PricingPage></PricingPage></h2>;
}
