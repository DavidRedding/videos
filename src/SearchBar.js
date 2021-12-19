import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // a function passed in as a prop by App
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search </label>
            <input
              type="text"
              placeholder='Try "charlie bit my finger"'
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
