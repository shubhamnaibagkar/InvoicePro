"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockClients = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    totalInvoices: 8,
    totalRevenue: 12400,
    status: "active",
  },
  {
    id: "2",
    name: "TechStart Inc.",
    email: "hello@techstart.com",
    phone: "+1 (555) 234-5678",
    totalInvoices: 5,
    totalRevenue: 8900,
    status: "active",
  },
  {
    id: "3",
    name: "Global Solutions",
    email: "info@globalsolutions.com",
    phone: "+1 (555) 345-6789",
    totalInvoices: 12,
    totalRevenue: 18600,
    status: "active",
  },
  {
    id: "4",
    name: "Creative Agency",
    email: "team@creative.com",
    phone: "+1 (555) 456-7890",
    totalInvoices: 3,
    totalRevenue: 4500,
    status: "inactive",
  },
  {
    id: "5",
    name: "Digital Media Co.",
    email: "contact@digitalmedia.com",
    phone: "+1 (555) 567-8901",
    totalInvoices: 6,
    totalRevenue: 9800,
    status: "active",
  },
  {
    id: "6",
    name: "StartupXYZ",
    email: "info@startupxyz.com",
    phone: "+1 (555) 678-9012",
    totalInvoices: 4,
    totalRevenue: 7200,
    status: "active",
  },
]

export function ClientList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = mockClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{client.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <Badge variant={client.status === "active" ? "default" : "secondary"}>{client.status}</Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Send Email</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">Total Revenue</p>
                  <p className="font-bold text-lg">${client.totalRevenue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Invoices</p>
                  <p className="font-bold text-lg">{client.totalInvoices}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
