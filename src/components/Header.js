import React from "react";
import "../css/App.css";
import cimg from "../images/cicon.png"
import c2img from "../images/c-logo.png"
import javaimg from "../images/java1.png"
import pythonimg from "../images/python2.png"
import chash from "../images/chash.png"
import editor from "../images/editor.png"
export default function Navbar(){   

    return(
    <>
    <div className="navbar">
        <p> 🔗 Code-Battle</p>
    </div>
    <div className="caption">
        <h1>Coding Playground</h1><br/>
        <p> "Make it work, make it right, make it fast".<br/> First, solve the problem. Then, write the code to Enhance Your <br/> Programming Skills. </p> <br/>
        <div>
       
       <button className="button"><img className="image" src={cimg} alt="cimg"></img></button>
       <button className="button"> <img className="image radius" src={c2img} alt="cimg"></img></button>
       <button className="button"><img className="image" src={javaimg} alt="cimg"></img></button>
       <button className="button"><img className="image" src={pythonimg} alt="cimg"/></button>
       <button className="button"> <img className="image radius" src={chash} alt="cimg"></img></button> 
        
        </div>
        <br/> <br/><button className="button buttoncolor">Open Editor</button>
        <div><img className="editor-img" src={editor} alt=""></img></div>
    </div>
    </>    
    );
}