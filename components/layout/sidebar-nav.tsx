"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, FileText, DollarSign, Settings, Receipt } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Invoices",
    href: "/dashboard/invoices",
    icon: FileText,
  },
  {
    title: "Clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: DollarSign,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-background flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Receipt className="h-6 w-6" />
          <span className="font-bold text-xl">InvoicePro</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <p className="text-xs text-muted-foreground text-center">© 2025 InvoicePro</p>
      </div>
    </div>
  )
}
