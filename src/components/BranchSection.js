import './BranchSection.css';
import chicago1 from '../icons_assets/restaurant.jpg';
import chicago2 from '../icons_assets/restaurant chef B.jpg';

const BranchSection = () => {
    return(
        <section className='branch'>
            <article>
                <div className="branch-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        You can now visit us and continue enjoying our warm service and the best Mediterranean homemade food made with so much love for you at our new Chicago branch.<br/> Ready to receive you in the best location with the best view of the horizon while delighting your palate with our boiling dishes that will leave your mouth wanting much more of them.<br/> With each of our recipes prepared in detail so that you leave with the best taste of mouth that you could have imagined.<br/> We will be waiting for you here in Chicago.
                    </p>
                </div>
                <div className="chicago">
                    <img id='chicago1' src={chicago1} alt=''/>
                    <img id='chicago2' src={chicago2} alt=''/>
                </div>
            </article>
        </section>
    );
};

export default BranchSection;