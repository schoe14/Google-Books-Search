import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Jumbotron } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function SearchResults({ searches }) {

    useEffect(() => {
    }, [])

    function handleBtnClick(event) {
        event.preventDefault();

        const { id, value } = event.target;
        console.log("id: " + id);
        console.log("info: " + searches[event.target.id].title);

        saveBook(id);

        // const bookData = {
        //     title: props.searches[id].title,
        //     authors: props.searches[id].authors,
        //     description: props.searches[id].description,
        //     image: props.searches[id].imageLinks.thumbnail,
        //     link: props.searches[id].infoLink,
        // }

        // API.saveBook(bookData).
        //     then(res => {
        //         console.log(res);
        //         if (res.status === 200) {
        //             const btnClicked = document.getElementById(id);
        //             btnClicked.value = "V";

        //         }
        //     })
        //     .catch(err => console.log(err));;
        // console.log(bookData);
    }

    function saveBook(id) {
        const bookData = {
            title: searches[id].title,
            authors: searches[id].authors,
            description: searches[id].description,
            image: searches[id].imageLinks.thumbnail,
            link: searches[id].infoLink,
        }
        console.log(bookData);
        API.saveBook(bookData).
            then(res => {
                console.log(res);
                if (res.status === 200) {
                    const btnClicked = document.getElementById(id);
                    btnClicked.value = "V";
                    btnClicked.setAttribute("disabled", "disabled")
                }
            })
            .catch(err => console.log(err));;
    }

    return (

        <Container style={{ minHeight: "50vh" }}>
            {searches.length > 0 ? (searches.map((search, index) => {
                console.log(search)

                return (
                    <div className="mt-5" key={`${search.title}-${index}`} id="book-info">
                        <Row id="title-row" style={{ textAlign: "center" }}>
                            <Col id="title-col" className="p-0">
                                <Card className="p-2">
                                    <Card.Title>{search.title}</Card.Title>
                                    <Card.Subtitle className="text-muted">by {search.authors.toString()}</Card.Subtitle>
                                </Card>
                            </Col>
                        </Row>
                        <Row id="content-row" className="p-4 shadow bg-white rounded" style={{}}>
                            <Col md={3} id="image-col">
                                <Row className="justify-content-center p-2" style={{}}>
                                    <img className="img-fluid rounded mb-md-0 w-100" src={search.imageLinks.thumbnail ?
                                        search.imageLinks.thumbnail : "https://placehold.it/200x200"} alt="" style={{ maxWidth: "200px" }} />
                                </Row>
                                <Row className="justify-content-center p-2" style={{}}>
                                    <a className="btn btn-primary" href={search.infoLink} target="blank">Link</a>
                                    <input type="button" className="btn btn-primary" id={index} onClick={handleBtnClick} value="Save"></input>
                                </Row>
                            </Col>
                            <Col md={9} id="description-col">
                                {search.description ? <div className="detail">{search.description}</div> :
                                    <div style={{ textAlign: "center" }}>No Description Available</div>}
                            </Col>
                        </Row>
                    </div>
                )
            })) : (
                    <Jumbotron fluid className="mt-5 shadow bg-white rounded" id="no-content">
                        <Container style={{ textAlign: "center" }}>
                            <p>
                                No search result
                            </p>
                        </Container>
                    </Jumbotron>
                )
            }
        </Container>
    )
}

export default SearchResults;