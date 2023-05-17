import './NavBar.css';
import logo from '../icons_assets/Logo.png';

const NavBar = () => {
    return(
        <>
            <nav>
                <img className="logo" src={logo} alt="Little Lemon Logo"/>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Reservations</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;