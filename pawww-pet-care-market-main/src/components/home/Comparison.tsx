import { Check, Minus, X } from "lucide-react";

type Cell = "yes" | "no" | "partial" | string;
const ROWS: { label: string; furrever: Cell; engraved: Cell; gps: Cell }[] = [
  { label: "Finder can reach you instantly", furrever: "yes", engraved: "partial", gps: "no" },
  { label: "Update details anytime", furrever: "yes", engraved: "no", gps: "partial" },
  { label: "Alert when someone helps", furrever: "yes", engraved: "no", gps: "partial" },
  { label: "No charging required", furrever: "yes", engraved: "yes", gps: "no" },
  { label: "You choose what’s shared", furrever: "yes", engraved: "no", gps: "no" },
  { label: "No monthly subscription", furrever: "yes", engraved: "yes", gps: "no" },
];

function Mark({ v, highlight }: { v: Cell; highlight?: boolean }) {
  if (v === "yes")
    return (
      <span className={`mx-auto grid size-7 place-items-center rounded-full ${highlight ? "bg-primary text-primary-foreground" : "bg-success-soft text-success"}`}>
        <Check className="size-4" strokeWidth={3} />
      </span>
    );
  if (v === "no")
    return (
      <span className="mx-auto grid size-7 place-items-center rounded-full bg-muted text-muted-foreground">
        <X className="size-3.5" strokeWidth={3} />
      </span>
    );
  return (
    <span className="mx-auto grid size-7 place-items-center rounded-full bg-muted text-muted-foreground">
      <Minus className="size-3.5" strokeWidth={3} />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The difference</span>
          <h2 className="display-lg mt-3">More than a name on a tag.</h2>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-5 text-left font-medium text-muted-foreground"> </th>
                <th className="bg-secondary p-5 font-display text-base font-extrabold text-ink">Furrever</th>
                <th className="p-5 font-medium text-muted-foreground">Engraved ID tag</th>
                <th className="p-5 font-medium text-muted-foreground">GPS tracker</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className={i < ROWS.length - 1 ? "border-b border-border" : ""}>
                  <td className="p-5 font-medium text-foreground">{r.label}</td>
                  <td className="bg-secondary p-5 text-center">
                    <Mark v={r.furrever} highlight />
                  </td>
                  <td className="p-5 text-center">
                    <Mark v={r.engraved} />
                  </td>
                  <td className="p-5 text-center">
                    <Mark v={r.gps} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
