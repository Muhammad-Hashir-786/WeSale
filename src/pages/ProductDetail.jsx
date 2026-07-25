import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, Truck, RotateCcw, Check } from 'lucide-react'
import { getProductById, getRelated } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import PriceTag from '../components/PriceTag'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [color, setColor] = useState(product?.colors?.[0])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-3xl mb-3">We couldn't find that item</h1>
        <p className="text-ink-soft mb-6">It may have sold out or been moved.</p>
        <Link to="/shop" className="text-forest font-medium hover:underline">
          Back to the shop
        </Link>
      </div>
    )
  }

  const onSale = product.compareAt && product.compareAt > product.price
  const related = getRelated(product)

  function handleAdd() {
    addItem(product, color, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  function handleBuyNow() {
    addItem(product, color, qty)
    navigate('/cart')
  }

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <nav className="text-sm text-ink-soft mb-8 flex gap-2 flex-wrap">
        <Link to="/" className="hover:text-forest">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-forest">Shop</Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-paper-dim aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.tag && (
            <div className="absolute top-4 left-4">
              <PriceTag
                label={product.tag}
                tone={product.tag === 'Sale' ? 'rust' : 'forest'}
              />
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-ink/20'}
                />
              ))}
            </div>
            <span className="text-ink-soft">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-5">
            <span className="font-mono font-bold text-3xl text-forest">
              ${product.price.toFixed(2)}
            </span>
            {onSale && (
              <>
                <span className="font-mono text-lg text-ink-soft line-through">
                  ${product.compareAt.toFixed(2)}
                </span>
                <span className="text-xs font-mono font-semibold bg-rust/10 text-rust px-2 py-1 rounded-full">
                  Save ${(product.compareAt - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-ink-soft leading-relaxed">{product.description}</p>

          {product.colors?.length > 0 && (
            <div className="mt-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-3">
                Color: <span className="text-ink">{color}</span>
              </h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      color === c
                        ? 'border-forest bg-forest text-paper'
                        : 'border-ink/15 hover:border-ink/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-ink/15 rounded-full">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-3 hover:text-forest"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-8 text-center font-mono">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-3 hover:text-forest"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-forest text-paper font-medium px-6 py-3.5 rounded-full hover:bg-forest-light transition-colors"
            >
              {added ? (
                <>
                  <Check size={18} /> Added to cart
                </>
              ) : (
                'Add to cart'
              )}
            </button>
          </div>

          <button
            onClick={handleBuyNow}
            className="mt-3 w-full text-center font-medium px-6 py-3.5 rounded-full border border-ink/20 hover:border-ink transition-colors"
          >
            Buy it now
          </button>

          <div className="mt-8 pt-6 border-t border-ink/10 space-y-3">
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <Truck size={17} className="text-forest shrink-0" />
              Free shipping on orders over $75
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <RotateCcw size={17} className="text-forest shrink-0" />
              30-day returns, no questions asked
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
