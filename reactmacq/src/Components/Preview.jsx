import React from "react";
import "./Preview.css"
import { useLocation } from "react-router-dom";



export default function Preview() {
    
    const locat=useLocation()
    const data=locat.state;
    console.log(data)
    return (
        <>
            <div id="main-container">
                <nav class="navbar">
                    <button id="lg-out">Logout</button>
                </nav>
                <h1>MCQ's Preview</h1>
                <div id="preview-container">
                    <textarea name="" id="preview-text" cols={20} rows={10}>Preview is done here</textarea><br />
                    <button className="btn3">Previous</button>
                    <button className="btn3">Edit</button>
                    <button className="btn3">Next</button>

                </div>

            </div>



        </>
    );
}