import React from "react";

export default function SavedBooks(props) {
    return (
        <div className="list-group mt-5">
            {this.state.savedBooks.map(book => {
                return (
                    <a href={book.link} className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={book.image} />
                            </div>
                            <div className="col-sm-9 text-left">
                                <div className="d-flex w-100 justify-content-between">
                                    <h4 className="mb-1">{book.title}</h4>
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{book.author}</h5>
                                </div>
                                <p className="mb-1">{book.plot}</p>
                                <button className="btn btn-dark">Save</button>
                            </div>
                        </div>
                    </a>
                )

            })}


        </div>
    )
}