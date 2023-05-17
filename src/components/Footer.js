import './Footer.css';
import footerLogo from '../icons_assets/Little Lemon Footer Green.jpg';

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
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
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