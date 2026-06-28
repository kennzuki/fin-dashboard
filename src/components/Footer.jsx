import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-8 py-6 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Finance Dashboard © {new Date().getFullYear()}</p>
        <p className="text-slate-500">Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
