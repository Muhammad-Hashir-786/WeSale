import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, color, qty } = action.payload
      const lineId = `${product.id}__${color}`
      const existing = state.items.find((i) => i.lineId === lineId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.lineId === lineId ? { ...i, qty: i.qty + qty } : i
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            lineId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color,
            qty,
          },
        ],
      }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.lineId !== action.payload) }
    case 'SET_QTY':
      return {
        items: state.items.map((i) =>
          i.lineId === action.payload.lineId
            ? { ...i, qty: Math.max(1, action.payload.qty) }
            : i
        ),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return {
      items: state.items,
      count,
      subtotal,
      addItem: (product, color, qty = 1) =>
        dispatch({ type: 'ADD', payload: { product, color, qty } }),
      removeItem: (lineId) => dispatch({ type: 'REMOVE', payload: lineId }),
      setQty: (lineId, qty) => dispatch({ type: 'SET_QTY', payload: { lineId, qty } }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
