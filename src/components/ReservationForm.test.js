import { render, fireEvent, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe('Reservation Form', () => {
    test('The user cannot submit the form when the reservation date input is empty', () => {
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit}/>);
        
        //input variables
        const time = "21:00";
        const guests = 5;
        const occasion = "anniversary";

        //execution
        const inputTime = screen.getByLabelText(/Time/);
        fireEvent.change(inputTime, { target: { value: time } });

        const inputGuests = screen.getByLabelText(/Number of Guests/);
        fireEvent.change(inputGuests, { target: { value: guests } });

        const inputOccasion = screen.getByLabelText(/Occasion/);
        fireEvent.change(inputOccasion, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        //expect
        expect(handleSubmit).not.toBeCalled();
    });
    test('The user cannot submit the form when the reservation time input is empty', () => {
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit}/>);
        
        //input variables
        const date = "2023-05-24";
        const guests = 7;
        const occasion = "anniversary";

        //execution
        const inputDate = screen.getByLabelText(/Date/);
        fireEvent.change(inputDate, { target: { value: date } });

        const inputGuests = screen.getByLabelText(/Number of Guests/);
        fireEvent.change(inputGuests, { target: { value: guests } });

        const inputOccasion = screen.getByLabelText(/Occasion/);
        fireEvent.change(inputOccasion, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        //expect
        expect(handleSubmit).not.toBeCalled();
    });
    test('The user cannot submit the form when the reservation guests input is empty', () => {
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit}/>);
        
        //input variables
        const date = "2023-05-24";
        const time = "19:00";
        const occasion = "birthday";

        //execution
        const inputDate = screen.getByLabelText(/Date/);
        fireEvent.change(inputDate, { target: { value: date } });

        const inputTime = screen.getByLabelText(/Time/);
        fireEvent.change(inputTime, { target: { value: time } });

        const inputOccasion = screen.getByLabelText(/Occasion/);
        fireEvent.change(inputOccasion, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        //expect
        expect(handleSubmit).not.toBeCalled();
    });
    test('The user cannot submit the form when the reservation occupation input is empty', () => {
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit}/>);
        
        //input variables
        const date = "2023-05-24";
        const time = "22:00"
        const guests = 7;

        //execution
        const inputDate = screen.getByLabelText(/Date/);
        fireEvent.change(inputDate, { target: { value: date } });

        const inputTime = screen.getByLabelText(/Time/);
        fireEvent.change(inputTime, { target: { value: time } });

        const inputGuests = screen.getByLabelText(/Number of Guests/);
        fireEvent.change(inputGuests, { target: { value: guests } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        //expect
        expect(handleSubmit).not.toBeCalled();
    });
});