"use client"

import { useState, useEffect } from "react"
import type { DebateSession } from "@/app/data/debate-data"
import CandidateDisplay from "@/components/candidate-display"
import TimerDisplay from "@/components/timer-display"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface DebateDisplayPageProps {
  session: DebateSession
  onSessionEnd: () => void
}

export default function DebateDisplayPage({ session, onSessionEnd }: DebateDisplayPageProps) {
  const [isSessionComplete, setIsSessionComplete] = useState(false)
  const [showCandidates, setShowCandidates] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [isLowTime, setIsLowTime] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowCandidates(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleTimerComplete = () => {
    setIsSessionComplete(true)
  }

  const handleLowTime = (low: boolean) => {
    setIsLowTime(low)
  }

  const handleStartTimer = () => {
    setTimeout(() => setShowTimer(true), 300)
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="min-h-screen flex flex-col p-6 md:p-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">{session.theme.theme}</h1>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={isSessionComplete ? "secondary" : "default"}>
                {isSessionComplete ? "Selesai" : "Sedang Berlangsung"}
              </Badge>
            </div>
            <div className="w-16 h-1 bg-border rounded-full"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Kandidat</p>
              <p className="text-2xl font-bold text-foreground">
                {session.candidates.length}/{session.candidates.length}
              </p>
            </div>
            {!isSessionComplete && (
              <Button variant="ghost" onClick={onSessionEnd}>
                ← Kembali
              </Button>
            )}
          </div>
        </div>

        {isSessionComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <Card className="text-center p-12 max-w-2xl">
              <div className="mb-6">
                <div className="inline-block p-3 bg-primary rounded-full mb-4">
                  <svg
                    className="w-12 h-12 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Sesi Debat Selesai!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Semua {session.candidates.length} kandidat telah menyampaikan pendapatnya.
              </p>
              <div className="mb-6 flex flex-wrap gap-2 justify-center">
                {session.candidates.map((candidate) => (
                  <Badge key={candidate.id} variant="outline">
                    {candidate.name}
                  </Badge>
                ))}
              </div>
              <Separator className="mb-6" />
              <Button onClick={onSessionEnd}>← Kembali ke Pengaturan</Button>
            </Card>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {showCandidates && !showTimer && (
              <div className="w-full">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="grid gap-4">
                      {session.candidates.map((candidate) => (
                        <CandidateDisplay key={candidate.id} candidate={candidate} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-6">
                    <Card className="p-6  bg-muted/50 border-border">  
                      <div className="space-y-4">
                        <div>
                          <p className="text-lg font-extrabold text-muted-foreground uppercase tracking-wide mb-2">
                            Soal
                          </p>
                          <p className="text-3xl font-bold text-foreground leading-relaxed">
                            {session.question.soal}
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-lg font-extrabold text-muted-foreground uppercase tracking-wide mb-2">
                            Pertanyaan
                          </p>
                          <p className="text-3xl font-bold text-foreground leading-relaxed">
                            {session.question.pertanyaan}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button size="lg" onClick={handleStartTimer} className="px-8">
                    Mulai Waktu
                  </Button>
                </div>
              </div>
            )}

            {showTimer && (
              <div className="flex flex-col items-center gap-4 w-full">
                <TimerDisplay duration={session.duration} onComplete={handleTimerComplete} onLowTime={handleLowTime} />
                {isLowTime && (
                  <Alert variant="destructive" className="max-w-md">
                    <AlertDescription className="text-center font-semibold">
                      ⏰ Waktu hampir habis! Kurang dari 30 detik tersisa.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

