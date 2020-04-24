import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container"
import TextBox from "../components/TextBox"
import ListItem from "../components/ListItem"

class Books extends Component {
    state = {
       bookResults: [],
       search: "",
       title: "", 
       author: "",
       plot: "",
       image: "", 
       link: ""      
       
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value// search:"phil"
        });
        console.log("imput change works", value)
    };
    
   handleSubmit = event => {
       event.preventDefault();
       API.search(this.state.search)
       .then(response => {
           this.setState({ books: response.data, title: "", author: "", plot: "", image: "", link: ""})

        console.log("results: ", this.state.books);
           
       }).catch (err => console.log(err));
   }

   saveBook = id => {
       API.saveBook(id)
       .then(res => this.loadBooks())
   }
    componentDidMount() {
        
    }
    render() {
        return (
            <Container>
                <TextBox search={this.state.search}  handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}  />
                <ListItem books={this.state.books}/>
            </Container>
        )
    }

}


export default Books;