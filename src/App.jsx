import { Container, Image, TimeNumber, TimeText } from "./styles"
import { useState } from "react"
import brasil from "./images/brasil.png"
function App() {

  const newEvent = "24 Nove 2022"

  const [sec, setSec] = useState()
  const [min, setMin] = useState()
  const [hour, setHour] = useState()
  const [day, setDay] = useState()

  function Countdown () {
    const newEventDate = new Date(newEvent);
    const currentDate = new Date();

    const totalSeconds = (newEventDate - currentDate) / 1000;

    
    setDay(Math.floor(totalSeconds / 3600 / 24))
    setHour(Math.floor(totalSeconds / 3600) % 24)
    setMin(Math.floor(totalSeconds / 60) % 60)
    setSec(Math.floor(totalSeconds) % 60)
    if(day < 0 && hour < 0 && min < 0 && sec < 0){
      setDay(0)
      setMin(0)
      setHour(0)
      setSec(0)
    }
  }
  function formatTime(time){
    return time < 10 ? `0${time}` : time;
  }
  setInterval(Countdown, 1000);

  if(day < 0 && hour < 0 && min < 0 && sec < 0){
    setDay(0)
    setMin(0)
    setHour(0)
    setSec(0)
    
  }

  return (
    <Container>
      <div>
        <h1>ESTREIA DO BRASIL NA COPA DO MUNDO EM...</h1>
        <TimeText>
          <span>Dias</span>
          <span>Horas</span>
          <span>Minutos</span>
          <span>Segundos</span>
        </TimeText>
        <TimeNumber>
          <span>{formatTime(day)}</span>:
          <span>{formatTime(hour)}</span>:
          <span>{formatTime(min)}</span>:
          <span>{formatTime(sec)}</span>
          </TimeNumber>
      </div>
      <Image src={brasil} alt="Brasil" />
    </Container>
  )
}

export default App
