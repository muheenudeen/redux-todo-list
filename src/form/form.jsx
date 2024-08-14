import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from "./formSlice"


/**
 * A form component that allows the user to input a string and submit it
 * to the Redux store.
 * 
 * @returns {JSX.Element} The form component.
 */
function Form() {
    const [name, setName] = useState(""); // The name value in the form
    const dispatch = useDispatch(); // The function to dispatch an action to the Redux store

    /**
     * Handles the form submission.
     * Dispatches the "submit" action with the name value as the payload.
     */
    const handleSubmit = () => {
        dispatch(submit({ name }));
    };

    return (
        <>
            <input 
                type="text" 
                value={name}
                placeholder="enter data"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleSubmit}>submit</button>
        </>
    );
}


export default Form