"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Download, Send, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockInvoices = [
  {
    id: "INV-001",
    client: "Acme Corporation",
    amount: 2500.0,
    status: "paid",
    date: "2024-01-15",
    dueDate: "2024-02-15",
  },
  {
    id: "INV-002",
    client: "TechStart Inc.",
    amount: 1800.0,
    status: "pending",
    date: "2024-01-14",
    dueDate: "2024-02-14",
  },
  {
    id: "INV-003",
    client: "Global Solutions",
    amount: 3200.0,
    status: "paid",
    date: "2024-01-12",
    dueDate: "2024-02-12",
  },
  {
    id: "INV-004",
    client: "Creative Agency",
    amount: 1500.0,
    status: "overdue",
    date: "2024-01-10",
    dueDate: "2024-01-25",
  },
  {
    id: "INV-005",
    client: "Digital Media Co.",
    amount: 2100.0,
    status: "pending",
    date: "2024-01-09",
    dueDate: "2024-02-09",
  },
  { id: "INV-006", client: "StartupXYZ", amount: 4200.0, status: "paid", date: "2024-01-08", dueDate: "2024-02-08" },
  {
    id: "INV-007",
    client: "Enterprise Corp",
    amount: 5500.0,
    status: "pending",
    date: "2024-01-07",
    dueDate: "2024-02-07",
  },
  {
    id: "INV-008",
    client: "Design Studio",
    amount: 1900.0,
    status: "draft",
    date: "2024-01-06",
    dueDate: "2024-02-06",
  },
]

export function InvoiceList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search invoices..."
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
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
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
                  <th className="text-left p-4 font-medium">Invoice</th>
                  <th className="text-left p-4 font-medium">Client</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Due Date</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">{invoice.id}</td>
                    <td className="p-4">{invoice.client}</td>
                    <td className="p-4 text-muted-foreground">{invoice.date}</td>
                    <td className="p-4 text-muted-foreground">{invoice.dueDate}</td>
                    <td className="p-4 font-semibold">${invoice.amount.toLocaleString()}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          invoice.status === "paid"
                            ? "default"
                            : invoice.status === "pending"
                              ? "secondary"
                              : invoice.status === "draft"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
