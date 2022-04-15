import React from 'react';
import "../css/App.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
            <div className="navbar">
                 <Link className="link" to="/"><h1>🔗Code Editor</h1></Link>
            </div>
    </>
  )
}

export default Header;