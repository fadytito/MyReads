import React from "react";

class TextInput extends React.Component {
  state = {
    value: "",
  };

  handleTextInputChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      this.props.handleTextInputChange(this.state.value);
    });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={this.handleTextInputChange}
      />
    );
  }
}

export default TextInput;
