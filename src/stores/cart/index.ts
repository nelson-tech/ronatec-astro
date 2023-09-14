import type { Cart } from "@/api/types"
import { persistentAtom } from "@nanostores/persistent"

const $cart = persistentAtom<Cart | null | undefined>("cart", undefined, {
  encode(value) {
    return value ? JSON.stringify(value) : value
  },
  decode(value) {
    return value ? JSON.parse(value) : value
  },
})

export default $cart
