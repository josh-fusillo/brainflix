import React from "react";
import './NavBar.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';

import { Link } from 'react-router-dom'

let noSubmit = (event) => {
    event.preventDefault();    
    event.target.reset();
  }

const navBar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="navbar">
                    <Link to="/" className="navbar__anchor"><img src={logo} alt="Logo" className="navbar__logo" /></Link>
                    <form action="submit" className="navbar__search" onSubmit={noSubmit}>
                        <input type="text" className="navbar__search-style" name="search" placeholder="Search"></input>
                    </form>
                    <div className="navbar__upload-circle-wrapper">
                        <Link to="/upload"> <button type="submit" className="navbar__upload-button">UPLOAD</button></Link>
                        <div className="navbar__circle-image"></div></div>
                </div>
            </nav>
        </header>
    )

}

export default navBar