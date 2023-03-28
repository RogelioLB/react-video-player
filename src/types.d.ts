export interface VideoContainerProps{
    width:number | string,
    height: number | string
}

export interface VideoPlayerProps extends VideoContainerProps{
    url?: string,
    onMouseMove?:()=>void
}

export enum PlayerStates{
    PLAYING,
    STOPPED,
    PAUSE,
    IDLE
}

export type VideoPlayer = {
    state: PlayerStates,
    Play:()=>void,
    setPlayer: (ref:RefObject<HTMLVideoElement | undefined>)=>void,
    Pause:()=>void,
    duration:number | undefined,
    current:number | undefined,
    updateCurrent:(currentTime: number) => void,
    setCurrent:React.Dispatch<React.SetStateAction<number | undefined>>
} | null