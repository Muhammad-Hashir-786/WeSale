import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

const emptyForm = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
}

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 6
  const total = subtotal + shipping

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e = {}
    if (!form.email.includes('@')) e.email = 'Enter a valid email'
    if (!form.firstName) e.firstName = 'Required'
    if (!form.lastName) e.lastName = 'Required'
    if (!form.address) e.address = 'Required'
    if (!form.city) e.city = 'Required'
    if (!form.state) e.state = 'Required'
    if (!/^\d{4,6}$/.test(form.zip)) e.zip = 'Enter a valid postal code'
    if (!/^\d{13,19}$/.test(form.cardNumber.replace(/\s/g, ''))) e.cardNumber = 'Enter a valid card number'
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = 'MM/YY'
    if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = 'Enter a valid CVC'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // NOTE: This is a frontend-only demo. There is no backend or payment
    // processor wired up here — this is where you would POST the order
    // to your server / payment provider (e.g. Stripe) instead.
    setSubmitting(true)
    setTimeout(() => {
      clear()
      navigate('/order-confirmed')
    }, 900)
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display font-bold text-3xl text-ink mb-3">Nothing to check out</h1>
        <p className="text-ink-soft mb-7">Add something to your cart first.</p>
        <Link to="/shop" className="text-forest font-medium hover:underline">
          Back to the shop
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Link to="/cart" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-forest mb-6">
        <ArrowLeft size={15} /> Back to cart
      </Link>

      <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-2">Checkout</h1>
      <p className="text-sm text-ink-soft mb-10 flex items-center gap-1.5">
        <Lock size={13} /> Demo checkout — this form does not submit to a real payment processor.
      </p>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-12" noValidate>
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="font-display font-bold text-xl mb-4">Contact</h2>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={inputClass(errors.email)}
                placeholder="you@example.com"
              />
            </Field>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl mb-4">Shipping address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" error={errors.firstName}>
                <input
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  className={inputClass(errors.firstName)}
                />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <input
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  className={inputClass(errors.lastName)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Address" error={errors.address}>
                  <input
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className={inputClass(errors.address)}
                    placeholder="Street and number"
                  />
                </Field>
              </div>
              <Field label="City" error={errors.city}>
                <input
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  className={inputClass(errors.city)}
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="State" error={errors.state}>
                  <input
                    value={form.state}
                    onChange={(e) => update('state', e.target.value)}
                    className={inputClass(errors.state)}
                  />
                </Field>
                <Field label="Postal code" error={errors.zip}>
                  <input
                    value={form.zip}
                    onChange={(e) => update('zip', e.target.value)}
                    className={inputClass(errors.zip)}
                    inputMode="numeric"
                  />
                </Field>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl mb-4">Payment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Field label="Card number" error={errors.cardNumber}>
                  <input
                    value={form.cardNumber}
                    onChange={(e) => update('cardNumber', e.target.value)}
                    className={inputClass(errors.cardNumber)}
                    placeholder="1234 5678 9012 3456"
                    inputMode="numeric"
                  />
                </Field>
              </div>
              <Field label="Expiry (MM/YY)" error={errors.expiry}>
                <input
                  value={form.expiry}
                  onChange={(e) => update('expiry', e.target.value)}
                  className={inputClass(errors.expiry)}
                  placeholder="08/29"
                />
              </Field>
              <Field label="CVC" error={errors.cvc}>
                <input
                  value={form.cvc}
                  onChange={(e) => update('cvc', e.target.value)}
                  className={inputClass(errors.cvc)}
                  inputMode="numeric"
                />
              </Field>
            </div>
          </section>
        </div>

        <aside className="bg-paper-dim rounded-2xl p-6 sm:p-7 h-fit sticky top-28">
          <h2 className="font-display font-bold text-xl mb-5">Order summary</h2>
          <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {items.map((item) => (
              <li key={item.lineId} className="flex gap-3 items-center text-sm">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate font-medium">{item.name}</p>
                  <p className="text-ink-soft">{item.color} · Qty {item.qty}</p>
                </div>
                <span className="font-mono shrink-0">${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-ink/10 mt-5 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span className="font-mono text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span className="font-mono text-ink">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-2 border-t border-ink/10">
              <span>Total</span>
              <span className="font-mono">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-forest text-paper font-medium px-6 py-3.5 rounded-full hover:bg-forest-light transition-colors disabled:opacity-60"
          >
            {submitting ? 'Placing order…' : `Place order · $${total.toFixed(2)}`}
          </button>
        </aside>
      </form>
    </div>
  )
}

function inputClass(error) {
  return `w-full px-4 py-3 rounded-xl border bg-paper text-sm focus:outline-none transition-colors ${
    error ? 'border-rust' : 'border-ink/15 focus:border-forest'
  }`
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-rust mt-1">{error}</span>}
    </label>
  )
}
