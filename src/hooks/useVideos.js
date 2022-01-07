import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube";

/*
If you give me a default search term, 
I will return a list of videos & a way to search for videos(via function/method)
*/

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => onTermSubmit(`Charlie bit my finger`), []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
  };
};

export default useVideos;
