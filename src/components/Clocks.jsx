/* eslint-disable no-unused-vars */
import Clock from "./Clock"

const Clocks = () => {

    const timezone = [{timezone: "Asia/Dhaka", country:'Bangladesh'}, {timezone: 'America/New_York', country:'USA'}, {timezone: "Asia/Shanghai", country:'China'}, {timezone: "Europe/Moscow", country:'Russia'}, {timezone: "Australia/Sydney", country:'Australia'}, {timezone: "Europe/London", country:'UK'}]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-5 py-[40px] w-[90vw] mx-auto">

      {timezone.map((item, index) => (
        <Clock key={index} information={item} />
      ))}

    </div>
  )
}

export default Clocks
