import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr/dist/plyr.css";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [isApiReady, setApiReady] = useState(false);

  useEffect(() => {
    const loadYoutubeIframeApi = () => {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
      window.onYouTubeIframeAPIReady = () => setApiReady(true);
    };

    if (!window.YT) {
      loadYoutubeIframeApi();
    } else {
      setApiReady(true);
    }
  }, []);

  return (
    <>
      {isApiReady && (
        <Plyr
          options={{
            controls: [
              "play-large", // The large play button in the center
              "rewind", // Rewind by the seek time (default 10 seconds)
              "play", // Play/pause playback
              "fast-forward", // Fast forward by the seek time (default 10 seconds)
              "mute", // Toggle mute
              "volume", // Volume control
              "current-time", // The current time of playback
              "duration", // The full duration of the media
              "progress", // The progress bar and scrubber for playback and buffering
              // "captions", // Toggle captions
              "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
              "settings", // Settings menu
              "pip", // Picture-in-picture (currently Safari only)
              // "airplay", // Airplay (currently Safari only)
              "fullscreen", // Toggle fullscreen
            ],
            captions: { active: true, language: "auto", update: true },
            previewThumbnails: { enabled: false, src: "" },
          }}
          source={{
            type: "video",
            sources: [
              {
                src: "ZnJ7uOK4nYg",
                provider: "youtube",
              },
            ],
          }}
        />
      )}
    </>
  );
};
export default VideoPlayer;
