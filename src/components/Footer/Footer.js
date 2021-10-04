import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className=" row p-5 mt-5 footer">
            <div className="col md-col-3 footer-box">
                <h3>
                    Star University
                </h3>
                <small>
                    Box 35300 <br />
                    1810 Campus Way NE <br />
                    Bothell, WA 98011-8246 <br />
                    +1-2534-4456-345 <br />
                    admin@kingsteruni.edu
                </small>

            </div>
            <div className="col md-col-3 footer-box">
                <h5>Our Campus</h5>
                <small>
                    Acedemic <br />
                    Planning & Administration <br />
                    Campus Safety <br />
                    Office of the Chancellor <br />
                    Facility Services <br />
                    Human Resources <br />
                </small>
            </div>
            <div className="col md-col-3 footer-box">
                <h5>Campus Life</h5>
                <small>
                    Accessibility <br />
                    Financial Aid <br />
                    Food Services <br />
                    Housing <br />
                    Information Technologies <br />
                    Student Life
                </small>
            </div>
            <div className="col md-col-3 footer-box">
                <h5>Acadenics</h5>
                <small>
                    Canvas <br />
                    Catalyst <br />
                    Library <br />
                    Time Schedule <br />
                    Apply For Admissions <br />
                    Pay My Tuition <br />
                </small>
            </div>
        </div>
    );
};

export default Footer;