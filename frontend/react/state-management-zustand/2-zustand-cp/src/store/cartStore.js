import create from "zustand"
//beginanswer
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
//endanswer
 
const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    //beginanswer
    (...args) => {
      set(...args)
      const moreThanStockItem = get().items.filter(
        (item) => item.quantity > item.stock,
      )
      const lessThanZeroItem = get().items.filter((item) => item.quantity < 1)
      if (moreThanStockItem.length > 0) {
        return set((state) => ({
          items: state.items.map((item) =>
            item.id === moreThanStockItem[0].id
              ? { ...item, quantity: item.stock }
              : item,
          ),
        }))
      }
      if (lessThanZeroItem.length > 0) {
        return set((state) => ({
          items: state.items.map((item) =>
            item.id === lessThanZeroItem[0].id
              ? { ...item, quantity: 1 }
              : item,
          ),
        }))
      }
    }
    //endanswer
    ,
    get,
    api,
  )
 
const useCartStore = 
//beginanswer
create(persist(
  immer(cartQuantityMiddleware((set, get) => ({
    items: [],
    addItem: (item) => {
      const itemExists = get().items.find((i) => i.id === item.id)
      set((state) => ({
        items: [
          ...state.items.filter((i) => i.id !== item.id),
          { ...item, quantity: itemExists ? itemExists.quantity + 1 : 1 },
        ],
      }))
    },
    removeItem: (itemId) => {
      set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
      }))
    },
    changeQuantity: (itemId, quantity) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        ),
      }))
    },
  }))),{name:'cart'})
)
//endanswer
 
 
 
export default useCartStore