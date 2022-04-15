import React from "react";
import '../../css/Console.css'

export default function Console (){
    return (
    <>
    <div className="flex">
        <div className="sub-div">
            <p className="nav">CONSOLE  <a className="cancle-button"type="button"> <b> x </b></a></p>
           <p>Hello World</p>
        </div>
        <div className="sub-div">
            <p className="nav">WEBSITE VIEW  <a className="cancle-button" type="button"><b> x </b></a></p>
            <p>Hello World</p>
        </div>

    </div>
    </>
    );
}