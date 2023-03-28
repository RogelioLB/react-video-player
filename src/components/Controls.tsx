import React from "react"
import styled from "styled-components"
import usePlayerState from "../hooks/usePlayerState"
import { PlayerStates } from "../types"
import {FaPause, FaPlay} from "react-icons/fa"

type ControlsProps = {
    hide:boolean
}

const ControlsContainer = styled.div<ControlsProps>`
    position:absolute;
    bottom:${props=>props.hide ? "-40px" : "0"};
    left:0;
    width:100%;
    display:flex;
    align-items:center;
    height:40px;
    padding:10px;
    box-sizing:border-box;
    color:white;
    transition:.5s all ease;
    background-color:rgb(23 32 42 /.5);
`

const Icon = styled.span`
    display:flex;
    align-items:center;
`

export const Controls = (props:ControlsProps) =>{
    const player = usePlayerState()
    const {pause,play} = player
    const state = player.state as unknown as PlayerStates

    return(
        <ControlsContainer {...props}>
            {
                state === PlayerStates.PLAYING ? (
                    <Icon onClick={pause}><FaPause /></Icon>
                )
                :
                (
                    <Icon onClick={play}><FaPlay /></Icon>
                )
            }
        </ControlsContainer>    
    )
}