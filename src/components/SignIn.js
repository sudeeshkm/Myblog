import React from 'react';
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    let navigate = useNavigate();
    const clicked = (event) => {
        navigate("../signup", { replace: true })
    }
    return (
        <>
            {/* <div className="background">
                <div className="shape"></div>
                <div className="shape"></div> */}
            {/* </div> */}
            <form className="signin">
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />

                        <button>Log In</button>
                        <label>Not Registered?</label>
                        <button onClick={clicked}>Sign Up Here!!!!</button>
                        <div class="social">
                            <div className="go"><i className="fab fa-google"></i>  Google</div>
                            <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                        </div>
                    </form>
                </>
                );
};

                export default SignIn;