import React from 'react';
import '../../App.css';

// image 
import logo from '../../image/logo.png';
import img1 from '../../image/facebook.png';
import img2 from '../../image/twiter.png';
import img3 from '../../image/linkedin (2)@2x.png';
import img4 from '../../image/dribbble (1)@2x.png';


const Footer = () => {
    return (
        <div className="TeamBG">
            <div className="container">
                <div className="text-center">
                    <h2 className="font-weight-bold">Get your design right, right now</h2>
                    <p className="text-secondary">Be the first know our latest offers and updates!</p>
                    <form>
                        <input className="form-control py-4" type="email" placeholder="Enter your email address " />
                        <button className="btn footerBtn">Get Started</button>
                    </form>
                </div>


                <div className="row">
                    <div className="col-md-5">
                        <figure>
                            <img style={{ height: "100px", marginTop: "50px" }} src={logo} alt="" />
                        </figure>
                        <div className="footerIcon d-flex">
                            <div><img src={img1} alt="" /></div>
                            <div className="mx-4"><img src={img2} alt="" /></div>
                            <div><img src={img3} alt="" /></div>
                            <div className="mx-4"><img src={img4} alt="" /></div>
                        </div>
                    </div>

                    <div className="col-md-2 footerItem">
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                    </div>
                    <div className="col-md-2 footerItem">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Status</li>
                        </div>
                    <div className="col-md-3 footerItem">
                            <li>About Us</li>
                            <li>Terms of Service</li>
                            <li>Security</li>
                            <li>Login</li>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Footer;


