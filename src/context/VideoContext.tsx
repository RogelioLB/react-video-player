import React, { createContext, RefObject,useEffect,useState } from "react";
import { PlayerStates } from "../types";
import {  VideoPlayer } from "../types";


export const videoContext = createContext<VideoPlayer>(null)

export default function VideoContext({children}:{children:JSX.Element|JSX.Element[]}){
    const [state,setState] = useState(PlayerStates.IDLE);
    const [ref,setRef] = useState<RefObject<HTMLVideoElement | undefined>>()
    const [duration,setDuration] = useState<number>()
    const [current,setCurrent] = useState<number | undefined>(0)

    const Play = () => {
        setState(PlayerStates.PLAYING)
        ref?.current?.play()
    }

    const Pause = () => {
        setState(PlayerStates.PAUSE)
        ref?.current?.pause()
    }

    const setPlayer =  (ref:RefObject<HTMLVideoElement | undefined>) => {
        if(ref){
            setRef(ref)
        }       
    }

    const updateCurrent = (currentTime:number) =>{
        setCurrent(currentTime)
        if(ref?.current?.currentTime)
        ref.current.currentTime = currentTime;
    }

    useEffect(()=>{
        setDuration(ref?.current?.duration)
    },[ref?.current?.duration,ref])

    return(
        <videoContext.Provider value={{state, Play, setPlayer, Pause,duration,updateCurrent,current,setCurrent}} >
            {children}
        </videoContext.Provider>
    )
}