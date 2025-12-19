"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
}

export function InvoiceForm() {
  const [items, setItems] = useState<InvoiceItem[]>([{ id: "1", description: "", quantity: 1, rate: 0 }])

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), description: "", quantity: 1, rate: 0 }])
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <form className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="client">Select Client</Label>
              <Select>
                <SelectTrigger id="client">
                  <SelectValue placeholder="Choose a client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acme">Acme Corporation</SelectItem>
                  <SelectItem value="techstart">TechStart Inc.</SelectItem>
                  <SelectItem value="global">Global Solutions</SelectItem>
                  <SelectItem value="creative">Creative Agency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input id="clientEmail" type="email" placeholder="client@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientAddress">Client Address</Label>
              <Textarea id="clientAddress" placeholder="Enter client address" rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input id="invoiceNumber" placeholder="INV-001" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDate">Issue Date</Label>
              <Input id="issueDate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input id="dueDate" type="date" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Invoice Items</CardTitle>
          <Button type="button" onClick={addItem} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="grid gap-4 md:grid-cols-12 items-end">
                <div className="md:col-span-5 space-y-2">
                  <Label htmlFor={`description-${item.id}`}>{index === 0 && "Description"}</Label>
                  <Input
                    id={`description-${item.id}`}
                    placeholder="Item description"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor={`quantity-${item.id}`}>{index === 0 && "Quantity"}</Label>
                  <Input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, "quantity", Number.parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor={`rate-${item.id}`}>{index === 0 && "Rate"}</Label>
                  <Input
                    id={`rate-${item.id}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, "rate", Number.parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label>{index === 0 && "Amount"}</Label>
                  <div className="h-10 flex items-center font-semibold">${(item.quantity * item.rate).toFixed(2)}</div>
                </div>

                <div className="md:col-span-1">
                  {items.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax (10%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Add any additional notes or terms..." rows={4} />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  )
}
