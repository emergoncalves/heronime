import React from 'react'
import YouTube from "react-youtube";
import {isMobile} from 'react-device-detect';

function Video({youtubeId}) {
    const opts = {
        height: isMobile ? "250" : "490",
        width: isMobile ? "290" : "740",
        playerVars: {
            autoplay: 0,
        },
    };

    function _onReady(event) {
        event.target.pauseVideo();
      }

    return (
        <div>
            <YouTube videoId={youtubeId}
                opts={opts} onReady={_onReady} />
        </div>
    )
}

export default Video