import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAPWmE0ROFRshAhGLt8Vv46ubxrWaeCqjI";

//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAPWmE0ROFRshAhGLt8Vv46ubxrWaeCqjI

//https://www.googleapis.com/books/v1/volumes?q=+inauthor:Rowling&key=AIzaSyAPWmE0ROFRshAhGLt8Vv46ubxrWaeCqjI
//https://www.googleapis.com/books/v1/volumes?q=intitle:flowers+inauthor:&key=AIzaSyAPWmE0ROFRshAhGLt8Vv46ubxrWaeCqjI

export default {
    searchBook: function (titleQuery, authorQuery) {
        if (titleQuery) titleQuery = "intitle:" + titleQuery;
        if (authorQuery) authorQuery = "+inauthor:" + authorQuery;
        console.log(BASEURL + titleQuery + authorQuery + "&maxResults=20" + APIKEY);
        // return axios.get(BASEURL + titleQuery + authorQuery + APIKEY);
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
