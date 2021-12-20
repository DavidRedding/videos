import axios from "axios";
const KEY = "AIzaSyCYJB164cjYY6772widfAuHg5P9YCHqlWw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video", // stops the unique "key" prop error msg
    maxResults: 5,
    key: KEY,
  },
});

// youtube is now a pre-configured instance in Axios
// it can be called like so: youtube.xyz()/ youtube()
// with the ext. '.get'
// inside of get is the path you want to make a request to
