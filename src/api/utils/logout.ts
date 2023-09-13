import $user from "@/stores/user"
import $cart from "@/stores/cart"
import $authLoading from "@/stores/loading/auth"
import $alert from "@/stores/alert"

const logout = async () => {
  $authLoading.set(true)
  const logoutResponse = await fetch(
    import.meta.env.PUBLIC_API_BASE + "/users/logout",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  // TODO: handle errors

  $user.set(null)
  $cart.set(null)

  $alert.set({
    open: true,
    primary: "Logged out.",
    secondary: "",
    kind: "info",
  })

  $authLoading.set(false)
}

export default logout
