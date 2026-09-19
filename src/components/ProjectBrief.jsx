import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Loader2, AlertCircle, ChevronDown } from 'lucide-react'
import { inquiryForm, personal } from '../data/content'
import { FadeUp } from './Motion'

const empty = {
  name: '',
  email: '',
  company: '',
  website: '',
  types: [],
  budget: '',
  timeline: '',
  details: '',
  // Honeypot: bots fill it, humans never see it.
  _gotcha: '',
}

// Filled fields rather than bare underlines. They hold their shape against
// the card and make the form read as something you fill in, not decoration.
const fieldClass =
  'w-full bg-sand/40 border border-ink/10 rounded-xl px-4 py-3.5 font-sans text-[15px] ' +
  'placeholder:text-ink/35 focus:bg-bone focus:border-ink/40 focus:outline-none ' +
  'focus:ring-4 focus:ring-ink/5 transition-all'

const labelClass = 'block font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-2'

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {required && <span className="text-accent ml-0.5">*</span>}
    </label>
  )
}

function FieldError({ children }) {
  if (!children) return null
  return (
    <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-accent">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {children}
    </p>
  )
}

// Native select, restyled to match the text inputs.
function Select({ id, label, value, onChange, placeholder, options }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`${fieldClass} appearance-none pr-11 cursor-pointer ${
            value ? 'text-ink' : 'text-ink/35'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o} className="text-ink">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  )
}

function toEmail(form) {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    form.company && `Business: ${form.company}`,
    form.website && `Website: ${form.website}`,
    form.types.length && `Looking for: ${form.types.join(', ')}`,
    form.budget && `Budget: ${form.budget}`,
    form.timeline && `Timeline: ${form.timeline}`,
    '',
    'About the project:',
    form.details,
  ].filter(Boolean)

  return {
    subject: `Project inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`,
    body: lines.join('\n'),
  }
}

const steps = [
  'You send the brief. Five minutes, tops.',
  'I reply within 24 hours with questions or a rough plan.',
  'A short call if it fits, then scope and timeline.',
]

export default function ProjectBrief() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const toggleType = (type) =>
    setForm((f) => ({
      ...f,
      types: f.types.includes(type)
        ? f.types.filter((t) => t !== type)
        : [...f.types, type],
    }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Your name helps.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()))
      next.email = 'A valid email so I can reply.'
    if (form.details.trim().length < 20) next.details = 'A couple of sentences is plenty.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form._gotcha) return // honeypot tripped
    if (!validate()) return

    const { subject, body } = toEmail(form)

    if (!inquiryForm.endpoint) {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(inquiryForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // Web3Forms authenticates on this; Formspree ignores it.
          ...(inquiryForm.accessKey ? { access_key: inquiryForm.accessKey } : {}),
          name: form.name,
          email: form.email,
          company: form.company,
          website: form.website,
          projectTypes: form.types.join(', '),
          budget: form.budget,
          timeline: form.timeline,
          details: form.details,
          _subject: subject,
          // Hitting reply on the notification goes straight to the client.
          _replyto: form.email,
          // Always empty for real people (the guard above bails otherwise).
          // Passing it through lets Formspree apply its own honeypot rule too.
          _gotcha: form._gotcha,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="start" className="relative py-24 md:py-32 px-6 md:px-10 bg-sand">
      {/* Constrained so fields never stretch to unreadable widths. */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ---------------- Left rail: pitch + process ---------------- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <FadeUp>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-ink/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    05 / Start a Project
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                  Tell me what
                  <br />
                  you&apos;re <span className="italic text-accent">building.</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="mt-5 text-[15px] text-muted leading-relaxed">
                  A few details about your business and what you need. I read every brief
                  and reply within 24 hours. No obligation, no sales pitch.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                {/* Step rail with a connecting line down the numbers. */}
                <ol className="mt-10 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-ink/10" />
                  {steps.map((step, i) => (
                    <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                      <span className="relative z-10 w-[23px] h-[23px] shrink-0 rounded-full bg-bone border border-ink/15 flex items-center justify-center font-mono text-[9px] text-ink/60">
                        {i + 1}
                      </span>
                      <span className="text-[14px] text-muted leading-relaxed pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="mt-8 pt-6 border-t border-ink/10">
                  <p className="text-[13px] text-muted leading-relaxed">
                    Prefer email?{' '}
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-ink underline-grow break-all"
                    >
                      {personal.email}
                    </a>
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* ---------------- Right: the form card ---------------- */}
          <FadeUp delay={0.15} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-bone border border-ink/10 rounded-3xl p-10 md:p-16 text-center shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 260 }}
                    className="w-14 h-14 rounded-full bg-accent text-bone flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-display text-4xl mb-3">Brief received.</h3>
                  <p className="text-muted leading-relaxed max-w-sm mx-auto text-[15px]">
                    {inquiryForm.endpoint
                      ? "Thanks for the detail. I'll get back to you within 24 hours."
                      : 'Your email client should be open with everything filled in. Hit send and I’ll take it from there.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] underline-grow"
                  >
                    Send another brief
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-bone border border-ink/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm"
                >
                  {/* Block 1: who's asking */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="pb-name" required>
                        Your name
                      </Label>
                      <input
                        id="pb-name"
                        type="text"
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Jane Doe"
                        className={fieldClass}
                      />
                      <FieldError>{errors.name}</FieldError>
                    </div>
                    <div>
                      <Label htmlFor="pb-email" required>
                        Email
                      </Label>
                      <input
                        id="pb-email"
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="jane@company.com"
                        className={fieldClass}
                      />
                      <FieldError>{errors.email}</FieldError>
                    </div>
                    <div>
                      <Label htmlFor="pb-company">Business / company</Label>
                      <input
                        id="pb-company"
                        type="text"
                        value={form.company}
                        onChange={set('company')}
                        placeholder="Acme Co."
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <Label htmlFor="pb-website">Current website</Label>
                      <input
                        id="pb-website"
                        type="text"
                        value={form.website}
                        onChange={set('website')}
                        placeholder="acme.com (or none yet)"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="h-px bg-ink/[0.07] my-8" />

                  {/* Block 2: what they need. Even grid so chips never orphan. */}
                  <fieldset>
                    <legend className={labelClass}>
                      What do you need?{' '}
                      <span className="normal-case tracking-normal text-ink/30">
                        (pick any)
                      </span>
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {inquiryForm.projectTypes.map((type) => {
                        const active = form.types.includes(type)
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleType(type)}
                            aria-pressed={active}
                            className={`relative px-3 py-3 rounded-xl border text-center font-mono text-[10px] uppercase tracking-[0.1em] leading-tight transition-all ${
                              active
                                ? 'bg-ink text-bone border-ink'
                                : 'bg-sand/30 border-ink/10 text-muted hover:border-ink/35 hover:text-ink'
                            }`}
                          >
                            {active && (
                              <Check className="w-3 h-3 absolute top-1.5 right-1.5 text-accent" />
                            )}
                            {type}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                    <Select
                      id="pb-budget"
                      label="Budget range"
                      value={form.budget}
                      onChange={set('budget')}
                      placeholder="Select a range"
                      options={inquiryForm.budgets}
                    />
                    <Select
                      id="pb-timeline"
                      label="Timeline"
                      value={form.timeline}
                      onChange={set('timeline')}
                      placeholder="When do you want it live?"
                      options={inquiryForm.timelines}
                    />
                  </div>

                  <div className="h-px bg-ink/[0.07] my-8" />

                  {/* Block 3: the actual brief */}
                  <div>
                    <Label htmlFor="pb-details" required>
                      About the project
                    </Label>
                    <textarea
                      id="pb-details"
                      rows={5}
                      value={form.details}
                      onChange={set('details')}
                      placeholder="What does your business do, what problem are you solving, and what should this thing actually do?"
                      className={`${fieldClass} resize-none leading-relaxed`}
                    />
                    <FieldError>{errors.details}</FieldError>
                  </div>

                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="pb-gotcha">Do not fill this in</label>
                    <input
                      id="pb-gotcha"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form._gotcha}
                      onChange={set('_gotcha')}
                    />
                  </div>

                  <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40 order-2 sm:order-1">
                      <span className="text-accent">*</span> Required · replies within 24h
                    </p>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group order-1 sm:order-2 inline-flex items-center justify-center gap-3 bg-ink text-bone px-7 py-4 rounded-full hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-wait"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                        {status === 'sending' ? 'Sending' : 'Send the brief'}
                      </span>
                      {status === 'sending' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      )}
                    </motion.button>
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-2 bg-accent/10 text-accent rounded-xl px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em]"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something broke. Email me instead.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
