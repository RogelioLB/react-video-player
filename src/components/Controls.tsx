import React from "react"
import usePlayerState from "../hooks/usePlayerState"
import { PlayerStates } from "../types"
import {FaPause, FaPlay} from "react-icons/fa"
import {BiExitFullscreen, BiFullscreen} from "react-icons/bi"
import { ControlsContainer, ControlsProps, FullScreen, Icon, PlayPause,  ProgressBar } from "./StyledComponents"

export const Controls = (props:ControlsProps) =>{
    const player = usePlayerState()
    const {pause,play,duration,current,updateCurrent,screen,exitFullScreen,fullScreen} = player
    const state = player.state as unknown as PlayerStates

    return(
        <ControlsContainer {...props} onClick={(e)=>e.stopPropagation()}>
            <ProgressBar value={current} max={duration} type="range"  onChange={(e)=>{
                
                if(updateCurrent) updateCurrent(Number(e.target.value))
            }}/>
            <PlayPause>
                {
                    state === PlayerStates.PLAYING ? (
                        <Icon onClick={pause}><FaPause /></Icon>
                    )
                    :
                    (
                        <Icon onClick={play}><FaPlay /></Icon>
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