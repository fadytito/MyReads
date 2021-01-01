import React from "react";
import SelectInput from "./SelectInput";
import { PropTypes } from "prop-types";

const selectOptions = [
  { name: "Move To", value: "move", disabled: true },
  { name: "Currently Reading", value: "currentlyReading" },
  { name: "Want to Read", value: "wantToRead" },
  { name: "Read", value: "read" },
  { name: "None", value: "none" },
];

class Book extends React.Component {
  handleSelectInputChange = (book, shelf) => {
    this.props.handleSelectInputChange(book, shelf);
  };
  render() {
    const { book } = this.props;
    const { imageLinks, title, authors, shelf } = this.props.book;
    let bookStyle = {
      width: 128,
      height: 193,
    };
    if (imageLinks) {
      bookStyle.backgroundImage = `url(${imageLinks.thumbnail})`;
    }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={bookStyle} />
            <div className="book-shelf-changer">
              <SelectInput
                book={book}
                options={selectOptions}
                selectedOption={shelf}
                handleSelectInputChange={this.handleSelectInputChange}
              />
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  handleSelectInputChange: PropTypes.func,
};

export default Book;
