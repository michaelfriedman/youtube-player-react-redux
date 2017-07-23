import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }
  // onInputChange({ target }) {
  //   console.log(target.value);
  // }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="input-group" style={{ marginTop: "2%", marginBottom: "2%" }}>
        <span className="input-group-addon" id="basic-addon1">🔎</span>
        <input
          onChange={({ target }) => this.onInputChange(target.value)}
          value={this.state.term}
          placeholder="Search YouTube Videos 🎥"
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
        />
      </div>
    );
  }
}

export default SearchBar;
