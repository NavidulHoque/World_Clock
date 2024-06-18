/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

const Clock = ({information}) => {

    const [time, setTime] = useState('00:00:00')
    const [date, setDate] = useState('00/00/0000')
    const [day, setDay] = useState('Sunday')
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    useEffect(() => {

      const intervalID = setInterval(() => {

        const dateobj = new Date(new Date().toLocaleString('en-US', { timeZone: information.timezone }));

        setTime(`${(dateobj.getHours() % 12 || 12).toString().padStart(2, "0")}:${dateobj.getMinutes().toString().padStart(2, "0")}:${dateobj.getSeconds().toString().padStart(2, "0")} ${dateobj.getHours() >= 12 ? "PM" : "AM"}`)

        setDate(`${dateobj.getDate().toString().padStart(2, "0")}/${(dateobj.getMonth() + 1).toString().padStart(2, "0")}/${dateobj.getFullYear().toString().padStart(4, "0")}`)

        setDay(weekday[dateobj.getDay()])

      }, 1000);
    
      return () => {
        clearInterval(intervalID)
      }
    }, [])
    

  return (
    <div className="shadow-[0_0_2px_rgba(0,0,0,0.5)] flex flex-col items-center gap-y-3 text-center rounded-lg bg-white text-[20px]">

      <h2 className="bg-[#3498db] rounded-t-lg text-white py-[10px] w-full">{information.country}<i className="fa-regular fa-clock ml-1"></i></h2>

      <div className="flex flex-col gap-y-2">

        <span>{time}</span>
        <span>{date}</span>
        <span>{day}</span>

      </div>

      <a href={`https://www.timeanddate.com/time/zone/${information.country}`} target="_blank" className="w-[75%] border-2 border-[#3498db] rounded-lg text-[#3498db] hover:bg-[#3498db] hover:text-[white] text-[15px] py-[8px] transition duration-200 mb-[20px]">Learn More</a>

    </div>
  )
}

export default Clock
