import React from 'react';
import './style.css'

const Homepage = () => {
    return (
        <div className="page">
            <h1>Publish your passions!</h1>
            <img src="./images/home1.jpg" style={{borderRadius:"50%",height:"400px",width:"500px",align:"center",marginLeft:"120px"}}></img>
            
            <p>
            {/* “Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.” */}
            </p>
            <p>“Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.”</p>
            

        </div>
    );
};

export default Homepage;