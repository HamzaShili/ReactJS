import React, { useState } from "react";

function Hello(props) {
    const [name, setName] = useState("Hamza");
    function updateName() {
        setName("Shili");
    }
    return <div><h1>Hello, {name}!</h1>
        <button onClick={updateName}>setName</button>
    </div>;
}

export default Hello;