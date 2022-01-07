import React, { useState, useEffect } from "react";
import useVideos from "./hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos(`charlie bit my finger`);

  // Was inside of 'onTermSubmit', will deal with later
  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
