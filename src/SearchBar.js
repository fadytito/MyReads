import React from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import { PropTypes } from "prop-types";

class SearchBar extends React.Component {
  handleTextInputChange = (query) => {
    this.props.handleTextInputChange(query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <TextInput
            placeholder={"Search by title or author"}
            handleTextInputChange={this.handleTextInputChange}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleTextInputChange: PropTypes.func,
};

export default SearchBar;
