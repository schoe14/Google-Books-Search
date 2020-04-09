import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col, Collapse } from "react-bootstrap";
import API from "../../utils/API";

function SavedBooks({ books, loadBooks }) {
    // const [open, setOpen] = useState(false);
    // const [btnToggle, setBtnToggle] = useState("");

    // function handleBtnClick(event) {
    //     event.preventDefault();

    //     const { id, value } = event.target;
    //     console.log("id: " + id);

    //     deleteBook(id);
    // }

    function deleteBook(id) {
        console.log("id: " + id);

        API.deleteBook(id).
            then(res => {
                console.log(res);
                if (res.status === 200) {
                   loadBooks();
                }
            })
            .catch(err => console.log(err));;
    }

    // function handleToggle(event) {
    //     const {id} = event.target;
    //     console.log(eve)
    //     setOpen(!open)
    // }

    return (

        <Container style={{ marginTop: "30px", minHeight: "100vh" }}>
            {books.map((book, index) => {
                console.log(books)
                console.log(book)

                return (
                    <div key={book._id}>
                        <Row id="title-row" style={{ marginTop: "50px", textAlign: "center" }}>
                            <Col>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Subtitle className="text-muted">by {book.authors.toString()}</Card.Subtitle>
                            </Col>
                        </Row>
                        <Row id="content-row">
                            <Col md={2} style={{ textAlign: "center" }}>
                                <img className="img-fluid rounded mb-3 mb-md-0" src={book.image} alt="" />
                            </Col>
                            <Col md={10} id="content">
                                <p className="detail">{book.description}</p>
                                {/* <Button
                                    onClick={handleToggle}
                                    aria-controls="collapse-text"
                                    aria-expanded={open}
                                    id={book._id}
                                >Click</Button>
                                <Collapse in={open}>
                                    <div id="collapse-text" className={book._id}>
                                        {book.description}
                                    </div>
                                </Collapse> */}
                                <a className="btn btn-primary" href={book.link} target="blank">Link</a>
                                <Button className="btn btn-primary" onClick={() => deleteBook(book._id)}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </div>
                )
            })
            }
        </Container>
    )

}

export default SavedBooks;