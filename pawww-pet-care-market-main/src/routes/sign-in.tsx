import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import { Logo, PawMark } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";

type SignInSearch = { mode?: "register" };

export const Route = createFileRoute("/sign-in")({
  validateSearch: (search: Record<string, unknown>): SignInSearch =>
    search["mode"] === "register" ? { mode: "register" } : {},
  head: () => ({
    meta: [
      { title: "Sign in — Furrever" },
      { name: "description", content: "Sign in to manage your pet's Furrever tag, profile and privacy settings." },
      { property: "og:title", content: "Sign in — Furrever" },
      { property: "og:description", content: "Manage your pet's Furrever tag, profile and privacy settings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignInPage,
});

const fieldClass =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

function SignInPage() {
  const { mode } = Route.useSearch();
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-20">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="font-serif text-4xl font-normal tracking-[-0.01em] text-foreground">
            {isRegister ? "Welcome to the family." : "Hello, pet parent."}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {isRegister
              ? "Create your account to register your pet’s Furrever tag."
              : "Sign in to look after your pet’s tag and details."}
          </p>

          <div className="mt-8 grid gap-3">
            <button type="button" onClick={() => navigate({ to: "/dashboard" })} className="flex h-12 items-center justify-center gap-3 rounded-xl border border-input bg-card text-[15px] font-medium text-foreground transition-colors hover:bg-muted">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
              Continue with Google
            </button>
            <button type="button" onClick={() => navigate({ to: "/dashboard" })} className="flex h-12 items-center justify-center gap-3 rounded-xl bg-ink text-[15px] font-medium text-background transition-colors hover:opacity-90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Continue with Apple
            </button>
          </div>

          <div className="my-6 flex items-center gap-4 text-xs font-medium tracking-[0.14em] text-muted-foreground" role="separator">
            <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            {isRegister && (
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">Your name</label>
                <input id="name" className={`${fieldClass} mt-1.5`} placeholder="Ananya Rao" autoComplete="name" />
              </div>
            )}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
              <input id="email" type="email" className={`${fieldClass} mt-1.5`} placeholder="you@example.com" autoComplete="email" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
              <div className="relative mt-1.5">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  className={`${fieldClass} pr-12`}
                  placeholder={isRegister ? "At least 8 characters" : "Your password"}
                  autoComplete={isRegister ? "new-password" : "current-password"}
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
            {!isRegister && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-foreground">
                  <input type="checkbox" defaultChecked className="size-4 accent-primary" /> Keep me signed in
                </label>
                <span className="font-medium text-ink">Forgot password?</span>
              </div>
            )}
            <Button type="submit" size="lg" className="mt-2 w-full">
              {isRegister ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isRegister ? "Already have an account? " : "New to Furrever? "}
            <Link
              to="/sign-in"
              search={isRegister ? {} : { mode: "register" }}
              className="font-semibold text-ink underline-offset-4 hover:underline"
            >
              {isRegister ? "Sign in" : "Create an account"}
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-hero relative hidden flex-col items-center justify-center overflow-hidden px-12 text-center lg:flex">
        <div className="absolute -bottom-40 -left-40 size-[440px] rounded-full bg-accent/70" aria-hidden />
        <div className="relative">
          <div className="mx-auto h-24 w-3.5 rounded-b bg-primary" />
          <div className="mx-auto -mt-1 grid size-52 origin-[50%_-96px] animate-sway place-items-center rounded-full border-[10px] border-card bg-card shadow-float ring-2 ring-accent">
            <img src={heroDog} alt="" className="size-full rounded-full object-cover object-top" />
          </div>
          <span className="absolute -right-6 top-32 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift">
            <PawMark className="size-6" />
          </span>
        </div>
        <p className="relative mx-auto mt-12 max-w-sm font-serif text-3xl leading-snug text-foreground">
          Fresh water, a soft bed, and a tag that always finds the way home.
        </p>
        <p className="relative mt-3 text-muted-foreground">Because every wag deserves a happy ending.</p>
      </div>
    </div>
  );
}
