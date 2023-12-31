import React,{useState,useEffect} from 'react'

// import '../../Style/style.css';

export default function Iwatch(props) {

  const [time, setTime] = useState(new Date());

   useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const samy = formattedTime.split(":");
  const AMPM = samy[2].split(" ");

  
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="time_card">
        <p className="time-text"><span>{samy[0]}:{samy[1]}:{AMPM[0]}</span><span className="time-sub-text">{AMPM[1]}</span></p>
        <p className="day-text">{formattedDate}th</p>
    </div>
  )
}
