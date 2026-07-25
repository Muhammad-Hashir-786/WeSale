import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PriceTag from '../components/PriceTag'

export default function OrderConfirmed() {
  const orderNumber = `WS-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <div className="flex justify-center mb-6">
        <PriceTag label="Sold!" tone="gold" size="lg" rotate={-8} />
      </div>
      <CheckCircle2 className="mx-auto text-forest mb-5" size={40} strokeWidth={1.5} />
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-3">
        Order placed
      </h1>
      <p className="text-ink-soft mb-1">
        Confirmation <span className="font-mono text-ink">{orderNumber}</span>
      </p>
      <p className="text-ink-soft max-w-md mx-auto mt-4 leading-relaxed">
        This is a frontend demo, so no real order was placed and no email is on
        its way. Wire this screen up to your backend once orders are live.
      </p>
      <Link
        to="/shop"
        className="mt-9 inline-flex items-center gap-2 bg-forest text-paper font-medium px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors"
      >
        Continue shopping
      </Link>
    </div>
  )
}
