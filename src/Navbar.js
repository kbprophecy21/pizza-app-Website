import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import yelp from '../img/yelp.png';
import './App.css';


function Navbar() {
    return (

        <nav className='foggy-fogbar'>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact Us</li>
            </ul>

            <h3>Free Delivery</h3>

            <img scr={instagram} alt="instagram-logo"/>
            <img scr={facebook} alt="facebook"/>
            <img scr={yelp} alt="yelp-logo"/>
        </nav>

    );
}


export default Navbar