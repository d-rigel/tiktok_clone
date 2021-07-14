import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <h1>From app component</h1>

      <div className="app__videos">
        {videos.map(
          ({
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
            _id,
          }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              key={_id}
            />
          )
        )}
        {/* <Video
          url="https://cdn.videvo.net/videvo_files/video/premium/video0224/small_watermarked/17_Nursery_Plus_II_796_hands_tablet_preview.webm"
          channel="d-rigel"
          description="smashing react and node"
          song="Bless the Lord oh my soul"
          likes={234}
          messages={567}
          shares={836}
        />
        <Video
          url="https://player.vimeo.com/external/434647030.sd.mp4?s=c7219b5c859c9b3896daa49ed712f576f04d5658&profile_id=139&oauth2_token_id=57447761"
          channel="Emmanuel"
          description="What a beautiful Monday"
          song="I will sing"
          likes={234}
          messages={312}
          shares={122}
        />
        <Video url="https://player.vimeo.com/external/289559163.sd.mp4?s=e03f5adacd593bb925489eaa881bbc6039b791be&profile_id=164&oauth2_token_id=57447761" /> */}
      </div>
      {/* app container */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
    </div>
  );
}

export default App;
