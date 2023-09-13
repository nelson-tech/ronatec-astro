import $alert from "@/stores/alert"
import $cart from "@/stores/cart"
import $user from "@/stores/user"
import $loginOpen from "@/stores/modals/login"
import $authLoading from "@/stores/loading/auth"
import $cartLoading from "@/stores/loading/cart"

import loginUser from "./fetch/loginUser"
import fetchCart from "./fetch/cart"

type LoginArgs = {
  email: string
  password: string
}

const login = async ({ email, password }: LoginArgs) => {
  $authLoading.set(true)

  const user = await loginUser({ email, password })

  if (user?.id) {
    // set user, cart, and cart count
    $user.set(user)

    $alert.set({
      open: true,
      kind: "success",
      primary: `Welcome back${user.fullName ? `, ${user.fullName}` : ""}!`,
      secondary: "You are now logged in.",
    })
  }

  $authLoading.set(false)

  // close login modal
  $loginOpen.set(false)

  // fetch cart
  if (user?.cart) {
    $cartLoading.set(true)
    const cart = await fetchCart(user)
    $cart.set(cart)
    $cartLoading.set(false)
  }

  return user
}

export default login
