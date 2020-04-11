import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Jumbotron } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function SearchResults({ searches }) {

    useEffect(() => {
    }, [])

    function handleBtnClick(event) {
        event.preventDefault();

        const { id, value } = event.target;
        // console.log("id: " + id);
        // console.log("info: " + searches[event.target.id].title);

        saveBook(id);
    }

    function saveBook(id) {
        const bookData = {
            title: searches[id].title,
            authors: searches[id].authors,
            description: searches[id].description,
            image: searches[id].imageLinks ? searches[id].imageLinks.thumbnail : "https://via.placeholder.com/200x250?text=No+Image+Available",
            link: searches[id].infoLink,
        }
        // console.log(bookData);
        API.saveBook(bookData)
            .then(res => {
                // console.log(res);
                if (res.status === 200) {
                    const btnClicked = document.getElementById(id);
                    btnClicked.value = "V";
                    btnClicked.setAttribute("disabled", "disabled")
                }
            })
            .catch(err => console.log(err));;
    }

    return (
        // <Container style={{ minHeight: "50vh" }}>
        searches.length > 0 ? (searches.map((search, index) => {
            // console.log(search)

            return (
                <div className="mt-5" key={`${search.title}-${index}`} id="book-info">
                    <Row id="title-row" style={{ textAlign: "center" }}>
                        <Col md={12} id="title-col" className="p-0">
                            <Card className="p-2">
                                <Card.Title>{search.title}</Card.Title>
                                <Card.Subtitle className="text-muted">{search.authors ? `by ${search.authors.join(", ")}` : "No Author Information Available"}</Card.Subtitle>
                            </Card>
                        </Col>
                    </Row>
                    <Row id="content-row" className="p-4 shadow bg-white rounded" style={{}}>
                        <Col md={3} id="image-col">
                            <Row className="justify-content-center p-2" style={{}}>
                                <img className="img-fluid rounded mb-md-0 w-100" src={search.imageLinks ?
                                    search.imageLinks.thumbnail : "https://via.placeholder.com/200x250?text=No+Image+Available"} alt="" style={{ maxWidth: "200px", height: "250px", borderStyle: "groove" }} />
                            </Row>
                            <Row className="justify-content-center p-2" style={{}}>
                                <a className="btn btn-primary btnGroup" href={search.infoLink} target="blank">Link</a>
                                <input type="button" className="btn btn-primary btnGroup" id={index} onClick={handleBtnClick} value="Save"></input>
                            </Row>
                        </Col>
                        <Col md={9} id="description-col">
                            {search.description ? <div className="detail">{search.description}</div> :
                                <Jumbotron fluid className="mt-5 rounded bg-white" id="no-description">
                                    <Container style={{ textAlign: "center" }}>
                                        <p>No Description Available</p>
                                    </Container>
                                </Jumbotron>
                            }
                        </Col>
                    </Row>
                </div>
            )
        })) : (
                <Jumbotron fluid className="mt-5 shadow bg-white rounded" id="no-content">
                    <Container className="p-0" style={{ textAlign: "center" }}>
                        <p>Start your search.</p>
                    </Container>
                </Jumbotron>
            )
        // </Container>
    )
}

export default SearchResults;