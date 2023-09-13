import { computed } from "nanostores"
import $cart from "."

const $cartCount = computed($cart, (cart) => cart?.count || 0)

export default $cartCount
