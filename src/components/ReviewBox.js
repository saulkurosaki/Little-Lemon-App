import './ReviewBox.css';

const ReviewBox = (props) => {
    return(
        <div className="box">
            <header>
                <h1>Rating</h1>
                <img src={props.rating} alt='rating'/>
            </header>
            <main>
                <div className="user">
                    <img src={props.img} alt='reviewer'/>
                    <p>{props.name}</p>
                </div>
                <div className="text">
                    <p>{props.children}</p>
                </div>
            </main>
        </div>
    );
};

export default ReviewBox;