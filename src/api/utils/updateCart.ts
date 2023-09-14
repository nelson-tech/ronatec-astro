import $cart from "@/stores/cart"
import type { Cart } from "../types"

const updateCart = async (cartData: Partial<Cart>) => {
  const cartId = $cart.get()?.id

  if (!cartId) {
    return null
  }

  const response = await fetch(
    import.meta.env.PUBLIC_API_BASE + `/carts/${cartId}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    }
  )

  const data: { message: string; doc: Cart } = await response?.json()

  $cart.set(data.doc)
}

export default updateCart
