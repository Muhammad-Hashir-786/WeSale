// The site's signature element: a physical price tag, string and all.
// Used for sale badges, the cart count, and section eyebrows.
export default function PriceTag({
  label,
  size = 'md',
  tone = 'gold',
  rotate = -6,
  className = '',
}) {
  const sizes = {
    sm: { w: 64, h: 34, font: 10, hole: 5 },
    md: { w: 88, h: 44, font: 12, hole: 6 },
    lg: { w: 120, h: 58, font: 15, hole: 7 },
  }
  const tones = {
    gold: { fill: 'var(--color-gold)', text: 'var(--color-ink)' },
    forest: { fill: 'var(--color-forest)', text: 'var(--color-paper)' },
    rust: { fill: 'var(--color-rust)', text: 'var(--color-paper)' },
  }
  const s = sizes[size]
  const t = tones[tone]

  return (
    <div
      className={`tag-swing inline-flex items-center ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`} aria-hidden="true">
        <path
          d={`M ${s.h / 2} 2
              L ${s.w - 4} 2
              Q ${s.w - 2} 2 ${s.w - 2} 4
              L ${s.w - 2} ${s.h - 4}
              Q ${s.w - 2} ${s.h - 2} ${s.w - 4} ${s.h - 2}
              L ${s.h / 2} ${s.h - 2}
              L 2 ${s.h / 2}
              Z`}
          fill={t.fill}
          stroke="var(--color-ink)"
          strokeWidth="1.2"
        />
        <circle
          cx={s.h / 2}
          cy={s.h / 2}
          r={s.hole}
          fill="var(--color-paper)"
          stroke="var(--color-ink)"
          strokeWidth="1.2"
        />
        <text
          x={(s.w + s.h / 2) / 2 + 4}
          y={s.h / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="600"
          fontSize={s.font}
          fill={t.text}
        >
          {label}
        </text>
      </svg>
    </div>
  )
}
