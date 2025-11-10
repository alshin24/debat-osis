"use client"

import { useState } from "react"
import HomePage from "@/components/home-page"
import SetupPage from "@/components/setup-page"
import DebateDisplayPage from "@/components/debate-display-page"
import type { Candidate, DebateTheme, DebateQuestion } from "@/app/data/debate-data"

export interface DebateSession {
  theme: DebateTheme
  question: DebateQuestion
  candidates: Candidate[]
  duration: number
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState<"home" | "setup" | "debate">("home")
  const [debateSession, setDebateSession] = useState<DebateSession | null>(null)

  const handleStartDebate = () => {
    setCurrentPage("setup")
  }

  const handleSetupComplete = (session: DebateSession) => {
    setDebateSession(session)
    setCurrentPage("debate")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
  }

  const handleBackToSetup = () => {
    setCurrentPage("setup")
  }

  if (currentPage === "setup") {
    return <SetupPage onComplete={handleSetupComplete} onCancel={handleBackToHome} />
  }

  if (currentPage === "debate" && debateSession) {
    return <DebateDisplayPage session={debateSession} onSessionEnd={handleBackToSetup} />
  }

  return <HomePage onStart={handleStartDebate} />
}
