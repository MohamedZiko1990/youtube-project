import axios from 'axios';
const KEY = "AIzaSyC-Lg70OELGOXifKf6JaJ6EAg95ZyI1SlM";


export const baseParams = {
    part: "snippet",
    maxResults: 10,
    key: KEY
  };

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });