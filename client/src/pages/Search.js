import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
import fake from "../utils/fakeAPI"
import "./style.css";

function Search() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({
        title: "",
        author: ""
    });
    const [searches, setSearches] = useState([]);

    // // Load all books and store them with setBooks
    useEffect(() => {
    }, [])

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title || formObject.author) {
            // console.log(formObject);

            API.searchBook(formObject.title, formObject.author)
                .then(res => {
                    setSearches([]);
                    res.data.items.map(item => {
                        // console.log(item.volumeInfo)
                        setSearches(searches => searches.concat(item.volumeInfo));
                    })
                })
                .then(() => {
                    setFormObject({ title: "", author: "" });
                })
                .catch(err => console.log(err));

            // fake.getFakeBooks
            //     .then(res => {
            //         setSearches([]);
            //         res.items.map(item => {
            //             console.log(item.volumeInfo);
            //             setSearches(searches => searches.concat(item.volumeInfo));
            //             // setSearches(searches => searches.concat({
            //             //     title: item.volumeInfo.title, authors: item.volumeInfo.authors, thumbnail: item.volumeInfo.imageLinks.thumbnail, description: item.searchInfo.description,
            //             //     infoLink: item.volumeInfo.infoLink
            //             // }))
            //         })
            //     })
            //     .then(() => {
            //         setFormObject({ title: "", author: "" });
            //     })

        }
    };

    return (
        <Container fluid="md" style={{ marginTop: "30px", marginBottom: "100px", minHeight: "100vh" }}>
            <Container className="p-0">
                <Form style={{ textAlign: "center" }}>
                    <Form.Group className="px-2 py-3 rounded" controlId="formBasicText">
                        <Form.Label>Search Books!</Form.Label>
                        <Row className="justify-content-center">
                            <Col md="auto" sm={12} xs={12} className="inputCol" style={{}}>
                                <Form.Control value={formObject.title} onChange={handleInputChange} name="title" type="text" placeholder="Enter title" />
                            </Col>
                            <Col md="auto" sm={12} xs={12} className="inputCol" style={{}}>
                                <Form.Control value={formObject.author} onChange={handleInputChange} name="author" type="text" placeholder="Enter author" />
                            </Col>
                            <Col md="auto" sm={12} xs={12} className="btnCol" style={{}}>
                                <Button onClick={handleFormSubmit} disabled={!(formObject.title) && !(formObject.author)} variant="primary" type="submit" className="searchBtn" style={{}}>Search</Button>
                            </Col>
                        </Row>
                        <Form.Text className="text-muted pt-2">
                            Search books by title or author or both!
                    </Form.Text>
                    </Form.Group>
                </Form>
            </Container>
            <Container className={searches.length === 0 ? "p-0" : ""} style={{ minHeight: "50vh" }}>
                <SearchResults searches={searches} />
            </Container>
        </Container >
    );
}

export default Search;
