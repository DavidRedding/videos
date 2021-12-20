import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item">
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h4 class="header">{props.video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
