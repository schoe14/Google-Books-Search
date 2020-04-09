import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import API from "../../utils/API";

function SearchResults({ searches }) {
    // useEffect(() => {
    // }, [])

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
                }
            })
            .catch(err => console.log(err));;
    }

    return (

        <Container style={{ minHeight: "50vh" }}>
            {searches ? (searches.map((search, index) => {
                console.log(searches)
                console.log(search)

                return (
                    <div key={`${search.title}-${index}`}>
                        <Row id="title-row" style={{ marginTop: "50px", textAlign: "center" }}>
                            <Col>
                                <Card.Title>{search.title}</Card.Title>
                                <Card.Subtitle className="text-muted">by {search.authors.toString()}</Card.Subtitle>
                            </Col>
                        </Row>
                        <Row id="content-row" style={{}}>
                            <Col md={3}>
                                <Row className="justify-content-center p-2" style={{}}>
                                    <img className="img-fluid rounded mb-md-0" src={search.imageLinks.thumbnail} alt="" />
                                </Row>
                                <Row className="justify-content-center p-2" style={{}}>
                                    <a className="btn btn-primary" href={search.infoLink} target="blank">Link</a>
                                    <input type="button" className="btn btn-primary" id={index} onClick={handleBtnClick} value="Save"></input>
                                </Row>
                            </Col>
                            <Col md={9} id="description">
                                {/* <h5>{search.title}</h5> */}
                                {/* <Card.Subtitle className="mb-2 text-muted">by {search.authors.toString()}</Card.Subtitle> */}
                                <p className="detail">{search.description}</p>

                            </Col>
                        </Row>
                    </div>
                )
            })) : (<Row>Nothing to display</Row>)
            }
        </Container>
    )
}

export default SearchResults;