import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import usePlayerState from "../hooks/usePlayerState"
import { PlayerStates, VideoContainerProps, VideoPlayerProps } from "../types"
import { Controls } from "./Controls"



const VideoContainer = styled.div<VideoContainerProps>`
    position: relative;
    width: ${props=>typeof props.width === "number" ? props.width+"px" : props.width};
    height: ${props=>typeof props.height === "number" ? props.height+"px" : props.height};
    background-color:#000;
    overflow:hidden;
`



const Video = styled.video`
    width:100%;
    height:100%;
`

export default function VideoPlayer({width,height,url}:VideoPlayerProps){
    const [hideControls,setHideControls] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const {setPlayer,play,pause,state,setCurrent} = usePlayerState()


    const handleMouseMove = () => {
        const timeout = setTimeout(()=>setHideControls(true),5000)
        if(hideControls)
            setHideControls(false)
        else clearTimeout(timeout)
    }

    const handleClick = () =>{
        if(pause && play)
        if(state===PlayerStates.PLAYING) pause()
        else play()
    }

    useEffect(()=>{
        if(setPlayer) setPlayer(videoRef)
    },[videoRef,setPlayer])
    

    return (
        <VideoContainer width={width} height={height} onMouseMove={handleMouseMove} onClick={handleClick}>
            <Video src={url} ref={videoRef} onTimeUpdate={(e)=>{if(setCurrent) setCurrent(e.currentTarget.currentTime)}}/>
            <Controls hide={hideControls} />
        </VideoContainer>
    )
}