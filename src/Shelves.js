import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { PropTypes } from "prop-types";

const shelves = [
  { name: "Currently Reading" },
  { name: "Want to Read" },
  { name: "read" },
];

class Shelves extends React.Component {
  filterBooksBy = (filter) => {
    return this.props.books.filter((book) => book.shelf === filter);
  };
  handleSelectInputChange = (book, shelf) => {
    this.props.handleSelectInputChange(book, shelf);
  };

  render() {
    const wantToReadBooks = this.filterBooksBy("wantToRead");
    const currentlyReadingBooks = this.filterBooksBy("currentlyReading");
    const readBooks = this.filterBooksBy("read");
    shelves[0].books = currentlyReadingBooks;
    shelves[1].books = wantToReadBooks;
    shelves[2].books = readBooks;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Shelf
                key={shelf.name}
                name={shelf.name}
                books={shelf.books}
                handleSelectInputChange={this.handleSelectInputChange}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

Shelves.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleSelectInputChange: PropTypes.func,
};

export default Shelves;
