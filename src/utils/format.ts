export const format = (s?:number) => {
    if(s===0 || !s) return `00:00`
    const minutes = (s / 60)
    const minutesString = minutes.toString()
    const seconds = Number(minutesString.slice(minutesString.indexOf("."))) * 60
    const secondsString = seconds.toString()
    let formattedMinutes = minutesString.slice(0,minutesString.indexOf("."))
    let formattedSeconds = secondsString.slice(0,secondsString.indexOf("."))

    formattedMinutes = formattedMinutes.length<=1 ? `0${formattedMinutes}` : formattedMinutes
    formattedSeconds = formattedSeconds.length<=1 ? `0${formattedSeconds}` : formattedSeconds

    const formatted = `${formattedMinutes}:${formattedSeconds}`
    return formatted
}