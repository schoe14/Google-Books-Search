import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import API from "../../utils/API";

function SearchResults(props) {

    function handleBtnSubmit(event) {
        event.preventDefault();

        const { id, value } = event.target;
        console.log("id: " + id);
        console.log("info: " + props.searches[event.target.id].title);

        const bookData = {
            title: props.searches[id].title,
            authors: props.searches[id].authors,
            description: props.searches[id].description,
            image: props.searches[id].imageLinks.thumbnail,
            link: props.searches[id].infoLink,
        }

        API.saveBook(bookData).
            then(res => {
                console.log(res);
                if (res.status === 200) {
                    const btnClicked = document.getElementById(id);
                    btnClicked.value = "V";

                }
            })
            .catch(err => console.log(err));;
        console.log(bookData);

    }

    return (

        <Container style={{ marginTop: "30px", minHeight: "100vh" }}>
            {props.searches.map((search, index) => {
                console.log(props.searches)

                console.log(search)

                return (
                    <div>
                        <Row id="book-row" style={{ marginTop: "50px", textAlign: "center" }}>
                            <Col>
                                <Card.Title>{search.title}</Card.Title>
                                <Card.Subtitle className="text-muted">by {search.authors.toString()}</Card.Subtitle>
                            </Col>
                        </Row>
                        <Row id="content-row">
                            <Col md={2} style={{ textAlign: "center" }}>
                                <img className="img-fluid rounded mb-3 mb-md-0" src={search.imageLinks.thumbnail} alt="" />
                            </Col>
                            <Col md={10} id="content">
                                {/* <h5>{search.title}</h5> */}
                                {/* <Card.Subtitle className="mb-2 text-muted">by {search.authors.toString()}</Card.Subtitle> */}
                                <p className="detail">{search.description}</p>
                                <a className="btn btn-primary" href={search.infoLink} target="blank">Link</a>
                                <input type="button" className="btn btn-primary" id={index} onClick={handleBtnSubmit} value="Save"></input>
                            </Col>
                        </Row>
                    </div>
                )
            })
            }
        </Container>
    )


    // return (
    //     <Card className="bg-dark text-white">
    //         <Card.Img src={props.searches.imageLinks.thumbnail} alt="Card image" />
    //         <Card.ImgOverlay>
    //             <Card.Title>{props.searches.title}</Card.Title>
    //             <Card.Text>by {props.searches.authors.toString()}</Card.Text>
    //             <Card.Text>Synopsis: {props.searches.description}</Card.Text>
    //             <Card.Body>
    //                 <Card.Link href={props.searches.infoLink}>Link</Card.Link>
    //             </Card.Body>
    //         </Card.ImgOverlay>
    //     </Card>
    // )
}

export default SearchResults;