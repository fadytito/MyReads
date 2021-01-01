import React from "react";
import * as BooksAPI from "./BooksAPI";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { debounce } from "lodash";
import { PropTypes } from "prop-types";

class Search extends React.Component {
  state = {
    booksResluts: [],
  };

  updateResultsWithShelves = (results) => {
    const updatedResults = results.map((result) => {
      let updatedBook = { ...result, shelf: "none" };
      this.props.savedBooks.forEach((savedBook) => {
        if (savedBook.id === result.id) {
          updatedBook = { ...result, shelf: savedBook.shelf };
        }
      });
      return updatedBook;
    });
    return updatedResults;
  };

  getSearchResults = (query) => {
    BooksAPI.search(query).then((results) => {
      if (Array.isArray(results) && results.length) {
        const updatedResults = this.updateResultsWithShelves(results);
        this.setState({
          booksResluts: updatedResults,
        });
      } else {
        this.setState({
          booksResluts: [],
        });
      }
    });
  };

  handleTextInputChange = debounce((query) => {
    this.getSearchResults(query);
  }, 1000);

  updateResultBookInfo = (book, shelf) => {
    this.setState((prevState) => {
      const adjustedBooks = prevState.booksResluts.map((adjustedBook) => {
        if (adjustedBook.id === book.id) {
          return { ...adjustedBook, shelf };
        }
        return adjustedBook;
      });
      return {
        booksResluts: [...adjustedBooks],
      };
    });
  };

  handleSelectInputChange = (book, shelf) => {
    this.updateResultBookInfo(book, shelf);
    this.props.updateSavedBookInfo(book, shelf);
  };

  render() {
    const { booksResluts } = this.state;
    return (
      <div className="search-books">
        <SearchBar handleTextInputChange={this.handleTextInputChange} />
        <SearchResults
          books={booksResluts}
          handleSelectInputChange={this.handleSelectInputChange}
        />
      </div>
    );
  }
}

Search.propTypes = {
  savedBooks: PropTypes.arrayOf(PropTypes.object),
  updateSavedBookInfo: PropTypes.func,
};

export default Search;
