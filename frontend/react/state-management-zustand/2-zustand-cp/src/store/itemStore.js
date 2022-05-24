import create from "zustand"
//beginanswer
import { persist } from "zustand/middleware"
//endanswer
 
const useItemStore = 
//beginanswer
create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => ({
          items: [...state.items, item],
        }))
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }))
      },
    }),
    { name: "items" },
  ),
)
//endanswer
 
export default useItemStore