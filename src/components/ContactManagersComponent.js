import React, { useState } from "react";
import AddPerson from "./AddPersonComponent";
import PeopleList from "./PeopleListComponent";

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
    function addPerson(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div>
            <AddPerson handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );

}

export default ContactManager;