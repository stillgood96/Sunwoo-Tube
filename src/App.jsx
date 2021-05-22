import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header.jsx";
import "@fortawesome/fontawesome-free/js/all.js";
import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyB_m_LruSxHt_A4Bm7FHA76NL-0fDPxf9E&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB_m_LruSxHt_A4Bm7FHA76NL-0fDPxf9E&key=AIzaSyB_m_LruSxHt_A4Bm7FHA76NL-0fDPxf9E",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
