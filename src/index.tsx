import React from "react"
import Player from "./components/App";
import VideoContext from "./context/VideoContext";
import { VideoPlayerProps } from "./types";



export default function VideoPlayer(props:VideoPlayerProps){
    return (
        <VideoContext>
            <Player {...props}/>
        </VideoContext>
    )
}