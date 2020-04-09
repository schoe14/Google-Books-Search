import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
import fake from "../utils/fakeAPI"
import "./style.css";

function Search() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({});
    const [searches, setSearches] = useState([]);

    // // Load all books and store them with setBooks
    // useEffect(() => {
    // }, [])

    // // Loads all books and sets them to books
    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(name + " and " + value);
        setFormObject({ ...formObject, [name]: value });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {

            // console.log(formObject);

            // API.searchBook(formObject.title)
            //     .then(res => {
            //         res.data.items.map(item => {
            //             console.log(item.volumeInfo)
            //             console.log(searches)
            //             setSearches(searches => searches.concat(item.volumeInfo));
            //         })
            //         // setSearches(res.data.items[0].volumeInfo);
            //     })
            //     .catch(err => console.log(err));

            fake.getFakeBooks
                .then(res => {
                    res.items.map(item => {
                        console.log(item.volumeInfo);
                        setSearches(searches => searches.concat(item.volumeInfo));
                        // setSearches(searches => searches.concat({
                        //     title: item.volumeInfo.title, authors: item.volumeInfo.authors, thumbnail: item.volumeInfo.imageLinks.thumbnail, description: item.searchInfo.description,
                        //     infoLink: item.volumeInfo.infoLink
                        // }))
                        localStorage.setItem("searches", JSON.stringify(searches));

                    })
                })

        }
    };

    return (
        <Container fluid="md" style={{ marginTop: "30px", marginBottom: "100px", minHeight: "100vh" }}>
            <Form style={{ textAlign: "center" }}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Search Books!</Form.Label>
                    <Row className="justify-content-center">
                        <Col md="auto" sm="auto" xs="auto" className="inputCol" style={{ paddingRight: "0" }}>
                            <Form.Control onChange={handleInputChange} name="title" type="text" placeholder="Enter title" />
                        </Col>
                        <Col md="auto" sm="auto" xs="auto" className="btnCol" style={{}}>
                            <Button onClick={handleFormSubmit} disabled={!(formObject.title)} variant="primary" type="submit" className="searchBtn" style={{}}>Search</Button>
                        </Col>
                    </Row>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
            <SearchResults searches={searches} />
        </Container>
    );
}

export default Search;
