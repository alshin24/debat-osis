"use client"

import { useState, useEffect } from "react"

interface TimerDisplayProps {
  duration: number
  onComplete: () => void
}

export default function TimerDisplay({ duration, onComplete }: TimerDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(false)


  useEffect(() => {
    setTimeLeft(duration)
    const startTimer = setTimeout(() => setIsRunning(true), 500)
    return () => clearTimeout(startTimer)
  }, [duration])


  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false)
      onComplete()
    }
  }, [timeLeft, isRunning, onComplete])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const percentage = (timeLeft / duration) * 100
  const isLowTime = timeLeft <= 30

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="6" />

          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={isLowTime ? "var(--destructive)" : "var(--primary)"}
            strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>


        <div className="text-center z-10">
          <div
            className={`text-4xl md:text-5xl font-bold font-mono tracking-wider ${
              isLowTime ? "text-destructive" : "text-foreground"
            }`}
          >
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
        </div>
      </div>



      <p className="mt-6 text-sm text-muted-foreground font-semibold">
        {timeLeft === 0
          ? "Waktu Habis!"
          : isLowTime
          ? "Waktu hampir habis!"
          : "Waktu berbicara"}
      </p>
    </div>
  )
}
