import './ReservationPage.css';
import ReservationForm from './ReservationForm';

const ReservationPage = () => {
    return(
        <div>
            <section className="Reservation">
                <div className="Form-Box">
                    <ReservationForm/>
                </div>
            </section>
            <section className='greetings'>
                <p>We'll be waiting for you</p>
            </section>
        </div>
    );
};

export default ReservationPage;