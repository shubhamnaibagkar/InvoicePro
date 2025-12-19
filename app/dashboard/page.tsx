import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, FileText, Users, Clock } from "lucide-react"
import { RecentInvoices } from "@/components/dashboard/recent-invoices"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { InvoiceStatusChart } from "@/components/dashboard/invoice-status-chart"

export default function DashboardPage() {
  // Mock data
  const stats = {
    totalRevenue: 45231.89,
    pendingAmount: 12450.0,
    totalInvoices: 48,
    activeClients: 23,
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's an overview of your business.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">4 unpaid invoices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalInvoices}</div>
            <p className="text-xs text-muted-foreground mt-1">+12 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeClients}</div>
            <p className="text-xs text-muted-foreground mt-1">+3 new this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Invoice Status</CardTitle>
            <CardDescription>Distribution of invoice statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <InvoiceStatusChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>Your latest billing activity</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentInvoices />
        </CardContent>
      </Card>
    </div>
  )
}
