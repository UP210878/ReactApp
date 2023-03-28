import {
    Link
  } from "react-router-dom";
const Header = () => {

    return(        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-4">
    <ul class="navbar-nav sm-icons">
    <Link to="/" class= "navbar-brand">New Product</Link>
      <li>
        <Link to="/" class= "nav-link">Home</Link> 
      </li>
    </ul>
  </nav>)
}

export default Header;