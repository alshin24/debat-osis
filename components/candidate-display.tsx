"use client"

import Image from "next/image"
import type { Candidate } from "@/app/data/debate-data"
import { Card } from "@/components/ui/card"

interface CandidateDisplayProps {
  candidate: Candidate
}

export default function CandidateDisplay({ candidate }: CandidateDisplayProps) {
  return (
    <div>
      <Card className="p-8 max-w-sm">

        <div className="mb-6 rounded-md overflow-hidden border border-border">
          <div className="relative w-full aspect-square">
            <Image
              src={candidate.image || "/placeholder.svg"}
              alt={candidate.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>


        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">{candidate.role}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">{candidate.name}</h3>
        </div>
      </Card>
    </div>
  )
}
