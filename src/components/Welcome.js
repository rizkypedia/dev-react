import React from "react";
import { ReactDOM } from "react";

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default  Welcome