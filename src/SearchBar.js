import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label></label>
          <input type="text" placeholder='Try "charlie bit me"'></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
