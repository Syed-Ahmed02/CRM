"use client"

import * as React from "react"
import {
  RiAddLine,
  RiCalendarLine,
  RiDragMove2Line,
  RiFlagLine,
  RiMoneyDollarCircleLine,
  RiUser3Line,
} from "@remixicon/react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type Priority = "high" | "medium" | "low"

type DealCard = {
  id: string
  title: string
  account: string
  owner: string
  value: string
  dueDate: string
  priority: Priority
  notes: string
}

type KanbanColumns = Record<string, DealCard[]>

const columnMeta = {
  backlog: {
    title: "Backlog",
    description: "New opportunities",
    tint: "border-chart-1/30 bg-chart-1/10",
  },
  discovery: {
    title: "Discovery",
    description: "Qualifying fit",
    tint: "border-chart-2/30 bg-chart-2/10",
  },
  proposal: {
    title: "Proposal",
    description: "Offer in review",
    tint: "border-chart-3/30 bg-chart-3/10",
  },
  won: {
    title: "Won",
    description: "Ready for handoff",
    tint: "border-primary/30 bg-primary/10",
  },
}

const initialColumns: KanbanColumns = {
  backlog: [
    {
      id: "deal-acme-renewal",
      title: "Acme renewal",
      account: "Acme Systems",
      owner: "Maya Patel",
      value: "$42.5K",
      dueDate: "May 12",
      priority: "high",
      notes:
        "Expansion conversation is active. Confirm procurement timing and introduce customer success before the next call.",
    },
    {
      id: "deal-ridgeway",
      title: "Ridgeway onboarding",
      account: "Ridgeway Studio",
      owner: "Noah Kim",
      value: "$18.2K",
      dueDate: "May 15",
      priority: "medium",
      notes:
        "Waiting on stakeholder map. Send a concise implementation plan and ask for the technical buyer.",
    },
  ],
  discovery: [
    {
      id: "deal-juniper-pilot",
      title: "Juniper pilot",
      account: "Juniper Labs",
      owner: "Sara Chen",
      value: "$27.0K",
      dueDate: "May 18",
      priority: "high",
      notes:
        "Pilot group is engaged. Next step is aligning success criteria with the head of revenue operations.",
    },
    {
      id: "deal-northline",
      title: "Northline referral",
      account: "Northline Capital",
      owner: "Alex Morgan",
      value: "$11.8K",
      dueDate: "May 22",
      priority: "low",
      notes:
        "Referral came through a partner. Keep the first call relationship-led and avoid a heavy product pitch.",
    },
  ],
  proposal: [
    {
      id: "deal-zenith",
      title: "Zenith rollout",
      account: "Zenith Group",
      owner: "Emma Wilson",
      value: "$63.4K",
      dueDate: "May 24",
      priority: "medium",
      notes:
        "Proposal is with finance. Add the security appendix and confirm whether legal needs a vendor packet.",
    },
  ],
  won: [
    {
      id: "deal-luma",
      title: "Luma expansion",
      account: "Luma Health",
      owner: "David Kim",
      value: "$31.9K",
      dueDate: "May 28",
      priority: "high",
      notes:
        "Signed and ready for handoff. Schedule kickoff, assign CSM, and capture executive sponsor details.",
    },
  ],
}

const priorityClass: Record<Priority, string> = {
  high: "bg-destructive/10 text-destructive ring-destructive/20",
  medium: "bg-chart-1/10 text-chart-5 ring-chart-1/30 dark:text-chart-1",
  low: "bg-muted text-muted-foreground ring-border",
}

function moveCard(
  columns: KanbanColumns,
  cardId: string,
  targetColumn: string
): KanbanColumns {
  let movedCard: DealCard | undefined
  const nextColumns = Object.fromEntries(
    Object.entries(columns).map(([columnId, cards]) => [
      columnId,
      cards.filter((card) => {
        if (card.id !== cardId) {
          return true
        }

        movedCard = card
        return false
      }),
    ])
  ) as KanbanColumns

  if (!movedCard || nextColumns[targetColumn].some((card) => card.id === cardId)) {
    return columns
  }

  return {
    ...nextColumns,
    [targetColumn]: [...nextColumns[targetColumn], movedCard],
  }
}

export function DashboardKanbanBoard() {
  const [columns, setColumns] = React.useState<KanbanColumns>(initialColumns)
  const [activeCard, setActiveCard] = React.useState<DealCard | null>(null)
  const totalValue = Object.values(columns)
    .flat()
    .reduce((total, card) => total + Number(card.value.replace(/[$K]/g, "")), 0)

  return (
    <>
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Deal flow</p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Relationship pipeline
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Drag cards between stages or click any card to inspect the record.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-lg border bg-background px-3 py-2 text-sm">
              <span className="text-muted-foreground">Board value</span>{" "}
              <span className="font-semibold">${totalValue.toFixed(1)}K</span>
            </div>
            <Button size="sm" className="gap-1.5">
              <RiAddLine className="size-4" />
              New deal
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto p-4">
          <div className="grid min-w-[960px] grid-cols-4 gap-3">
            {Object.entries(columnMeta).map(([columnId, meta]) => {
              const cards = columns[columnId] ?? []

              return (
                <div
                  key={columnId}
                  className="flex min-h-[31rem] flex-col rounded-xl border bg-muted/35"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault()
                    const cardId = event.dataTransfer.getData("text/plain")
                    setColumns((current) => moveCard(current, cardId, columnId))
                  }}
                >
                  <div
                    className={cn(
                      "m-2 rounded-lg border px-3 py-2",
                      meta.tint
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-heading text-sm font-semibold">
                          {meta.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {meta.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-border">
                        {cards.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
                    {cards.map((card) => (
                      <button
                        key={card.id}
                        draggable
                        onClick={() => setActiveCard(card)}
                        onDragStart={(event) => {
                          event.dataTransfer.setData("text/plain", card.id)
                        }}
                        className="group rounded-xl border bg-background p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-medium">{card.title}</h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {card.account}
                            </p>
                          </div>
                          <RiDragMove2Line className="size-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 font-medium capitalize ring-1",
                              priorityClass[card.priority]
                            )}
                          >
                            {card.priority}
                          </span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <RiMoneyDollarCircleLine className="size-3.5" />
                            {card.value}
                          </span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <RiCalendarLine className="size-3.5" />
                            {card.dueDate}
                          </span>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t pt-3 text-xs text-muted-foreground">
                          <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                            {card.owner
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </span>
                          {card.owner}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Sheet open={Boolean(activeCard)} onOpenChange={(open) => !open && setActiveCard(null)}>
        <SheetContent className="sm:max-w-md">
          {activeCard ? (
            <>
              <SheetHeader>
                <SheetTitle>{activeCard.title}</SheetTitle>
                <SheetDescription>{activeCard.account}</SheetDescription>
              </SheetHeader>
              <div className="space-y-5 px-6 pb-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Value</p>
                    <p className="mt-1 font-semibold">{activeCard.value}</p>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Due date</p>
                    <p className="mt-1 font-semibold">{activeCard.dueDate}</p>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg border bg-background p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <RiUser3Line className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Owner</span>
                    <span className="ml-auto font-medium">{activeCard.owner}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <RiFlagLine className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Priority</span>
                    <span
                      className={cn(
                        "ml-auto rounded-full px-2 py-0.5 text-xs font-medium capitalize ring-1",
                        priorityClass[activeCard.priority]
                      )}
                    >
                      {activeCard.priority}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-semibold">Next step</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {activeCard.notes}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  )
}
