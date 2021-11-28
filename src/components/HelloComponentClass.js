import React from "react";

class Hello extends React.Component {
    state = {
        name: "Hamza"
    }

    setName = () => {
        this.setState({
            name: "Shili"
        })
    }

    render() {
        return <div>
            <h1>Hello {this.state.name}!</h1>
            <button onClick={this.setName}>setName</button>
        </div>;
    }
}

export default Hello;