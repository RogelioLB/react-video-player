import { useContext  } from "react";
import { videoContext } from "../context/VideoContext";
import {  VideoPlayer } from "../types/types";

export default function usePlayerState(){
    const values = useContext<VideoPlayer>(videoContext);

    return {
        state:values?.state, 
        play:values?.Play, 
        setPlayer:values?.setPlayer,
        pause:values?.Pause,
        duration:values?.duration,
        current:values?.current,
        updateCurrent:values?.updateCurrent,
        setCurrent:values?.setCurrent,
        load:values?.load,
        canPlay:values?.canPlay,
        fullScreen:values?.fullScreen as (() => void),
        exitFullScreen:values?.exitFullScreen as (() => void),
        screen:values?.screen,
        handleScreen:values?.handleScreen,
        reportChange:values?.reportChange
    }
}