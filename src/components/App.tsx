import React from "react"
import styled from "styled-components"
import { Controls } from "./Controls"

interface VideoContainerProps{
    width:number | string,
    height: number | string
}

const VideoContainer = styled.div<VideoContainerProps>`
    width: ${props=>typeof props.width === "number" ? props.width+"px" : props.width};
    height: ${props=>typeof props.height === "number" ? props.height+"px" : props.height};
    background-color:#000;
`

interface VideoPlayerProps extends VideoContainerProps{
    url?: string
}

export default function VideoPlayer({width,height}:VideoPlayerProps){
    return (
        <VideoContainer width={width} height={height}>
            <Controls />
        </VideoContainer>
    )
}