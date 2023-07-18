import React, { useEffect, useState } from "react"
import usePlayerState from "../hooks/usePlayerState"
import { PlayerStates } from "../types/types"
import {BiExitFullscreen, BiFullscreen, BiPlay, BiPause} from "react-icons/bi"
import { ControlsContainer, ControlsProps,  Duration,  DurationContainer,  FullScreen,  Icon, PlayPause,  ProgressBar } from "./StyledComponents"
import { format } from "../utils/format"

export const Controls = (props:ControlsProps) =>{
    const player = usePlayerState()
    const [percentage,setPercentage] = useState(0)
    const {pause,play,duration,current,updateCurrent,screen,exitFullScreen,fullScreen} = player
    const state = player.state as unknown as PlayerStates
    
    useEffect(()=>{
        if(current && duration)
        setPercentage((current / duration) * 100)
    },[current,duration])

    return(
        <ControlsContainer {...props} onClick={(e)=>e.stopPropagation()}>
            <DurationContainer>
                <Duration>{format(current)}</Duration>
                <Duration>{format(duration)}</Duration>
            </DurationContainer>
            <ProgressBar value={current} max={duration} percentage={percentage} type="range"  onChange={(e)=>{
                
                if(updateCurrent) updateCurrent(Number(e.target.value))
            }}/>
            <PlayPause>
                {
                    state === PlayerStates.PLAYING ? (
                        <Icon onClick={pause}><BiPause /></Icon>
                    )
                    :
                    (
                        <Icon onClick={play}><BiPlay /></Icon>
                    )
                }
            </PlayPause>
            <FullScreen>
                {
                    screen?.option === "min" ? (
                        <Icon onClick={fullScreen}><BiFullscreen /></Icon>
                    )
                    :
                    (
                        <Icon onClick={exitFullScreen}><BiExitFullscreen /></Icon>
                    )
                }
            </FullScreen>
        </ControlsContainer>    
    )
}