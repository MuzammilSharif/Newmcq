import React from 'react'
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    // ----------below all the required states are defined -------------- 
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [bgColor, setBgColor] = useState("Login");
    const navigate = useNavigate();


    // -------------------- below Event handeling --------------------------------
    // ----------------------USername handeling-----------------------------------
    const handleUpUser = (e) => {
        setUser(e.target.value);

    }
    //---------------------wrote for password handeling-----------------------------
    const handleUpPass = (e) => {
        setPass(e.target.value);
    }
    // ---------------------button handeling --------------------------------------------
    const handleChangeColor = () => {
        
            localStorage.setItem("values",true)
    
    }
  return (
    <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">QuizCraft</a>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>


                        </ul>

                        <button id="btnSignup">Sign Up</button>

                    </div>
                </div>
            </nav>
            <div id="Main-container">


                <div id="login-containner">

                    <h1>Welcome</h1>
                    <form action="">
                        <label htmlFor="username " >Username:</label><br />
                        <input type="text" id="username" name="username" value={user} onChange={handleUpUser} /><br />
                        <label htmlFor="password ">Password:</label><br />
                        <input type="text" id="password" name="password" value={pass} onChange={handleUpPass} /><br />
                        <button  onClick={handleChangeColor}>Login</button>

                    </form>
                </div>
            </div>
        </>
  
  )
}

export default Login