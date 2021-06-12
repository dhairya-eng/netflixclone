import React from 'react'
import "./QA.css";
export default function QA() {
    return (
        <div className="qa">
            <h1>Frequently Asked Questions</h1>
            <div className="qa_content">
                <h2>What is Netflix </h2>
            </div>
            <div className="qa_content1">
                <h2>How do i cancel  </h2>
            </div>
            <div className="qa_content2">
                <h2>Is Netflix good for the kids </h2>
            </div>
            <div className="qa_content3">
                <h2>Where can i Watch</h2>
            </div>
            <p>Enter Your Email to restart Your membership</p>
            <div className="qa_form">
                <input type="email" name="email" placeholder="Email"></input>
                <button type="button" class="btn btn-danger">Get Started</button><br />
            </div>
            
        </div>
    )
}
