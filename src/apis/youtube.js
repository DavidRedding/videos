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
