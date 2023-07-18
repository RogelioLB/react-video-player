import styled from "styled-components"
import {VideoContainerProps } from "../types/types"

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

export const ProgressBar = styled.input<{percentage:number}>`
    position: absolute;
    top:0px;
    left: 0;
    right:0;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    background: #9CA3AF;
    background-image: linear-gradient(#fff,#fff);
    background-size: ${props=>props.percentage}% 100%;
    background-repeat: no-repeat;
    border-radius: 0px;
    cursor:pointer;

    &::-moz-range-track{
        background-color: #3e3e3e;
        height:100%;
    }

    &::-webkit-slider-runnable-track  {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    &::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        height: 0px;
        width: 0px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 0px;
        width: 0px;
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