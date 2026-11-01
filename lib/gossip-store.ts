'use client'

import { useSyncExternalStore } from 'react'

export type Gossip = {
  id: string
  text: string
  createdAt: number
}

const STORAGE_KEY = 'miss-gossip:tips'
const EMPTY: Gossip[] = []
const listeners = new Set<() => void>()

let cachedRaw: string | null = null
let cachedValue: Gossip[] = EMPTY

function read(): Gossip[] {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === cachedRaw) return cachedValue
  cachedRaw = raw
  try {
    const parsed = raw ? (JSON.parse(raw) as Gossip[]) : EMPTY
    cachedValue = Array.isArray(parsed) ? parsed : EMPTY
  } catch {
    cachedValue = EMPTY
  }
  return cachedValue
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function addGossip(text: string) {
  const entry: Gossip = {
    id: crypto.randomUUID(),
    text: text.trim(),
    createdAt: Date.now(),
  }
  const next = [entry, ...read()]
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  listeners.forEach((l) => l())
}

export function useGossips() {
  return useSyncExternalStore(subscribe, read, () => EMPTY)
}
