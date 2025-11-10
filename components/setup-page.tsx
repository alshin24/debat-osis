"use client";

import { useState } from "react";
import { debateThemes, candidates } from "@/app/data/debate-data";
import type { DebateSession } from "@/app/page";
import type { Candidate, DebateTheme } from "@/app/data/debate-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface SetupPageProps {
  onComplete: (session: DebateSession) => void;
  onCancel: () => void;
}

export default function SetupPage({ onComplete, onCancel }: SetupPageProps) {
  const [selectedTheme, setSelectedTheme] = useState<DebateTheme | null>(
    debateThemes[0]
  );
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
    number | null
  >(null);
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([
    candidates[0],
    candidates[1],
  ]);
  const [duration, setDuration] = useState(180);

  const handleCandidateToggle = (candidate: Candidate) => {
    setSelectedCandidates((prev) => {
      const isSelected = prev.find((c) => c.id === candidate.id);
      if (isSelected) {
        return prev.filter((c) => c.id !== candidate.id);
      } else if (prev.length < 6) {
        return [...prev, candidate];
      }
      return prev;
    });
  };

  const handleStart = () => {
    if (
      selectedTheme &&
      selectedCandidates.length > 0 &&
      selectedQuestionIndex !== null
    ) {
      onComplete({
        theme: selectedTheme,
        question: selectedTheme.questions[selectedQuestionIndex],
        candidates: selectedCandidates,
        duration,
      });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Pengaturan Debat
            </h1>
            <p className="text-muted-foreground">
              Atur sesi debat sebelum dimulai
            </p>
          </div>
          <Button variant="ghost" onClick={onCancel}>
            ← Kembali
          </Button>
        </div>

        <Separator className="mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Kiri */}
          <div className="space-y-6">
            {/* Pilih Tema */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Pilih Tema Debat
                </h2>
                <Badge variant="outline">
                  {selectedTheme ? "Dipilih" : "Wajib Dipilih"}
                </Badge>
              </div>

              <div className="space-y-2">
                {debateThemes.map((theme) => (
                  <Button
                    key={theme.id}
                    onClick={() => {
                      setSelectedTheme(theme);
                      setSelectedQuestionIndex(null);
                    }}
                    variant={
                      selectedTheme?.id === theme.id ? "default" : "outline"
                    }
                    className="w-full justify-start"
                  >
                    {theme.theme}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Pilih Amplop */}
            {selectedTheme && (
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-bold text-foreground">
                    Pilih Amplop
                  </h2>
                  <Badge variant="outline">
                    {selectedQuestionIndex !== null
                      ? "Dipilih"
                      : "Wajib Dipilih"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  {selectedTheme.questions.map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => setSelectedQuestionIndex(index)}
                      variant={
                        selectedQuestionIndex === index ? "default" : "outline"
                      }
                      className="w-full justify-start text-left"
                    >
                      Amplop {index + 1}
                    </Button>
                  ))}
                </div>
              </Card>
            )}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Durasi Waktu
                </h2>
                <Badge variant="secondary">
                  {Math.floor(duration / 60)}m {duration % 60}s
                </Badge>
              </div>

              <Input
                type="number"
                value={duration === 0 ? "" : duration}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value);
                  setDuration(isNaN(value) ? 0 : value);
                }}
                placeholder="Masukkan durasi dalam detik"
              />

              <div className="flex justify-between text-sm text-muted-foreground mt-3">
                <span>Mulai dari: 0 detik</span>
                <span>Tidak ada batas maksimum</span>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-foreground">
                Pilih Kandidat
              </h2>
              <Badge variant="outline">{selectedCandidates.length}/6</Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Pilih 1–6 kandidat untuk debat
            </p>

            {selectedCandidates.length === 6 && (
              <Alert className="mb-4 bg-accent/10 border-accent">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Maksimal 6 kandidat</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto mb-6">
              {candidates.map((candidate) => {
                const isSelected = selectedCandidates.find(
                  (c) => c.id === candidate.id
                );
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
                );
              })}
            </div>

            <Separator className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Dipilih:{" "}
              <span className="font-bold text-foreground">
                {selectedCandidates.length}
              </span>
            </p>

            <Button
              onClick={handleStart}
              disabled={
                selectedCandidates.length === 0 ||
                selectedQuestionIndex === null
              }
              className="w-full"
            >
              Mulai Debat
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
