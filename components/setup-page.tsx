"use client"

import { useState } from "react"
import { debateThemes, candidates } from "@/app/data/debate-data"
import type { DebateSession } from "@/app/page"
import type { Candidate, DebateTheme } from "@/app/data/debate-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface SetupPageProps {
  onComplete: (session: DebateSession) => void
  onCancel: () => void
}

export default function SetupPage({ onComplete, onCancel }: SetupPageProps) {
  const [selectedTheme, setSelectedTheme] = useState<DebateTheme | null>(debateThemes[0])
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([candidates[0], candidates[1]])
  const [duration, setDuration] = useState(180)

  const handleCandidateToggle = (candidate: Candidate) => {
    setSelectedCandidates((prev) => {
      const isSelected = prev.find((c) => c.id === candidate.id)
      if (isSelected) {
        return prev.filter((c) => c.id !== candidate.id)
      } else if (prev.length < 6) {
        return [...prev, candidate]
      }
      return prev
    })
  }

  const handleStart = () => {
    if (selectedTheme && selectedCandidates.length > 0) {
      onComplete({
        theme: selectedTheme,
        question: "",
        candidates: selectedCandidates,
        duration,
      })
    }
  }

  return (
    <div className="min-h-screen p-6 md:p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Debat OSIS</h1>
            <p className="text-muted-foreground">Pengaturan Sesi Debat</p>
          </div>
          <Button variant="ghost" onClick={onCancel}>
            ← Kembali
          </Button>
        </div>
        <Separator className="mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-foreground">Pilih Tema Debat</h2>
                <Badge variant="outline">{selectedTheme ? "Dipilih" : "Wajib Dipilih"}</Badge>
              </div>

              <div className="space-y-2">
                {debateThemes.map((theme) => (
                  <Button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    variant={selectedTheme?.id === theme.id ? "default" : "outline"}
                    className="w-full justify-start"
                  >
                    {theme.theme}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-foreground">Atur Durasi</h2>
                <Badge variant="secondary">
                  {Math.floor(duration / 60)}m {duration % 60}s
                </Badge>
              </div>
              <Input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value)
                  if (value >= 1) {
                    setDuration(value)
                  }
                }}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-3">
                <span>Minimal: 1 detik</span>
                <span>Maksimal: Tidak terbatas</span>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-foreground">Pilih Pasangan Calon</h2>
              <Badge variant="outline">{selectedCandidates.length}/6</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Pilih 1 hingga 6 pasangan calon untuk debat</p>

            {selectedCandidates.length === 6 && (
              <Alert className="mb-4 bg-accent/10 border-accent">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Maksimal 6 pasangan calon sudah dipilih</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto mb-6">
              {candidates.map((candidate) => {
                const isSelected = selectedCandidates.find((c) => c.id === candidate.id)
                return (
                  <Button
                    key={candidate.id}
                    onClick={() => handleCandidateToggle(candidate)}
                    variant={isSelected ? "default" : "outline"}
                    className="h-auto flex-col py-2"
                  >
                    <div className="font-bold text-sm">{candidate.name}</div>
                    <div className="text-xs opacity-75">{candidate.role}</div>
                  </Button>
                )
              })}
            </div>

            <Separator className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Terpilih: <span className="font-bold text-foreground">{selectedCandidates.length}</span>
            </p>
            <Button onClick={handleStart} disabled={selectedCandidates.length === 0} className="w-full">
              Mulai Debat
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
