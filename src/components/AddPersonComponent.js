import React, { useState } from "react";
function AddPerson(props) {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={person} onChange={handleChange} placeholder="Add a new person" />
        <button type="submit">Add</button>
    </form>

}

export default AddPerson;