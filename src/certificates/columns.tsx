"use client"
 
import type { ColumnDef } from "@tanstack/react-table"

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
