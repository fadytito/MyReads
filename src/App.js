import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shelves from "./Shelves";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    savedBooks: [],
  };

  getSavedBooks = () => {
    BooksAPI.getAll().then((savedBooks) => {
      this.setState({
        savedBooks: [...savedBooks],
      });
    });
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  updateSavedBookInfo = (book, shelf) => {
    BooksAPI.get(book.id).then((book) => {
      this.setState(
        (prevState) => {
          const adjustedBooks = prevState.savedBooks.map((adjustedBook) => {
            if (adjustedBook.id === book.id) {
              return { ...adjustedBook, shelf };
            }
            return adjustedBook;
          });
          return {
            savedBooks: [...adjustedBooks],
          };
        },
        () => {
          BooksAPI.update(book, shelf).then(() => {
            this.getSavedBooks();
          });
        }
      );
    });
  };

  handleSelectInputChange = (book, shelf) => {
    this.updateSavedBookInfo(book, shelf);
  };

  render() {
    const { savedBooks } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Shelves
                books={savedBooks}
                handleSelectInputChange={this.handleSelectInputChange}
              />
            </Route>
            <Route path="/search">
              <Search
                savedBooks={savedBooks}
                updateSavedBookInfo={this.updateSavedBookInfo}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
