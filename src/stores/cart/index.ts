import type { Cart } from "@/api/types"
import { atom } from "nanostores"

const $cart = atom<Cart | null | undefined>()

export default $cart
