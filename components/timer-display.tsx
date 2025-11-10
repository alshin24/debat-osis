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
    const mulaiTimer = setTimeout(() => setIsRunning(true), 500)
    return () => clearTimeout(mulaiTimer)
  }, [duration])

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          setTimeout(() => {
            onComplete()
            if (audioRef.current) {
              audioRef.current.play().catch((err) => console.log("Gagal memutar suara:", err))
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
    if (onLowTime) onLowTime(timeLeft <= 30 && timeLeft > 0)
  }, [timeLeft, onLowTime])

  const menit = Math.floor(timeLeft / 60)
  const detik = timeLeft % 60
  const persentase = (timeLeft / duration) * 100
  const waktuHampirHabis = timeLeft <= 30

  return (
    <div className="flex flex-col items-center fade-in animate-in duration-500">
      <div className="relative w-[26rem] h-[26rem] md:w-lg md:h-[32rem] flex items-center justify-center">
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="5" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={waktuHampirHabis ? "var(--destructive)" : "var(--secondary)"}
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - persentase / 100)}`}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-1000 ease-linear"
          />
        </svg>

        <div className="text-center z-10 p-5">
          <div
            className={`text-7xl md:text-9xl font-bold font-mono tracking-wider ${
              waktuHampirHabis ? "text-destructive" : "text-secondary"
            }`}
          >
            {String(menit).padStart(2, "0")}:{String(detik).padStart(2, "0")}
          </div>
        </div>
      </div>

      <p className="mt-8 text-2xl text-muted-foreground font-semibold">
        {waktuHampirHabis && timeLeft > 0 ? "⏰ Waktu Hampir Habis!" : "🎤 Waktu Berbicara"}
      </p>
    </div>
  )
}
