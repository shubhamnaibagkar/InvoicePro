import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { InvoiceList } from "@/components/invoices/invoice-list"

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground mt-2">Create and manage your invoices</p>
        </div>
        <Link href="/dashboard/invoices/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </Link>
      </div>

      <InvoiceList />
    </div>
  )
}
