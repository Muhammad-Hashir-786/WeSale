import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const category = searchParams.get('category') || 'all'
  const query = searchParams.get('q') || ''
  const sort = searchParams.get('sort') || 'featured'
  const saleOnly = searchParams.get('sale') === '1'

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      )
    }
    if (saleOnly) list = list.filter((p) => p.compareAt)

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [category, query, sort, saleOnly])

  const activeCategoryName =
    categories.find((c) => c.slug === category)?.name || 'Everything'

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <div className="mb-8">
        <p className="font-mono text-xs text-gold-deep uppercase tracking-wider mb-2">
          {filtered.length} item{filtered.length === 1 ? '' : 's'}
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          {query ? `Results for "${query}"` : activeCategoryName}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters sidebar */}
        <aside className="md:w-56 shrink-0">
          <button
            className="md:hidden flex items-center gap-2 mb-4 font-medium text-sm border border-ink/15 rounded-full px-4 py-2"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>

          <div className={`${filtersOpen ? 'block' : 'hidden'} md:block space-y-8`}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-3">
                Category
              </h3>
              <ul className="space-y-1.5">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => updateParam('category', cat.slug)}
                      className={`text-sm w-full text-left py-1 transition-colors ${
                        category === cat.slug
                          ? 'text-forest font-semibold'
                          : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-3">
                Availability
              </h3>
              <label className="flex items-center gap-2.5 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={saleOnly}
                  onChange={(e) => updateParam('sale', e.target.checked ? '1' : '')}
                  className="w-4 h-4 accent-forest"
                />
                On sale only
              </label>
            </div>

            {(query || category !== 'all' || saleOnly) && (
              <button
                onClick={() => setSearchParams({})}
                className="flex items-center gap-1.5 text-sm text-rust hover:underline"
              >
                <X size={14} /> Clear filters
              </button>
            )}
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="flex justify-end mb-6">
            <select
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
              aria-label="Sort products"
              className="text-sm border border-ink/15 rounded-full px-4 py-2 bg-paper focus:outline-none focus:border-forest"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-ink mb-2">Nothing on this shelf yet</p>
              <p className="text-ink-soft text-sm">Try a different category or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
