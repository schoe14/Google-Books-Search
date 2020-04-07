import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
import fake from "../utils/fakeAPI"
function Search() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({});
    const [searches, setSearches] = useState([]);

    // // Load all books and store them with setBooks
    // useEffect(() => {
    //     setSearches("");
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
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        // if (formObject.title) {


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
                    console.log(item.volumeInfo)
                    console.log(searches)
                    setSearches(searches => searches.concat(item.volumeInfo))
                    // setSearches(searches => searches.concat({
                    //     title: item.volumeInfo.title, authors: item.volumeInfo.authors, thumbnail: item.volumeInfo.imageLinks.thumbnail, description: item.searchInfo.textSnippet,
                    //     infoLink: item.volumeInfo.infoLink
                    // }))

                })
            })
        // }
    };

    return (
        <Container fluid>
            <Form>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Search Books!</Form.Label>
                    <Form.Control onChange={handleInputChange} name="title" type="text" placeholder="Enter title" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleFormSubmit} variant="primary" type="submit">
                    Submit
                 </Button>
            </Form>
            {/* {searches.description} */}
            {searches ? (<SearchResults searches={searches} />) : ("")}
            {/* {searches ?
                (searches.map(search => {
                    console.log(search)
                    return (
                        <Card className="bg-dark text-white">
                            <Card.Img src={search.imageLinks.thumbnail} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{search.title}</Card.Title>
                                <Card.Text>by {search.authors.toString()}</Card.Text>
                                <Card.Text>Synopsis: {search.description}</Card.Text>
                                <Card.Body>
                                    <Card.Link href={search.infoLink}>Link</Card.Link>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    )
                })) : ""
            } */}
            {/* <Card className="bg-dark text-white">
                <Card.Img src={searches.imageLinks.thumbnail} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{searches.title}</Card.Title>
                    <Card.Text>by {searches.authors.toString()}</Card.Text>
                    <Card.Text>Synopsis: {searches.description}</Card.Text>
                    <Card.Body>
                        <Card.Link href={searches.infoLink}>Link</Card.Link>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card> */}
        </Container>
    );
}


export default Search;
