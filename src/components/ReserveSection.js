import Button from './Button';
import baguettes from '../icons_assets/restauranfood.jpg';
import './ReserveSection.css';

const ReserveSection = () => {
    return(
        <section className="reserve">
            <article>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className='reserve-text'>We are a family owned<br/>Mediterranean restaurant,<br/>focused on traditional<br/>recipes served with a modern<br/>twist</p>
                    <Button>Reserve a Table</Button>
                </div>
                <img id='promo-food-img' src={baguettes} alt='baguettes'/>
            </article>
        </section>
    );
};

export default ReserveSection;