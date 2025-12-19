import type React from "react"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Header } from "@/components/layout/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 bg-muted/40">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
