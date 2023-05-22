import './Footer.css';
import footerLogo from '../icons_assets/Little Lemon Footer Green.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container'>
                <div id='footer-logo'>
                    <img src={footerLogo} alt='Logo'/>
                </div>
                <div className='columns'>
                    <ul>
                        <li><h3>Doormat Navigation</h3></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='#'>About</Link></li>
                        <li><Link to='#'>Menu</Link></li>
                        <li><Link to='/reservation-page'>Reservations</Link></li>
                        <li><Link to='#'>Order Online</Link></li>
                        <li><Link to='#'>Login</Link></li>
                    </ul>
                </div>
                <div className='columns'>
                    <ul>
                        <li><h3>Contact</h3></li>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
                <div className='columns'>
                    <ul>
                        <li><h3>Social Media Links</h3></li>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;