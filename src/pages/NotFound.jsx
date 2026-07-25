import { Link } from 'react-router-dom'
import PriceTag from '../components/PriceTag'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-28 text-center">
      <PriceTag label="Not found" tone="rust" rotate={-8} className="mx-auto" />
      <h1 className="font-display font-black text-4xl text-ink mt-6">
        This shelf is empty
      </h1>
      <p className="text-ink-soft mt-3">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-forest text-paper font-medium px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
