import { Link } from 'react-router-dom'
import { Camera, MessageCircle, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest text-paper mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <span className="font-display font-black text-2xl">We Sale</span>
            <p className="mt-3 text-sm text-paper/70 max-w-xs leading-relaxed">
              Well-made goods for everyday use, priced honestly and shipped fast.
              Every tag tells you exactly what you're paying, and why.
            </p>
            <div className="flex gap-3 mt-5">
              {[Camera, MessageCircle, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold-soft mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link to="/shop" className="hover:text-paper">All products</Link></li>
              <li><Link to="/shop?category=audio" className="hover:text-paper">Audio</Link></li>
              <li><Link to="/shop?category=home" className="hover:text-paper">Home & Living</Link></li>
              <li><Link to="/shop?category=outdoors" className="hover:text-paper">Outdoors</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold-soft mb-4">Help</h3>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link to="/contact" className="hover:text-paper">Contact us</Link></li>
              <li><a href="#" className="hover:text-paper">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-paper">Size guide</a></li>
              <li><a href="#" className="hover:text-paper">Track an order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold-soft mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link to="/about" className="hover:text-paper">About</Link></li>
              <li><a href="#" className="hover:text-paper">Sustainability</a></li>
              <li><a href="#" className="hover:text-paper">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/55">
          <p>© {new Date().getFullYear()} We Sale. All rights reserved.</p>
          <p>Frontend demo — no orders are actually processed.</p>
        </div>
      </div>
    </footer>
  )
}
