import { useState } from 'react'
import type { FormEvent } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

// Pull configuration from Vite env vars
const FORM_ID = (import.meta as any).env?.VITE_LOOPS_FORM_ID || ''
const LOOPS_DOMAIN = (import.meta as any).env?.VITE_LOOPS_DOMAIN || 'app.loops.so'
// Associate signups with a Loops user group
const USER_GROUP = (import.meta as any).env?.VITE_LOOPS_USER_GROUP || ''

type FormState = 'INIT' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('INIT')
  const [errorMessage, setErrorMessage] = useState('')

  const isValidEmail = (value: string) => /.+@.+/.test(value)

  const hasRecentSubmission = () => {
    try {
      const now = Date.now()
      const prev = Number(localStorage.getItem('loops-form-timestamp') || 0)
      if (prev && prev + 60 * 1000 > now) {
        setFormState('ERROR')
        setErrorMessage('Too many signups, please try again shortly')
        return true
      }
      localStorage.setItem('loops-form-timestamp', String(now))
    } catch (_) {
      // ignore storage errors
    }
    return false
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formState !== 'INIT') return
    if (!isValidEmail(email)) {
      setFormState('ERROR')
      setErrorMessage('Please enter a valid email')
      return
    }
    if (hasRecentSubmission()) return
    setFormState('SUBMITTING')

    const body = new URLSearchParams()
    body.set('userGroup', USER_GROUP)
    body.set('email', email)

    try {
      const res = await fetch(`https://${LOOPS_DOMAIN}/api/newsletter-form/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (res.ok) {
        setEmail('')
        setErrorMessage('')
        setFormState('SUCCESS')
        return
      }

      let message = res.statusText
      try {
        const data = await res.json()
        if (data?.message) message = data.message
      } catch (_) {}
      setFormState('ERROR')
      setErrorMessage(message || 'Whoops! Something went awry 🙁, please try again')
      try {
        localStorage.setItem('loops-form-timestamp', '')
      } catch (_) {}
    } catch (err: any) {
      setFormState('ERROR')
      const msg = err?.message === 'Failed to fetch'
        ? 'Too many signups, please try again shortly'
        : err?.message || 'Network error, please try again'
      setErrorMessage(msg)
      try {
        localStorage.setItem('loops-form-timestamp', '')
      } catch (_) {}
    }
  }

  const submitting = formState === 'SUBMITTING'

  return (
    <section id="signup">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join the{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Waitlist
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Be the first to know when we launch.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            placeholder="isaac.asimov@foundation.ai"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
          <Button disabled={submitting}>
            {submitting ? 'Please wait...' : 'Let me in!'}
          </Button>
        </form>

        {formState === 'SUCCESS' && (
          <p className="text-sm text-center text-emerald-600 mt-3" aria-live="polite">
            Thanks! We\'ll be in touch!
          </p>
        )}
        {formState === 'ERROR' && (
          <p className="text-sm text-center text-red-600 mt-3" aria-live="assertive">
            {errorMessage || 'Oops! Something went wrong, please try again'}
          </p>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  )
}
