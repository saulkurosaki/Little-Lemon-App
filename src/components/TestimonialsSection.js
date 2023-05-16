import ReviewBox from "./ReviewBox";
import "./TestimonialsSection.css";
import Alissa from '../icons_assets/Alissa.jpeg';
import Thomas from '../icons_assets/Thomas.jpg';
import Elizabeth from '../icons_assets/Elizabeth.jpg';
import Matthew from '../icons_assets/Matthew.jpeg';
import fiveStars from '../icons_assets/Rating Stars 5.jpg';
import fourStars from '../icons_assets/Rating Stars 4.jpg';

const TestimonialsSection = () => {
    return(
        <section className='testimonials'>
            <article>
                <div className="title">
                    <h1>Testimonials</h1>
                </div>
                <div className="reviewers">
                    <ReviewBox name='Alissa' img={Alissa} rating={fiveStars}>
                        This is one of my best experience of a good restaurant. We tasted salad and yogurt that was delicious. After nearly 20 minutes mains arrived including kebab(grilled lamb meat)with boiled rice and grilled tomato.
                    </ReviewBox>
                    <ReviewBox name='Thomas' img={Thomas} rating={fiveStars}>
                        Coming to this place made me remember many memories from when I was a child. To my surprise, here are the vast majority of my grandmother's old recipes when she cooked for me. Just a great and delicious place to have a great time.
                    </ReviewBox>
                    <ReviewBox name='Elizabeth' img={Elizabeth} rating={fourStars}>
                        A quite pleasant experience, since although our waiter did have some slight delays with our food, in general my family and I were surprised by how delicious it was.
                    </ReviewBox>
                    <ReviewBox name='Matthew' img={Matthew} rating={fourStars}>
                        I quite like the place, they did a very good job with the decoration as well as with the location. Exceptional food, although I might have had a chance to speak to the chef.
                    </ReviewBox>
                </div>
            </article>
        </section>
    );
};

export default TestimonialsSection;