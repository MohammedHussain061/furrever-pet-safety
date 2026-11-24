import { useState, type FormEvent } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PawMark } from "@/components/site/Logo";

const SIGNED_UP_KEY = "furrever:signed-up";
// Pages where the pop-up would be redundant.
const HIDDEN_ON = ["/sign-in", "/dashboard"];

const fieldClass =
  "h-11 w-full rounded-xl border border-input bg-card px-4 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const suppressed = HIDDEN_ON.some((p) => pathname.startsWith(p));

  // NOTE: the pop-up no longer opens automatically on page load, so visitors
  // land straight on the homepage. To show it on demand, call setOpen(true)
  // from a button or event instead.

  function finish() {
    try {
      localStorage.setItem(SIGNED_UP_KEY, "1");
    } catch {
      /* storage unavailable — fine */
    }
    setOpen(false);
    navigate({ to: "/dashboard" });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    finish();
  }

  return (
    <Dialog open={open && !suppressed} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] max-w-md overflow-y-auto rounded-3xl p-7 sm:p-8">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-accent text-accent-foreground">
          <PawMark className="size-6" />
        </div>
        <div className="text-center">
          <DialogTitle className="font-serif text-3xl font-normal tracking-[-0.01em]">
            Welcome to the family.
          </DialogTitle>
          <DialogDescription className="mt-2">
            Create your account to register your pet’s trackable Furrever tag.
          </DialogDescription>
        </div>

        <form onSubmit={onSubmit} className="grid gap-3.5">
          <div>
            <label htmlFor="su-name" className="text-sm font-medium text-foreground">Your name</label>
            <input id="su-name" required className={`${fieldClass} mt-1.5`} placeholder="Ananya Rao" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="su-email" className="text-sm font-medium text-foreground">Email address</label>
            <input id="su-email" type="email" required className={`${fieldClass} mt-1.5`} placeholder="you@example.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="su-password" className="text-sm font-medium text-foreground">Password</label>
            <div className="relative mt-1.5">
              <input
                id="su-password"
                type={showPw ? "text" : "password"}
                required
                minLength={8}
                className={`${fieldClass} pr-12`}
                placeholder="At least 8 characters"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Hide password" : "Show password"}
                aria-pressed={showPw}
                className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground hover:text-ink"
              >
                {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-1 w-full">Create account</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            onClick={() => setOpen(false)}
            className="font-semibold text-ink underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}
