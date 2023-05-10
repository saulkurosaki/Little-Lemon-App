import './Card.css';
import deliveryIcon from '../icons_assets/delivery icon.png';

const Card = (props) => {
    return(
        <div className='card'>
            <div id='image'>
                <img src={props.img} alt='dish'></img>
            </div>
            <div className='description'>
                <header>
                    <h1>
                        {props.name}
                    </h1>
                    <p>
                        {props.price}
                    </p>
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <h1>
                        Order a delivery <img src={deliveryIcon} alt='delivery icon'/>
                    </h1>
                </footer>
            </div>
        </div>
    );
};

export default Card;