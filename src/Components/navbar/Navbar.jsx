
import React from "react";
import './navbar.css';




function Navbar() {
    return (

        <nav className='foggy-fogbar'>
            <ul>
                <li className='menu-text'>Home</li>
                <li className='menu-text'>Menu</li>
                <li className='menu-text'>Contact Us</li>
            </ul>

            <h3>Free Delivery</h3>

            {/*<img scr={instagram} alt="instagram-logo"/>
            <img scr={facebook} alt="facebook"/>
    <img scr={yelp} alt="yelp-logo"/>*/}
        </nav>

    );
}


export default Navbar