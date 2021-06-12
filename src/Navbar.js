import React ,{useState} from 'react'
import "./Navbar.css";
 function Navbar() {
     const [btn,onhover]=useState(false);
     function onclicked(){
         onhover(true);
     }
     function onleaved(){
         onhover(false);
     }
    return (
        <div className="navbar">
            <div className="navbar_image">
                {/* <img src="https://venturebeat.com/wp-content/uploads/2017/08/netflix_logo.png?fit=400%2C200&strip=all"alt=""></img> */}
                <span>NETFLIX</span>
            </div>
            <div className="navbar_icon">
                <button style={{backgroundColor:btn?"white":"black"}} onMouseOver={onclicked} onMouseOut={onleaved} className="buttonone">language</button>
                <button className="buttontwo">Sign IN</button>
            </div> 
            <div className="navbar_content">
                <h1>Unlimited Movies,TV Show and More</h1>
                <h2>Watch any Time and cancel anytime</h2>
                <p>Enter Your Email your restart Your membership</p>
            </div>
            <div className="navbar_form">
                <input type="email" name="email" placeholder="Email"></input>
                <button type="button" class="btn btn-danger">Get Started</button><br />
            </div>
            
        </div>
    )
}
export default Navbar;