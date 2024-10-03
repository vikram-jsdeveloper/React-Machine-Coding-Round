import { useRef, useState } from 'react';


const CountdownTimerIncrement = () => {

  const [count,setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intialRef = useRef(0);

  



  const startHandle = () => {
      if(!isActive && count < 10) {

        setIsActive(true);

        intialRef.current  = setInterval(() => {
          setCount(preValue => {
            if(preValue < 10){ 
              return (preValue + 1);
            }
            else {
              clearInterval(intialRef.current);
              setIsActive(false);
              return preValue
            }
          });
        },1000)

      }
  };

  const stopHandle = () => {
    clearInterval(intialRef.current);
    setIsActive(false);
  };

  const restarthandle = () => {
    clearInterval(intialRef.current);
    setIsActive(false);
    setCount(0);
  };
  

  return (
    <div>
      <h2>Countdown Timer Increment: {count}</h2>
      <div>
        <button onClick={startHandle} disabled={isActive || count === 10}>Start</button>
        <button onClick={stopHandle} disabled={!isActive}>Stop</button>
        <button onClick={restarthandle}>Restart</button>
      </div>
    </div>
  );
};

export default CountdownTimerIncrement;