import Card from './Card';
import Button from './Button';
import './Main.css';
import baguettes from '../icons_assets/restauranfood.jpg';
import greekSalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';

const Main = () => {
    return(
        <>
            <main>
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
                <section className='specials'>
                    <article>
                        <div className="banner">
                            <p>This Week Specials!</p>
                            <Button>Online Menu</Button>
                        </div>
                        <div className='cards'>
                            <Card name='Greek Salad' price='$12.99' img={greekSalad}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic an rosemary croutons.</Card>
                            <Card name='Bruchetta' price='$5.99' img={bruchetta}>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</Card>
                            <Card name='Lemon Dessert' price='$5.00' img={lemonDessert}>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</Card>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Main;