import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  return (
    <div
      // MUST BE => ()
      onClick={() => props.onVideoSelect(props.video)}
      className="video-item item "
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content ">
        <h4 className="header">{props.video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
