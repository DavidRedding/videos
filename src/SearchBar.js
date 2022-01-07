import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
};

class SearchBar extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    // test to see if 'props' was neccesary
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search </label>
            <input
              type="text"
              placeholder={`"charlie bit my finger"`}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
            <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
