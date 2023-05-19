import './NavBar.css';
import logo from '../icons_assets/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='Nav-Container'>
            <nav className='Navigation-Bar'>
                <img className="logo" src={logo} alt="Little Lemon Logo"/>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>About</Link></li>
                    <li><Link to='#'>Menu</Link></li>
                    <li><Link to='reservation-page'>Reservations</Link></li>
                    <li><Link to='#'>Order Online</Link></li>
                    <li><Link to='#'>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;