import { cn } from "@/lib/utils"

interface SpecItemProps {
  label: string
  value: string
  icon?: React.ReactNode
}

export function SpecItem({ label, value, icon }: SpecItemProps) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-0">
      {icon && <span className="text-accent mt-0.5">{icon}</span>}
      <div className="flex-1 min-w-0">
        <span className="text-xs text-text-tertiary uppercase tracking-wider block mb-0.5">
          {label}
        </span>
        <span className="text-sm text-text-primary font-medium break-words">{value}</span>
      </div>
    </div>
  )
}

interface SpecTableProps {
  specs: {
    display?: string
    processor?: string
    ram?: string
    storage?: string
    battery?: string
    fastCharging?: string
    rearCamera?: string
    frontCamera?: string
    os?: string
    network?: string
    colorOptions?: string[]
    weight?: string
    dimensions?: string
    fingerprint?: string
    headphoneJack?: boolean
  }
}

export function SpecTable({ specs }: SpecTableProps) {
  const rows: SpecItemProps[] = [
    { label: "Display", value: specs.display || "—" },
    { label: "Processor", value: specs.processor || "—" },
    { label: "RAM", value: specs.ram || "—" },
    { label: "Storage", value: specs.storage || "—" },
    { label: "Battery", value: specs.battery || "—" },
    ...(specs.fastCharging ? [{ label: "Fast Charging", value: specs.fastCharging }] : []),
    { label: "Rear Camera", value: specs.rearCamera || "—" },
    { label: "Front Camera", value: specs.frontCamera || "—" },
    { label: "Operating System", value: specs.os || "—" },
    ...(specs.network ? [{ label: "Network", value: specs.network }] : []),
    ...(specs.colorOptions?.length
      ? [{ label: "Colors", value: specs.colorOptions.join(", ") }]
      : []),
    ...(specs.weight ? [{ label: "Weight", value: specs.weight }] : []),
    ...(specs.dimensions ? [{ label: "Dimensions", value: specs.dimensions }] : []),
    ...(specs.fingerprint ? [{ label: "Fingerprint", value: specs.fingerprint }] : []),
    {
      label: "Headphone Jack",
      value: specs.headphoneJack === undefined ? "—" : specs.headphoneJack ? "Yes" : "No",
    },
  ]

  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-surface-raised">
        <h3 className="font-display font-semibold text-text-primary">Full Specifications</h3>
      </div>
      <div className="divide-y divide-border/50">
        {rows.map((row) => (
          <SpecItem key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  )
}
