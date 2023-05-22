import { render, fireEvent, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe('Reservation Form', () => {
    test('The user cannot submit the form when the reservation time is empty', () => {
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit}/>);
        
        //input variables
        const date = "2023-05-24";
        const guests = 7;
        const occasion = "anniversary";

        //execution
        const inputDate = screen.getByLabelText(/Date/);
        fireEvent.change(inputDate, { target: { value: date } });

        const inputGuests = screen.getByLabelText(/Time/);
        fireEvent.change(inputGuests, { target: { value: guests } });

        const inputOccasion = screen.getByLabelText(/Occasion/);
        fireEvent.change(inputOccasion, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        //expect
        expect(handleSubmit).not.toBeCalled();
    });
});