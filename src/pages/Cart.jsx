import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, subtotal, setQty, removeItem } = useCart()

  const shipping = items.length === 0 || subtotal >= 75 ? 0 : 6
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display font-bold text-3xl text-ink mb-3">Your cart is empty</h1>
        <p className="text-ink-soft mb-7">Nothing on the shelf here yet — let's fix that.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-forest text-paper font-medium px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors"
        >
          Browse the shop <ArrowRight size={17} />
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-10">Your cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 divide-y divide-ink/10">
          {items.map((item) => (
            <div key={item.lineId} className="flex gap-4 py-6 first:pt-0">
              <Link to={`/product/${item.id}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover bg-paper-dim"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="font-medium text-ink hover:text-forest transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-ink-soft mt-0.5">{item.color}</p>
                  </div>
                  <p className="font-mono font-semibold text-ink shrink-0">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-ink/15 rounded-full">
                    <button
                      onClick={() => setQty(item.lineId, item.qty - 1)}
                      className="p-2.5 hover:text-forest"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center font-mono text-sm">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.lineId, item.qty + 1)}
                      className="p-2.5 hover:text-forest"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.lineId)}
                    className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-rust transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={15} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-paper-dim rounded-2xl p-6 sm:p-7 h-fit sticky top-28">
          <h2 className="font-display font-bold text-xl mb-5">Order summary</h2>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span className="font-mono text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span className="font-mono text-ink">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            {subtotal < 75 && (
              <p className="text-xs text-gold-deep bg-gold/10 rounded-lg px-3 py-2 mt-2">
                Add ${(75 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
          </div>
          <div className="border-t border-ink/10 mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span className="font-mono">${total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 w-full flex items-center justify-center gap-2 bg-forest text-paper font-medium px-6 py-3.5 rounded-full hover:bg-forest-light transition-colors"
          >
            Checkout <ArrowRight size={17} />
          </Link>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-ink-soft hover:text-forest transition-colors"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
