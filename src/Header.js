import React from 'react';
import "../src/CSSFile/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="main">
    <div className="item">
    <div className="item1">
    <Link className="item1" to="/">Home</Link>
    </div>
    <div className="item2">
    <Link className="item2" to="/GroupTeamMember">Team</Link>
    </div>
    </div>
  
    </div>
      
    </>
  )
}

export default Header;
