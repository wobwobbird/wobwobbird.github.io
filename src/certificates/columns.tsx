"use client"
 
import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Certs = {
    id: string
    category: "Programming Languages" | "Backend & Databases" | "Frontend Development" | "Game Development" | "Other Technical Training"
    specialisation: string
    course: string
    details: string
    provider: "Codecademy" | "Udemy" | "SoloLearn"
    date_completed: Date
    link: string
    status: "Completed" | "Ongoing"
}
   
export const columns: ColumnDef<Certs>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 bg-amber-300">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "specialisation",
    header: "Specialisation",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "provider",
    header: "Provider",
  },
  {
    accessorKey: "date_completed",
    header: "Date completed",
    cell: ({ row }) => {
      const d = row.getValue("date_completed") as Date
      return d ? new Date(d).toLocaleDateString() : "—"
    },
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => {
      const url = row.getValue("link") as string
      return url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          View
        </a>
      ) : "—"
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
