import { useFormik } from "formik";
import './ReservationForm.css';

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
    } else if (values.guests > 10){
        errors.guests = 'Max 10 guests';
    };

    if(!values.occasion){
        errors.occasion = 'Required';
    };

    return errors;
};

const errorStyle = {
    color: 'red',
    fontWeight: '600',
    fontSize: '37px',
};

const ReservationForm = () => {
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
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    {...formik.getFieldProps('date')}
                />
                <br/>
                <label htmlFor="time">Time</label>
                <input 
                    type="time" 
                    id="time" 
                    {...formik.getFieldProps('time')}
                />
                <br/>
                <label htmlFor="guests">Number of Guests</label>
                <input 
                    type="number" 
                    min={1}
                    max={10}
                    id="guests" 
                    {...formik.getFieldProps('guests')}
                />
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
                <br/>
                <button type="submit">Send</button>
            </form>
            <div className="Errors Box-1">
                {formik.touched.date && formik.errors.date ? <div style={errorStyle}>{formik.errors.date}</div> : null}
            </div>        
            <div className="Errors Box-2">
                {formik.touched.time && formik.errors.time ? <div style={errorStyle}>{formik.errors.time}</div> : null}
            </div>
            <div className="Errors Box-3">
                {formik.touched.guests && formik.errors.guests ? <div style={errorStyle}>{formik.errors.guests}</div> : null}
            </div>
            <div className="Errors Box-4">
                {formik.touched.occasion && formik.errors.occasion ? <div style={errorStyle}>{formik.errors.occasion}</div> : null}
            </div>
        </>

    );
};

export default ReservationForm;