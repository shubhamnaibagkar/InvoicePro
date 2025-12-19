import { SettingsForm } from "@/components/settings/settings-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your business profile and preferences</p>
      </div>

      <SettingsForm />
    </div>
  )
}
