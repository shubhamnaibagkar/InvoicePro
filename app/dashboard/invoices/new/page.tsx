import { InvoiceForm } from "@/components/invoices/invoice-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewInvoicePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/invoices">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Create Invoice</h1>
          <p className="text-muted-foreground mt-2">Fill in the details to create a new invoice</p>
        </div>
      </div>

      <InvoiceForm />
    </div>
  )
}
