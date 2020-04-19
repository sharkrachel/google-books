import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container"

class Saved extends Component {
    state = {
       bookResults: [],
       search: ""
    };

    render() {
        return (
            <Container>
            Does saved work?
            </Container>
        )
    }

}

export default Saved;