import { useRef, useState } from 'react';



const CountdownTimerDecrement = () => {
    const[count,setCount] = useState(10);
    const [isActive, setIsActive] = useState(false);
    const intialRef = useRef(0);



    const startHandle = () => {
        if(!isActive && count > 0) {
          setIsActive(true);

          intialRef.current = setInterval(() => {
            setCount((preValue) => {
              if(preValue > 0) {
                return (preValue - 1);
              }
              else {
                clearInterval(intialRef.current);
                setIsActive(false);
                return preValue;
              }
            });
          },1000);
        } 
    };
    const stopHandle = () => {
      clearInterval(intialRef.current);
      setIsActive(false);
    };
    const restartHandle = () => {
      clearInterval(intialRef.current);
      setIsActive(false);
      setCount(10);
    };
  
    return (
      <div>
        <h2>Countdown Timer Decrement: {count}</h2>
        <div>
          <button onClick={startHandle} disabled={isActive || count === 0}>Start</button>
          <button onClick={stopHandle} disabled={!isActive}>Stop</button>
          <button onClick={restartHandle}>Restart</button>
        </div>
        
      </div>
    );
  };

export default CountdownTimerDecrement;
