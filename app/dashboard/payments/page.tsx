import { PaymentList } from "@/components/payments/payment-list"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground mt-2">Track all payment transactions</p>
      </div>

      <PaymentList />
    </div>
  )
}
