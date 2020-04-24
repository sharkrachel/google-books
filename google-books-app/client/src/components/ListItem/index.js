import React from "react"

export default function ListItem(props) {
    return (
        <div className="list-group mt-5">
            {props.books != undefined ? props.books.map(book => {
                return (
                    <a href={book.volumeInfo.previewLink} className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={book.volumeInfo.imageLinks.thumbnail} />
                            </div>
                            <div className="col-sm-9 text-left">
                                <div className="d-flex w-100 justify-content-between">
                                    <h4 className="mb-1">{book.volumeInfo.title}</h4>
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{book.volumeInfo.authors}</h5>
                                </div>
                                <p className="mb-1">{book.volumeInfo.description}</p>
                                <button className="btn btn-dark">Save</button>
                            </div>
                        </div>
                    </a>
                )

            }
            )
                : ""
            }


        </div>
    )
}