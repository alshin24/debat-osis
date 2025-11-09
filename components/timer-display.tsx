"use client"

import { useState, useEffect, useRef } from "react"

interface TimerDisplayProps {
  duration: number
  onComplete: () => void
  onLowTime?: (isLow: boolean) => void
}

export default function TimerDisplay({ duration, onComplete, onLowTime }: TimerDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setTimeLeft(duration)
    const startTimer = setTimeout(() => setIsRunning(true), 500)
    return () => clearTimeout(startTimer)
  }, [duration])

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          // ✅ panggil setelah render cycle selesai biar ga error
          setTimeout(() => {
            onComplete()
            if (audioRef.current) {
              audioRef.current.play().catch((err) => console.log("[Timer] Audio play failed:", err))
            }
          }, 0)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, onComplete])

  useEffect(() => {
    if (onLowTime) {
      onLowTime(timeLeft <= 30 && timeLeft > 0)
    }
  }, [timeLeft, onLowTime])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const percentage = (timeLeft / duration) * 100
  const isLowTime = timeLeft <= 30

  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500">
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
            className="transition-[stroke-dashoffset] duration-1000 ease-linear"
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
        {isLowTime && timeLeft > 0 ? "⏰ Time is running out!" : "🎤 Speaking time"}
      </p>

      {/* <audio
        ref={audioRef}
        src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
        style={{ display: "none" }}
      /> */}
    </div>
  )
}
