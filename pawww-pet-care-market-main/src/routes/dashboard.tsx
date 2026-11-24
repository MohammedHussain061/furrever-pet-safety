import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Bell,
  Eye,
  History,
  LayoutGrid,
  LogOut,
  MapPin,
  PencilLine,
  Settings,
  User,
} from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import { Logo, PawMark } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Pet dashboard — Furrever" },
      { name: "description", content: "See your pet's status, recent tag scans and what finders can see." },
      { property: "og:title", content: "Pet dashboard — Furrever" },
      { property: "og:description", content: "Your pet's status, recent tag scans and privacy settings in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DashboardPage,
});

const NAV = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: PawMark, label: "My pets" },
  { icon: History, label: "Scan history" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
  { icon: User, label: "Profile" },
];

const DETAILS = [
  { id: "name", label: "Pet’s name" },
  { id: "contact", label: "Owner phone number" },
  { id: "note", label: "Friendly note" },
  { id: "medical", label: "Medical notes" },
  { id: "address", label: "Home area" },
] as const;

function DashboardPage() {
  const [lost, setLost] = useState(false);
  const [shared, setShared] = useState<Record<string, boolean>>({ name: true, contact: true, note: true, medical: false, address: false });
  const sharedCount = Object.values(shared).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="bg-sidebar text-sidebar-foreground lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:p-6">
        <div className="flex items-center justify-between px-5 py-4 lg:block lg:p-0">
          <Logo tone="light" />
          <Link to="/" className="text-sm font-medium text-sidebar-foreground lg:hidden">Back to site</Link>
        </div>
        <nav aria-label="Dashboard" className="flex gap-1 overflow-x-auto px-4 pb-4 lg:mt-10 lg:flex-col lg:p-0">
          {NAV.map(({ icon: Icon, label }, i) => (
            <span
              key={label}
              aria-current={i === 0 ? "page" : undefined}
              className={cn(
                "flex shrink-0 cursor-pointer items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                i === 0 ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-border",
              )}
            >
              <Icon className="size-4" />
              {label}
            </span>
          ))}
        </nav>
        <div className="mt-auto hidden lg:block">
          <div className="rounded-2xl bg-sidebar-border p-4">
            <p className="font-display text-sm font-bold text-primary-foreground">Add another pet</p>
            <p className="mt-1 text-xs text-sidebar-foreground">Every collar gets its own profile.</p>
            <Button asChild size="sm" variant="peach" className="mt-3 w-full">
              <Link to="/collars">Shop collars</Link>
            </Button>
          </div>
          <Link to="/" className="mt-4 flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:text-sidebar-primary">
            <LogOut className="size-4" /> Sign out
          </Link>
        </div>
      </aside>

      <main className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Overview</span>
            <h1 className="mt-2 text-4xl font-extrabold">Welcome back, Ananya.</h1>
          </div>
          <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Sample data preview
          </span>
        </div>

        {lost && (
          <div role="status" className="mt-6 flex animate-fade-up flex-wrap items-center justify-between gap-4 rounded-2xl border border-danger/30 bg-danger-soft p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 text-danger" />
              <div>
                <p className="font-display font-bold text-danger">Bruno is marked as lost.</p>
                <p className="text-sm text-foreground">Finders now see your “lost” message. We’ll alert you the moment his tag is tapped.</p>
              </div>
            </div>
            <Button onClick={() => setLost(false)}>Mark as found</Button>
          </div>
        )}

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-border bg-card xl:col-span-2">
            <div className="grid sm:grid-cols-[220px_1fr]">
              <img src={heroDog} alt="Bruno" className="h-56 w-full object-cover object-top sm:h-full" />
              <div className="p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-4xl font-extrabold">Bruno</h2>
                  {lost ? (
                    <span className="rounded-full bg-danger-soft px-3 py-1 text-xs font-semibold text-danger">Marked as lost</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                      <span className="size-1.5 rounded-full bg-success" /> Safe at home
                    </span>
                  )}
                </div>
                <p className="mt-1 text-muted-foreground">Golden retriever · 4 years</p>
                <dl className="mt-6 divide-y divide-border text-[15px]">
                  {[
                    ["Collar", "PL-20481 · Powder blue"],
                    ["Last tapped", "2 days ago"],
                    ["Vet", "Dr. Kapoor, Indiranagar"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-medium text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant={lost ? "default" : "destructive"} onClick={() => setLost((v) => !v)}>
                    {lost ? "Mark as found" : "Mark as lost"}
                  </Button>
                  <Button variant="soft">
                    <PencilLine /> Edit profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow">Privacy</span>
                <h3 className="mt-1 text-xl font-bold">{sharedCount} details shared</h3>
              </div>
              <Eye className="size-5 text-muted-foreground" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">What a finder can see when they tap.</p>
            <ul className="mt-5 space-y-4">
              {DETAILS.map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-3">
                  <label htmlFor={`share-${d.id}`} className="text-[15px] text-foreground">{d.label}</label>
                  <Switch
                    id={`share-${d.id}`}
                    checked={shared[d.id] ?? false}
                    onCheckedChange={(v) => setShared((s) => ({ ...s, [d.id]: v }))}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 xl:col-span-2">
            <h3 className="text-xl font-bold">Recent activity</h3>
            <ul className="mt-5 space-y-1">
              {[
                { icon: Eye, title: "Profile viewed by a finder", sub: "Tapped near 100 Feet Road", time: "2 days ago", tone: "bg-tile-sky text-ink" },
                { icon: MapPin, title: "Location shared", sub: "Near Cubbon Park", time: "2 days ago", tone: "bg-tile-rose text-coral" },
                { icon: PencilLine, title: "Medical notes updated", sub: "Added allergy: chicken", time: "Last week", tone: "bg-success-soft text-success" },
                { icon: Bell, title: "Collar registered", sub: "PL-20481 linked to Bruno", time: "Mar 2026", tone: "bg-secondary text-ink" },
              ].map(({ icon: Icon, title, sub, time, tone }) => (
                <li key={title} className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-muted">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${tone}`}>
                    <Icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{sub}</p>
                  </div>
                  <time className="text-xs text-muted-foreground">{time}</time>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary p-7">
            <span className="eyebrow">Last scan</span>
            <h3 className="mt-1 text-xl font-bold">Near Cubbon Park</h3>
            <div className="relative mt-5 h-44 overflow-hidden rounded-2xl bg-card">
              <svg viewBox="0 0 300 180" className="absolute inset-0 size-full text-border" aria-hidden="true">
                <path d="M0 40h300M0 100h300M0 150h300M60 0v180M150 0v180M230 0v180" stroke="currentColor" strokeWidth="10" />
                <path d="M0 120 Q120 60 300 90" stroke="currentColor" strokeWidth="16" fill="none" />
                <circle cx="190" cy="60" r="28" className="fill-success-soft" />
              </svg>
              <span className="absolute left-[58%] top-[38%] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-accent" />
                <span className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift">
                  <MapPin className="size-4" />
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Shared by the finder · 2 days ago</p>
          </div>
        </div>
      </main>
    </div>
  );
}
