"use client"

import { useEffect, useState } from "react"

export function Time() {
  let [time, setTime] = useState(new Date())
  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  })
  return (
    <span className="timer" suppressHydrationWarning>
      {time.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </span>
  )
}
