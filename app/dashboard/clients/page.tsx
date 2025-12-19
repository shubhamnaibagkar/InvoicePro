import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ClientList } from "@/components/clients/client-list"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground mt-2">Manage your client relationships</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      <ClientList />
    </div>
  )
}
