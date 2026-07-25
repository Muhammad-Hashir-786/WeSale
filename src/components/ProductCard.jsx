import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import PriceTag from './PriceTag'

export default function ProductCard({ product }) {
  const onSale = product.compareAt && product.compareAt > product.price

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-dim">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <PriceTag
              label={product.tag}
              tone={product.tag === 'Sale' ? 'rust' : 'forest'}
              size="sm"
            />
          </div>
        )}
      </div>

      <div className="mt-3.5 space-y-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-ink leading-snug group-hover:text-forest transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-xs text-ink-soft">
          <Star size={12} className="fill-gold text-gold" />
          <span className="font-mono">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 pt-0.5">
          <span className="font-mono font-semibold text-ink">${product.price.toFixed(2)}</span>
          {onSale && (
            <span className="font-mono text-sm text-ink-soft line-through">
              ${product.compareAt.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
