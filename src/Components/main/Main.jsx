import './main.css'
//import Navbar from '../navbar/Navbar.jsx';
import backgroundImage from './background-image.jpg'




function Main() {
    return (
        <main>
            <Navbar />
            <img className='background-img' src={backgroundImage} atl='background_image' />

        </main>

    );
}

export default Main;