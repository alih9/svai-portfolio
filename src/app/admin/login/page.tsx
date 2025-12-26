
'use client';

import { useActionState } from 'react';
import { login } from './actions';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-body bg-gray-50/50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold font-heading text-center mb-6 text-dark">Admin Login</h1>
        
        {state?.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                {state.error}
            </div>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isPending ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}