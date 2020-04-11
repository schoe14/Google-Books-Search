import React from "react";
import "./style.css"

function Book({ book }) {
    return (
        <div className="wrapper">
            <div className="book">
                <div className="inner-book">
                    <div className="img" style={{ paddingTop: "calc(1.07 * 100%)" }}>
                        <img src={book} />
                    </div>
                    <div className="page"></div>
                    <div className="page page-2"></div>
                    <div className="page page-3"></div>
                    <div className="page page-4"></div>
                    <div className="page page-5"></div>
                    <div className="img final-page">
                        <img src={book} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;