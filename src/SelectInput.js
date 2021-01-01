import React from "react";
import { PropTypes } from "prop-types";

class SelectInput extends React.Component {
  state = {
    value: "",
  };

  handleSelectInputChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      this.props.handleSelectInputChange(this.props.book, this.state.value);
    });
  };

  render() {
    const { options, selectedOption } = this.props;
    return (
      <select value={selectedOption} onChange={this.handleSelectInputChange}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
  }
}

SelectInput.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  handleSelectInputChange: PropTypes.func,
};

export default SelectInput;
