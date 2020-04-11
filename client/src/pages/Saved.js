import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Card } from "react-bootstrap";
import SavedBooks from "../components/SavedBooks";
import "./style.css";

function Saved() {
    const [books, setBooks] = useState([]);
    // Load saved books and store them with setBooks
    useEffect(() => {
        loadBooks();
    }, [])
    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
                // console.log(res);
            })
            .catch(err => console.log(err.response));
    };

    return (
        <Container fluid="md" style={{ marginTop: "30px", marginBottom: "100px", minHeight: "100vh" }}>
            <Container className="p-0">
                <Card className="px-2 py-3 rounded" style={{ textAlign: "center", backgroundColor: "#f4f4f4" }}>
                    <Card.Title className="m-0">Books in the list</Card.Title>
                </Card>
            </Container>
            <Container className={books.length === 0 ? "p-0" : ""} style={{ minHeight: "50vh" }}>
                <SavedBooks books={books} loadBooks={loadBooks} />
            </Container>
        </Container>
    )
}

export default Saved;