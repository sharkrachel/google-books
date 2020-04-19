import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container"

class Books extends Component {
    state = {
       bookResults: [],
       search: ""
    };

    componentDidMount() {
        API.search("Moby Dick")
        .then(response => {
            console.log(response.data);
        })
    }
    render() {
        return (
            <Container>
            does it work?
            </Container>
        )
    }

}

export default Books;