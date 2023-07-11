import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        HEY HI, THIS IS RAJ NARAYANAN. I AM A
                        BUDDING SOFTWARE AND APP DEVELOPER
                        WHO IS ALWAYS LOOKING FORWARD FOR
                        NEW THINGS TO LEARN. CURRENTLY I AM WORKING ON A GOAL
                        TOWARDS BECOMING ONE OF THE FINEST
                        DEVELOPER.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>
                        Address: SKCET , Coimbatore
                        <br />
                        Phone: +91 9025760240
                        <br />
                        Email: 2003braj@gmail.com
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/in/b-raj-narayanan-5336a5228" target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com/raj_narayanan_b?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Health Insurance Portal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
