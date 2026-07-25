import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=audio', label: 'Audio' },
  { to: '/shop?category=home', label: 'Home' },
  { to: '/shop?category=outdoors', label: 'Outdoors' },
]

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(query)}`)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="stitch-line" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-forest">
              We Sale
            </span>
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-gold mt-2" aria-hidden="true" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-2 transition-colors hover:text-forest ${
                    isActive ? 'text-forest' : 'text-ink-soft'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
              <Search size={16} className="absolute left-3 text-ink-soft" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the shop"
                aria-label="Search products"
                className="w-52 pl-9 pr-3 py-2 rounded-full border border-ink/15 bg-paper-dim text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </form>

            <Link
              to="/cart"
              aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
              className="relative p-2 rounded-full hover:bg-paper-dim transition-colors"
            >
              <ShoppingBag size={22} strokeWidth={1.75} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-rust text-paper text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 rounded-full hover:bg-paper-dim transition-colors"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-4">
            <form onSubmit={handleSearch} className="flex items-center relative">
              <Search size={16} className="absolute left-3 text-ink-soft" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the shop"
                aria-label="Search products"
                className="w-full pl-9 pr-3 py-2.5 rounded-full border border-ink/15 bg-paper-dim text-sm focus:outline-none focus:border-forest"
              />
            </form>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-medium text-ink-soft hover:text-forest py-1"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
