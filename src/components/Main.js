import './Main.css';
import baguettes from '../icons_assets/restauranfood.jpg';

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
                        </div>
                        <img id='promo-food-img' src={baguettes} alt='baguettes'/>
                    </article>
                </section>
                <section>
                    <article>Soy el artículo 1 de la sección 2</article>
                    <article>Soy el artículo 2 de la sección 2</article>
                </section>
            </main>
        </>
    );
};

export default Main;