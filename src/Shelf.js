import React from "react";
import Book from "./Book";
import { PropTypes } from "prop-types";

class Shelf extends React.Component {
  handleSelectInputChange = (book, shelf) => {
    this.props.handleSelectInputChange(book, shelf);
  };
  render() {
    const { name, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleSelectInputChange={this.handleSelectInputChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object),
  handleSelectInputChange: PropTypes.func,
};

export default Shelf;
