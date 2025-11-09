"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface HomePageProps {
  onStart: () => void
}

export default function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
          Debat Calon Ketua OSIS
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 text-balance">
          Pemilihan Ketua & Wakil Ketua OSIS
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-8 text-balance">
          Platform interaktif untuk menampilkan visi, misi, serta gagasan terbaik dari setiap calon pemimpin OSIS.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8 mt-8">
          <div className="flex flex-col items-center">
            <Badge variant="secondary" className="mb-2">
              Langsung
            </Badge>
            <p className="text-xs text-muted-foreground">Debat Real-time</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col items-center">
            <Badge variant="secondary" className="mb-2">
              Paslon
            </Badge>
            <p className="text-xs text-muted-foreground">Beberapa Kandidat</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col items-center">
            <Badge variant="secondary" className="mb-2">
              Waktu
            </Badge>
            <p className="text-xs text-muted-foreground">Hitung Mundur Tepat</p>
          </div>
        </div>

        <Button size="lg" onClick={onStart}>
          Mulai Pengaturan
        </Button>
      </div>
    </div>
  )
}
