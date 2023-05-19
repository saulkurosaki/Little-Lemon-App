import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
        <button>
            <Link id='link' to={props.path}>{props.children}</Link>
        </button>
    );
};

export default Button;