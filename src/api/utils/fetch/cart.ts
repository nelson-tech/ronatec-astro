import type { Cart, User } from "@/api/types"
import $user from "@/stores/user"

const fetchCart = async (givenUser?: User) => {
  const user = $user.get() ?? givenUser

  const userCart = user?.cart
  const userCartId = typeof userCart === "string" ? userCart : userCart?.id
  const cartId = userCartId ?? localStorage.getItem("cartId")

  if (cartId) {
    try {
      const cartData = await fetch(
        import.meta.env.PUBLIC_API_BASE + "/carts/" + cartId,
        { credentials: "include" }
      )
        .then((response) => response.json())
        .then((data) => {
          return (data ?? null) as Cart | null
        })
        .catch((error) => {
          console.error(error)
          return null
        })
      return cartData
    } catch (error) {
      console.warn("Error fetching cart", error)
    }
  }
  return null
}

export default fetchCart
