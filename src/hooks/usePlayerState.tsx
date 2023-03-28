import { useContext, useEffect } from "react";
import { videoContext } from "../context/VideoContext";
import {  VideoPlayer } from "../types";

export default function usePlayerState(){
    const values = useContext<VideoPlayer>(videoContext);
    
    useEffect(()=>{
        console.log(values)
    },[values])

    return {state:values?.state , play:values?.Play, setPlayer:values?.setPlayer,pause:values?.Pause}
}