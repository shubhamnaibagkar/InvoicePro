"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsForm() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
          <CardDescription>Update your business details and contact information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" placeholder="Your Business Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="business@example.com" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" placeholder="www.yourbusiness.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address</Label>
            <Textarea id="address" placeholder="Enter your business address" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxId">Tax ID / EIN</Label>
            <Input id="taxId" placeholder="XX-XXXXXXX" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Settings</CardTitle>
          <CardDescription>Customize your invoice preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="invoicePrefix">Invoice Prefix</Label>
              <Input id="invoicePrefix" placeholder="INV" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nextNumber">Next Invoice Number</Label>
              <Input id="nextNumber" type="number" placeholder="001" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="currency">Default Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
              <Input id="taxRate" type="number" placeholder="10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentTerms">Default Payment Terms (days)</Label>
            <Select defaultValue="30">
              <SelectTrigger id="paymentTerms">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Default Invoice Notes</Label>
            <Textarea id="notes" placeholder="Thank you for your business..." rows={4} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Configure how you accept payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <Input id="bankName" placeholder="Your Bank Name" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input id="accountNumber" placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="routingNumber">Routing Number</Label>
              <Input id="routingNumber" placeholder="XXXXXXXXX" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paypalEmail">PayPal Email</Label>
            <Input id="paypalEmail" type="email" placeholder="payments@example.com" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg">Save Changes</Button>
      </div>
    </div>
  )
}
