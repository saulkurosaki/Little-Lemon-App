import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};

    if(!values.date){
        errors.date = 'Required';
    };

    if(!values.time){
        errors.time = 'Required';
    };

    if(!values.guests){
        errors.guests = 'Required';
    };

    if(!values.occasion){
        errors.occasion = 'Required';
    };

    return errors;
};

const errorStyle = {
    color: 'red',
    fontWeight: '500',
};

const ReservationPage = () => {
    const formik = useFormik({
        initialValues:{
            date:'',
            time:'',
            guests:'',
            occasion:'',
        },
        validate,
        onSubmit: (values) => console.log(values),
    });

    return(
        <div className="Reservation-Page">
            <div className="Form-Box">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        {...formik.getFieldProps('date')}
                    />
                    {formik.touched.date && formik.errors.date ? <div style={errorStyle}>{formik.errors.date}</div> : null}
                    <br/>
                    <label htmlFor="time">Time</label>
                    <input 
                        type="time" 
                        id="time" 
                        {...formik.getFieldProps('time')}
                    />
                    {formik.touched.time && formik.errors.time ? <div style={errorStyle}>{formik.errors.time}</div> : null}
                    <br/>
                    <label htmlFor="guests">Number of Guests</label>
                    <input 
                        type="number" 
                        min={1}
                        max={10}
                        id="guests" 
                        {...formik.getFieldProps('guests')}
                    />
                    {formik.touched.guests && formik.errors.guests ? <div style={errorStyle}>{formik.errors.guests}</div> : null}
                    <br/>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        {...formik.getFieldProps('occasion')}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='birthday'>Birthday</option>
                        <option value='anniversary'>Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? <div style={errorStyle}>{formik.errors.occasion}</div> : null}
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ReservationPage;