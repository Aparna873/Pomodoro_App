import './App.css';
import React , {useRef, useState} from "react"
import { padTime } from './components/helper';
function App() 
{
 const [timeLeft,setTimeLeft]=useState(25*60);
 const [isRunning,setisRunning]=useState(false);
 const [title,setTitle]=useState('LET  THE  COUNTDOWN  BEGIN !!')
 const intervalRef=useRef(null);

 function startTimer(){
  if(intervalRef.current!=null) return ;
  setisRunning(true);
  setTitle(`YOU'RE  DOING  GREAT !!`);
  intervalRef.current=setInterval(()=>{
  setTimeLeft(timeLeft=>{
    if(timeLeft>=1) return timeLeft-1;
    resetTimer();
    return 0;
  });
  },1000)
 }

 function stopTimer(){
  if(intervalRef.current==null) return ;
  setisRunning(false);
  setTitle("KEEP  IT  UP !!")
  clearInterval(intervalRef.current);
  intervalRef.current=null;
 }

 function resetTimer(){
  setTitle("READY  FOR  ANOTHER  ROUND ?");
  clearInterval(intervalRef.current);
  setTimeLeft(25*60);
  intervalRef.current=null;
 }

 const minutes = padTime(Math.floor(timeLeft/60));
 const seconds = padTime(timeLeft-minutes * 60)
  return (
    <div className="App">
      <h2>{title}</h2>

      <div className="Timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="btn">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
export default App;
