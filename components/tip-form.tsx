'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { addGossip } from '@/lib/gossip-store'

const MAX_LENGTH = 1000

export function TipForm() {
  const router = useRouter()
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)
  const dialogRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!sent) return
    dialogRef.current?.focus()
    const t = setTimeout(() => router.push('/'), 2200)
    return () => clearTimeout(t)
  }, [sent, router])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    addGossip(text.slice(0, MAX_LENGTH))
    setText('')
    setSent(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl border border-border bg-card p-6 md:p-8">
        <label htmlFor="tip" className="mb-3 block text-xs uppercase tracking-[0.3em] text-gold">
          Your tip
        </label>
        <textarea
          id="tip"
          required
          rows={10}
          maxLength={MAX_LENGTH}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Замечены: …"
          className="w-full resize-y border border-white/60 bg-black p-4 text-lg leading-relaxed text-white placeholder:text-muted-foreground focus:border-pink focus:outline-none"
        />
        <div className="mt-2 text-right text-xs text-muted-foreground">
          {text.length}/{MAX_LENGTH}
        </div>
        <button
          type="submit"
          disabled={!text.trim()}
          className="mt-6 w-full bg-pink px-6 py-4 font-serif text-xl font-bold uppercase tracking-widest text-white transition-colors hover:bg-pink/85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Отправить Сплетнице <span aria-hidden="true">💋</span>
        </button>
      </form>

      {sent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sent-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in"
        >
          <div className="glitter-frame w-full max-w-md p-[3px] animate-in zoom-in-95">
            <div className="bg-background p-8 text-center">
              <p className="text-5xl" aria-hidden="true">
                💋
              </p>
              <h2 id="sent-title" className="mt-4 font-serif text-3xl font-black text-white">
                Сплетня улетела!
              </h2>
              <p className="mt-2 font-serif text-4xl font-black tracking-widest text-pink">XOXO</p>
              <button
                ref={dialogRef}
                type="button"
                onClick={() => router.push('/')}
                className="mt-6 border border-gold px-6 py-2 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-black"
              >
                To the feed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
