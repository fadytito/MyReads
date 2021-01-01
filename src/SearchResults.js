import React from "react";
import Book from "./Book";
import { PropTypes } from "prop-types";

class SearchResults extends React.Component {
  handleSelectInputChange = (book, shelf) => {
    this.props.handleSelectInputChange(book, shelf);
  };

  render() {
    const { books } = this.props;
    return (
      <div className="search-books-results">
        {books.length ? (
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleSelectInputChange={this.handleSelectInputChange}
              />
            ))}
          </ol>
        ) : null}
      </div>
    );
  }
}

SearchResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleSelectInputChange: PropTypes.func,
};

export default SearchResults;
