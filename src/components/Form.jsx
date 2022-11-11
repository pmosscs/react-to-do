import React, { useState } from "react";

function Form({addTask}) {
    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Add</button>
        </form>
    )
}

export default Form;