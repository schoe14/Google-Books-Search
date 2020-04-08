import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Form, Button, Card } from "react-bootstrap";
import SavedBooks from "../components/SavedBooks";
import { Link } from "react-router-dom";

function Saved() {
    const [books, setBooks] = useState([]);
    // Load saved books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])
    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    };
    // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }
    return (
        <Container fluid>
            <SavedBooks books={books} />
        </Container>
    )
}

export default Saved;