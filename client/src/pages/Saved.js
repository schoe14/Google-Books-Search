import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Saved() {
    const [books, setBooks] = useState([]);
    // // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])
    // // Loads all books and sets them to books
    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };
     // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }
    // return (

    // )
}

export default Saved;