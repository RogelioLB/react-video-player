import React, { createContext, RefObject,useState } from "react";
import { PlayerStates } from "../types";
import {  VideoPlayer } from "../types";


export const videoContext = createContext<VideoPlayer>(null)

export default function VideoContext({children}:{children:JSX.Element|JSX.Element[]}){
    const [state,setState] = useState(PlayerStates.IDLE);
    const [ref,setRef] = useState<RefObject<HTMLVideoElement | undefined>>()

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
            console.log("Player ready")
        }       
    }

    return(
        <videoContext.Provider value={{state, Play, setPlayer, Pause}} >
            {children}
        </videoContext.Provider>
    )
}