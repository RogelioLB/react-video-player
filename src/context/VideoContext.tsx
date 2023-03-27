import React, { createContext, useState } from "react";

enum PlayerStates{
    PLAYING,
    STOPPED,
    PAUSE,
    IDLE
}

type VideoPlayer = {
    state: PlayerStates,
    Play:()=>void
} | null

export const videoContext = createContext<VideoPlayer>(null)

export default function VideoContext({children}:{children:JSX.Element|JSX.Element[]}){
    const [state,setState] = useState(PlayerStates.IDLE);

    const Play = () =>{
        setState(PlayerStates.PLAYING)
    }

    return(
        <videoContext.Provider value={{state, Play}} >
            {children}
        </videoContext.Provider>
    )
}