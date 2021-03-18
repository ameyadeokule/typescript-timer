function Timer(timeInSeconds: number): Array<number | string> {
  let hour: number = Math.floor(timeInSeconds / 3600)
  let minutes: number = Math.floor((timeInSeconds - hour * 3600) / 60)
  let seconds: number = timeInSeconds - hour * 3600 - minutes * 60

  let hourFormat = hour < 10 ? `0${hour}` : hour
  let minuteFormat = minutes < 10 ? `0${minutes}` : minutes
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds
  return [hourFormat, minuteFormat, secondsFormat]
}

export default Timer
