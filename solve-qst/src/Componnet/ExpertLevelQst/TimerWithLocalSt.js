import { useState, useEffect }  from 'react'

const TimerWithLocalSt = () => {
    const stopTime = localStorage.getItem("newtimer")
  const [timer, setTimer] = useState(stopTime ? parseInt(stopTime, 10) : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const newTime = prev + 1;

        const updateTimer = newTime >= 120 ? 0 : newTime
        localStorage.setItem("newtimer", updateTimer);
        return updateTimer
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const mins = String(Math.floor(timer / 60)).padStart(2, "0")
  const sec = String(Math.floor(timer % 60)).padStart(2, "0")

  return (
    <div>
         <h1>{mins}:{sec}</h1>
    </div>
  )
}

export default TimerWithLocalSt;