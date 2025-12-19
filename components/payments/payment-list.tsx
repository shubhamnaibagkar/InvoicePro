"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Building2, Wallet } from "lucide-react"

const mockPayments = [
  {
    id: "PAY-001",
    invoiceId: "INV-001",
    client: "Acme Corporation",
    amount: 2500.0,
    method: "credit_card",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "PAY-002",
    invoiceId: "INV-003",
    client: "Global Solutions",
    amount: 3200.0,
    method: "bank_transfer",
    status: "completed",
    date: "2024-01-12",
  },
  {
    id: "PAY-003",
    invoiceId: "INV-006",
    client: "StartupXYZ",
    amount: 4200.0,
    method: "credit_card",
    status: "completed",
    date: "2024-01-08",
  },
  {
    id: "PAY-004",
    invoiceId: "INV-002",
    client: "TechStart Inc.",
    amount: 1800.0,
    method: "paypal",
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "PAY-005",
    invoiceId: "INV-005",
    client: "Digital Media Co.",
    amount: 2100.0,
    method: "bank_transfer",
    status: "processing",
    date: "2024-01-09",
  },
]

const paymentMethods = {
  credit_card: { icon: CreditCard, label: "Credit Card" },
  bank_transfer: { icon: Building2, label: "Bank Transfer" },
  paypal: { icon: Wallet, label: "PayPal" },
}

export function PaymentList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPayments = mockPayments.filter((payment) => {
    const matchesSearch =
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.invoiceId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || payment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search payments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Payment ID</th>
                  <th className="text-left p-4 font-medium">Invoice</th>
                  <th className="text-left p-4 font-medium">Client</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Method</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => {
                  const PaymentIcon = paymentMethods[payment.method as keyof typeof paymentMethods].icon
                  const methodLabel = paymentMethods[payment.method as keyof typeof paymentMethods].label

                  return (
                    <tr key={payment.id} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{payment.id}</td>
                      <td className="p-4 text-muted-foreground">{payment.invoiceId}</td>
                      <td className="p-4">{payment.client}</td>
                      <td className="p-4 text-muted-foreground">{payment.date}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <PaymentIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{methodLabel}</span>
                        </div>
                      </td>
                      <td className="p-4 font-semibold">${payment.amount.toLocaleString()}</td>
                      <td className="p-4">
                        <Badge
                          variant={
                            payment.status === "completed"
                              ? "default"
                              : payment.status === "processing"
                                ? "secondary"
                                : payment.status === "failed"
                                  ? "destructive"
                                  : "outline"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
