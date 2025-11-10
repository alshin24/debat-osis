"use client"

import Image from "next/image"
import type { Candidate } from "@/app/data/debate-data"
import { Card } from "@/components/ui/card"

interface CandidateDisplayProps {
  candidate: Candidate
}

export default function CandidateDisplay({ candidate }: CandidateDisplayProps) {
  return (
    <div className="flex justify-center">
      <Card className="p-6 w-80 md:w-96 lg:w-md h-auto flex flex-col items-center text-center shadow-lg">
        {/* foto kandidat */}
        <div className="mb-5 rounded-xl overflow-hidden border border-border w-full">
          <div className="relative w-full aspect-4/5">
            <Image
              src={candidate.image || "/placeholder.svg"}
              alt={candidate.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* nama kandidat */}
        <div>
          <p className="text-base text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
            {candidate.role}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug wrap-break-word ">
            {candidate.name}
          </h3>
        </div>
      </Card>
    </div>
  )
}
