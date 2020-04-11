import React, { useState, useEffect } from "react";
import { Container, Button, Card, Row, Col, Jumbotron, Accordion } from "react-bootstrap";
import API from "../../utils/API";

function SavedBooks({ books, loadBooks }) {

    function deleteBook(id) {
        // console.log("id: " + id);
        const btnClicked = document.getElementById(id);
        btnClicked.value = "...";
        API.deleteBook(id)
            .then(res => {
                // console.log(res);
                if (res.status === 200) {
                    loadBooks();
                }
            })
            .catch(err => console.log(err));;
    }

    return (
        // <Container style={{ minHeight: "50vh" }}>
        books.length > 0 ? (books.map((book, index) => {
            // console.log(books)
            // console.log(book)
            return (
                <div className="mt-5" key={`${book.title}-${book._id}`} id="book-info">
                    <Row id="content-row" className="p-4 shadow bg-white rounded" style={{}}>
                        <Col md={3} id="image-col">
                            <Row className="justify-content-center p-2" style={{}}>
                                <img className="img-fluid rounded mb-md-0 w-100" src={book.image ? book.image : "https://via.placeholder.com/200x250?text=No+Image+Available"} alt="" style={{ maxWidth: "200px", height: "250px", borderStyle: "groove" }} />
                            </Row>
                        </Col>
                        <Col md={9} className="p-2" id="description-col" style={{ textAlign: "center" }}>
                            <Card border="light" style={{ minHeight: "250px" }}>
                                <Card.Header>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{book.authors.length > 0 ? `by ${book.authors.join(", ")}` : "No Author Information Available"}</Card.Subtitle>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "#4095c6" }}>
                                            Click for details!
                                         </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Text className="detail">
                                                {book.description ? book.description :
                                                    "No Description Available"
                                                }
                                            </Card.Text>
                                        </Accordion.Collapse>
                                    </Accordion>
                                </Card.Body>
                                <Card.Footer>
                                    <a className="btn btn-primary btnGroup" href={book.link} target="blank">Link</a>
                                    <input type="button" className="btn btn-primary btnGroup" id={book._id} onClick={() => deleteBook(book._id)} value="Delete"></input>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        })) : (
                <Jumbotron fluid className="mt-5 shadow bg-white rounded" id="no-content">
                    <Container style={{ textAlign: "center" }}>
                        <p>
                            Oops! There are no books saved.
                        </p>
                    </Container>
                </Jumbotron>
            )

        // </Container>
    )

}

export default SavedBooks;