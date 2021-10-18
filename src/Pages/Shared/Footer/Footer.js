import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    // const { user } = useAuth();
    return (
        <div className="footer mt-5 p-5">
            <div className="row">
                <div className="col-md-4">
                    <h2>Kindly <span className="text-warning">Care</span></h2>
                    <p>The place we call home is the place that feels most comfortable and secure. A sense of home can become especially important as we age. Our in-home senior care services help ease the challenges of aging while encouraging seniors to enjoy the comforts of home.</p>
                </div>
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>13356 California St.</p>
                    <p>Omaha, NE, 34563</p>
                    <p>Tel: 147845875</p>
                    <p>Email: info@kindlycare.com</p>
                </div>
                <div className="col-md-4">
                    <h2>Follow us</h2>
                    <p><i class="fab fa-facebook"></i> facebook.com</p>
                    <p><i class="fab fa-twitter-square"></i> twitter.com</p>
                    <p><i class="fab fa-linkedin"></i> linkedin.com</p>


                </div>
            </div>
            <hr />
            <p><span className="text-white">copyright@healthcare.center-2021</span></p>
        </div>
    );
};

export default Footer;