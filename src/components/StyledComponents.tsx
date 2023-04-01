import styled from "styled-components"
import {VideoContainerProps } from "../types"

export type ControlsProps = {
    hide:boolean
}

export const ControlsContainer = styled.div<ControlsProps>`
    position:absolute;
    bottom:${props=>props.hide ? "-100px" : "0"};
    left:0;
    width:100%;
    display:flex;
    align-items:center;
    height:40px;
    padding:10px;
    box-sizing:border-box;
    justify-content: space-between;
    color:white;
    transition:.5s all ease;
    background-color:rgb(23 32 42 /.5);
`



export const ProgressBar = styled.input`
    position:absolute;
    height:10px;
    top:-10px;
    left:0;
    width:100%;
    appearance: none;
    border-radius: 0px;
    background:blue;
    overflow: hidden;
    -webkit-appearance: none;
    cursor:pointer;

    &::-moz-range-track{
        background-color: #3e3e3e;
        height:100%;
    }

    &::-webkit-slider-runnable-track{
        background-color: #3e3e3e;
        height: 100%;
    }

    &::-moz-range-thumb{
        display:none;
        appearance: none;
        -webkit-appearance: none;
        background:transparent;
        opacity:0;
    }

    &::-webkit-slider-thumb{
        appearance: none;
        -webkit-appearance: none;
        width:10px;
        height:100%;
        background-color: #3498db;
    }

    &::-webkit-progress-value{
        height: 100%;
        background-color: #3498db;
    }

    &::-moz-range-progress{
        height:100%;
        background-color: #3498db;
    }
`

export const Icon = styled.span`
    display:flex;
    align-items:center;
    cursor:pointer;
    font-size:24px;
`


export const VideoContainer = styled.div<VideoContainerProps>`
    position: relative;
    width: ${props=>typeof props.width === "number" ? props.width+"px" : props.width};
    height: ${props=>typeof props.height === "number" ? props.height+"px" : props.height};
    background-color:#000;
    overflow:hidden;
`



export const Video = styled.video`
    width:100%;
    height:100%;
`

export const Loader = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;

    &:after{
        content:"";
        position:absolute;
        margin:auto;
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        top:0;
        bottom:0;
        right:0;
        left:0;
        }

        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`

export const FullScreen = styled.div``

export const PlayPause = styled.div`
    
`

export const DurationContainer = styled.div`
    position:absolute;
    top:-35px;
    left:0px;
    padding:0 15px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

export const Duration = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-weight:700;
    font-family: 'Poppins', sans-serif;
    text-shadow:black 1px 2px 5px;
`