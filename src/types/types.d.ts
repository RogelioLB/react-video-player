import { RefObject } from "react"
import { FullScreenHandle } from "react-full-screen"

export interface VideoContainerProps{
    width:number | string,
    height: number | string,
}

export interface VideoPlayerProps extends VideoContainerProps{
    url?: string,
    onMouseMove?:()=>void
}



export type VideoPlayer = {
    state?: PlayerStates,
    Play:()=>void,
    setPlayer: (ref:RefObject<HTMLVideoElement | undefined>)=>void,
    Pause:()=>void,
    duration:number | undefined,
    current:number | undefined,
    updateCurrent:(currentTime: number) => void,
    setCurrent:React.Dispatch<React.SetStateAction<number | undefined>>,
    load: ()=>void,
    canPlay: ()=>void,
    fullScreen: ()=>void,
    exitFullScreen: ()=>void,
    screen: {option:string},
    handleScreen: FullScreenHandle,
    reportChange:(st:boolean)=>void
} | null

