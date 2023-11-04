import {useState} from 'react';
function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const handleStart = () =>{
    window.timer = setInterval(() => {
      setSec((sec) => sec+1)
    }, 1000);
  }

  const handleStop = () =>{
    clearInterval(window.timer);
  }

  const handleReset = () => {
    clearInterval(window.timer);
    setSec(0);
    setMin(0);
    setHour(0);
  }

if(sec>59){
  setMin((min) => min+1);
  setSec(0);
}

if (min > 59) {
    setHour((hour) => hour + 1);
    setMin(0);
}

  return (
      <div className="container">
          <div className="Wrapper">
              <h3>
                  {hour} {hour > 1 ? "Hrs " : "Hr "} 
                  {min} {min > 1 ? "Mins " : "Min "}
                  {sec} {sec > 1 ? "Secs " : "Sec "}
              </h3>
              <button onClick={handleStop}>Stop</button>
              <button onClick={handleStart}>Start</button>
              <button onClick={handleReset}>Reset</button>
          </div>
      </div>
  );
}

export default App;
