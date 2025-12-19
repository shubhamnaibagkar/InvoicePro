import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const invoices = [
  {
    id: "INV-001",
    client: "Acme Corporation",
    amount: 2500.0,
    status: "paid",
    date: "2024-01-15",
  },
  {
    id: "INV-002",
    client: "TechStart Inc.",
    amount: 1800.0,
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "INV-003",
    client: "Global Solutions",
    amount: 3200.0,
    status: "paid",
    date: "2024-01-12",
  },
  {
    id: "INV-004",
    client: "Creative Agency",
    amount: 1500.0,
    status: "overdue",
    date: "2024-01-10",
  },
  {
    id: "INV-005",
    client: "Digital Media Co.",
    amount: 2100.0,
    status: "pending",
    date: "2024-01-09",
  },
]

export function RecentInvoices() {
  return (
    <div className="space-y-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <p className="font-semibold">{invoice.id}</p>
              <Badge
                variant={
                  invoice.status === "paid" ? "default" : invoice.status === "pending" ? "secondary" : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{invoice.client}</p>
            <p className="text-xs text-muted-foreground">{invoice.date}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold text-lg">${invoice.amount.toLocaleString()}</p>
            <Button variant="outline" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
