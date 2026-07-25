import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import PriceTag from '../components/PriceTag'

const featured = products.filter((p) => p.tag).slice(0, 8)
const onSale = products.filter((p) => p.compareAt).slice(0, 4)

export default function Home() {
  return (
    <div>
      {/* Ticking sale strip */}
      <div className="bg-ink text-paper overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-xs tracking-wide">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {['Free shipping over $75', 'New arrivals every Friday', 'Easy 30-day returns', 'Every price is the real price'].map((t) => (
                <span key={t} className="px-8 flex items-center gap-8">
                  {t}
                  <span className="w-1 h-1 rounded-full bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative paper-texture overflow-hidden border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <PriceTag label="Est. honest" tone="gold" size="sm" rotate={-8} />
              <span className="font-mono text-xs text-ink-soft uppercase tracking-wider">
                No markup games
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.2rem] leading-[0.98] text-ink tracking-tight">
              Good goods,
              <br />
              <span className="text-forest">priced like a tag</span>
              <br />
              you can trust.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
              We Sale cuts out the inflate-then-discount routine. Every price on
              the shelf is the price you pay — sales are real cuts, not theater.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-forest text-paper font-medium px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors"
              >
                Shop everything
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/shop?category=audio"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full border border-ink/20 hover:border-ink transition-colors"
              >
                Browse audio
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="font-display font-bold text-2xl text-forest">12k+</p>
                <p className="text-xs text-ink-soft mt-1">Orders shipped</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-forest">4.8</p>
                <p className="text-xs text-ink-soft mt-1">Average rating</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-forest">30d</p>
                <p className="text-xs text-ink-soft mt-1">Easy returns</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <img
                  src={products[1].image}
                  alt={products[1].name}
                  className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl shadow-ink/10"
                />
                <img
                  src={products[6].image}
                  alt={products[6].name}
                  className="rounded-2xl w-full aspect-square object-cover shadow-xl shadow-ink/10"
                />
              </div>
              <div className="space-y-4">
                <img
                  src={products[5].image}
                  alt={products[5].name}
                  className="rounded-2xl w-full aspect-square object-cover shadow-xl shadow-ink/10"
                />
                <img
                  src={products[3].image}
                  alt={products[3].name}
                  className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl shadow-ink/10"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 sm:-left-10">
              <PriceTag label="$149.00" tone="rust" size="lg" rotate={-10} />
            </div>
          </div>
        </div>
      </section>

      {/* Category rail */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div
          className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1"
          style={{ scrollbarWidth: 'none' }}
        >

          {categories.filter((c) => c.slug !== 'all').map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="shrink-0 px-5 py-2.5 rounded-full border border-ink/15 font-medium text-sm hover:border-forest hover:text-forest transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs text-gold-deep uppercase tracking-wider mb-2">
              On the shelf now
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
              Featured this week
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:gap-2.5 transition-all"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="bg-paper-dim border-y border-ink/10 mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
          {[
            { icon: Truck, title: 'Free shipping over $75', body: 'Flat $6 under that. No surprise fees at checkout, ever.' },
            { icon: RotateCcw, title: '30-day easy returns', body: 'Changed your mind? Send it back, we\u2019ll refund it in full.' },
            { icon: ShieldCheck, title: 'Checked before it ships', body: 'Every order gets a hand inspection before it leaves the shelf.' },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-forest text-paper flex items-center justify-center shrink-0">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="rounded-3xl bg-forest text-paper p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-90">
            <PriceTag label="Up to 30% off" tone="gold" size="lg" rotate={12} />
          </div>
          <div className="max-w-xl">
            <p className="font-mono text-xs text-gold-soft uppercase tracking-wider mb-3">
              Real markdowns, marked once
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Current sale ends when the shelf empties, not before.
            </h2>
            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 bg-gold text-ink font-medium px-6 py-3 rounded-full hover:bg-gold-soft transition-colors"
            >
              Shop the sale <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {onSale.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-paper/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="mt-2 text-sm font-medium truncate">{p.name}</p>
                <p className="font-mono text-sm text-gold-soft">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
