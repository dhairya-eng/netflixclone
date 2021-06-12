import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer">
        <p className="info">Question Call us on <a href="#">123456789</a></p>
            <div className="row">
                <div className="col-lg-3">
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Investor relation</a></p>
                    <p><a href="#">Privacy</a></p>
                    <p><a href="#">Speed Test</a></p>
                </div>
                <div className="col-lg-3">
                    <p><a href="#">Help center</a></p>
                    <p><a href="#">Jobs</a></p>
                    <p><a href="#">Cookie Preferences</a></p>
                    <p><a href="#">Legal Notices</a></p>
                </div>
                <div className="col-lg-3">
                    <p><a href="#">Account</a></p>
                    <p><a href="#">Ways to Watch</a></p>
                    <p><a href="#">Corporate Information</a></p>
                    <p><a href="#">Netflix Originals</a></p>
                </div>
                <div className="col-lg-3">
                    <p><a href="#">Media Centre</a></p>
                    <p><a href="#">Terms of Use</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>
            </div>
            <footer>Netflix INDIA</footer>
        </div>
    )
}
