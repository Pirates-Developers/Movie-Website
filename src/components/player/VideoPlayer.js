import React, { useEffect, useState } from 'react';
import Plyr from 'plyr-react';
import 'plyr/dist/plyr.css';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const [isApiReady, setApiReady] = useState(false);
  useEffect(() => {
    const loadYoutubeIframeApi = () => {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
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
          source={{
            type: 'video',
            sources: [
              {
                src: 'tOaqr8oXwck',
                provider: 'youtube',
              },
            ],
          }}
        />
      )}
    </>
  );
};

export default VideoPlayer;
