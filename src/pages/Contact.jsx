import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // No backend wired up — hook this up to your form endpoint / email service.
    setSent(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <h1 className="font-display font-black text-4xl sm:text-5xl text-ink">Get in touch</h1>
      <p className="text-ink-soft mt-4 max-w-lg leading-relaxed">
        Questions about an order, a product, or anything else — we read every
        message ourselves.
      </p>

      <div className="grid lg:grid-cols-5 gap-12 mt-12">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Mail, label: 'hello@wesale.example' },
            { icon: Phone, label: '+1 (555) 019-2044' },
            { icon: MapPin, label: '118 Harbor Row, Portland, OR' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-ink-soft">
              <div className="w-10 h-10 rounded-full bg-forest text-paper flex items-center justify-center shrink-0">
                <Icon size={17} />
              </div>
              {label}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
          {sent ? (
            <div className="bg-forest/10 text-forest rounded-xl p-6 text-center">
              <p className="font-medium">Message captured locally.</p>
              <p className="text-sm mt-1 text-ink-soft">
                Connect this form to your backend to actually send it.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Name"
                  className="px-4 py-3 rounded-xl border border-ink/15 bg-paper text-sm focus:outline-none focus:border-forest"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-xl border border-ink/15 bg-paper text-sm focus:outline-none focus:border-forest"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-paper text-sm focus:outline-none focus:border-forest resize-none"
              />
              <button
                type="submit"
                className="bg-forest text-paper font-medium px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors"
              >
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
