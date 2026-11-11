"use client";

import { useActionState } from "react";
import { loginAction, type FormState } from "../actions";

const initialState: FormState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6 font-body">
      <div className="w-full max-w-sm">
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide text-zinc-100">
          Admin Login
        </h1>

        <form action={formAction} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/30"
            />
          </div>

          {state.error && (
            <p className="text-sm text-red-400">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-100 backdrop-blur transition hover:bg-white/15 hover:border-white/30 disabled:opacity-50"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
