import React, { createContext, RefObject,useCallback,useEffect,useState } from "react";
import {PlayerStates, VideoPlayer} from "../types"
import {  useFullScreenHandle } from "react-full-screen";



export const videoContext = createContext<VideoPlayer>(null)

export default function VideoContext({children}:{children:JSX.Element|JSX.Element[]}){
    const [state,setState] = useState<PlayerStates | undefined>(PlayerStates.LOADING);
    const [previous,setPrevious] = useState<PlayerStates>();
    const [ref,setRef] = useState<RefObject<HTMLVideoElement | undefined>>()
    const [duration,setDuration] = useState<number>()
    const [current,setCurrent] = useState<number | undefined>(0)
    const [screen,setScreen] = useState({option:"min"})
    const handleScreen = useFullScreenHandle()

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
        if(ref?.current?.currentTime){
            setCurrent(currentTime)
            if(state!==PlayerStates.LOADING){
                console.log("Estado: ",state)
                setPrevious(state)
            } 
            setState(PlayerStates.LOADING)
            ref.current.currentTime = currentTime;
        }
    }

    const load = () =>{
        setState(PlayerStates.IDLE)
    }

    const canPlay = () =>{
        setState(previous)
    }

    const fullScreen = () =>{
        handleScreen.enter()
        setScreen({option:"full"})
    }

    const exitFullScreen = () =>{
        handleScreen.exit()
        setScreen({option:"min"})
    }

    const reportChange = useCallback((st:boolean) => {
        if(st) setScreen({option:"full"})
        else setScreen({option:"min"})
      }, []);

    useEffect(()=>{
        setDuration(ref?.current?.duration)
    },[ref?.current?.duration,ref])

    return(
        <videoContext.Provider value={
            {
                state,
                Play,
                setPlayer,
                Pause,
                duration,
                updateCurrent,
                current,
                setCurrent,
                load,
                canPlay,
                fullScreen,
                exitFullScreen,
                screen,
                handleScreen,
                reportChange
            }
            } >
            {children}
        </videoContext.Provider>
    )
}