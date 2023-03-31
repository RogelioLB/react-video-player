import React, { useCallback, useEffect, useRef, useState } from "react"
import usePlayerState from "../hooks/usePlayerState"
import { PlayerStates, VideoPlayerProps } from "../types"
import { Controls } from "./Controls"
import { Loader, Video, VideoContainer } from "./StyledComponents";
import { FullScreen, FullScreenHandle } from "react-full-screen";


export default function VideoPlayer({width,height,url}:VideoPlayerProps){
    const [hideControls,setHideControls] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const props = usePlayerState()
    const {setPlayer,play,pause,state,setCurrent,load,canPlay, reportChange} = props;
    const handleScreen = props.handleScreen as FullScreenHandle

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
        <VideoContainer  width={width} height={height} onMouseMove={handleMouseMove} onClick={handleClick}>
            <FullScreen handle={handleScreen} onChange={reportChange}>
                <Video src={url} ref={videoRef} onLoadedData={load} onCanPlay={canPlay} onTimeUpdate={(e)=>{if(setCurrent) setCurrent(e.currentTarget.currentTime)}}/>
                {state === PlayerStates.LOADING && <Loader />}
                <Controls hide={hideControls} />
            </FullScreen>
        </VideoContainer>
    )
}