import React from "react";
import youtube from "./apis/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
    console.log(this.state.videos[0].snippet.title);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <h1>I have {this.state.videos.length} many videos</h1>
      </div>
    );
  }
}
export default App;
