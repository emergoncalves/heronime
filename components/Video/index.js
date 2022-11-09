import React from 'react'
import YouTube from "react-youtube";

function Video({youtubeId}) {
    const opts = {
        height: "390",
        width: "640",
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