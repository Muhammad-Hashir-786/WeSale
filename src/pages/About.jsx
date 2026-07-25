import PriceTag from '../components/PriceTag'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <PriceTag label="Since day one" tone="forest" rotate={-6} />
      <h1 className="font-display font-black text-4xl sm:text-5xl text-ink mt-6 leading-tight">
        We got tired of prices that
        <br className="hidden sm:block" /> were never really the price.
      </h1>
      <p className="text-lg text-ink-soft mt-6 leading-relaxed max-w-2xl">
        We Sale started as a rejection of the inflate-it-then-discount-it
        routine. Every tag on our shelf shows the number you'll actually pay.
        When something goes on sale, it's because we're moving it — not
        because the "original" price was invented for the markdown.
      </p>
      <div className="grid sm:grid-cols-3 gap-8 mt-16">
        {[
          { title: 'Honest pricing', body: 'One price, shown plainly. No countdown timers manufacturing urgency.' },
          { title: 'Built to last', body: 'We test what we sell. If it breaks fast, it doesn\u2019t make the shelf.' },
          { title: 'Real people, real help', body: 'A small team that answers its own support inbox — no scripts.' },
        ].map((v) => (
          <div key={v.title}>
            <h3 className="font-display font-bold text-xl text-forest mb-2">{v.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
