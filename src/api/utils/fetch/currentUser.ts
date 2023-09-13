import type { User } from "@/api/types"

const fetchCurrentUser = async () => {
  try {
    const userResponse = await fetch(
      import.meta.env.PUBLIC_API_BASE + "/users/me?depth=4",
      { credentials: "include" }
    )
      .then((response) => response.json())
      .then((data) => {
        return (data?.user ?? null) as User | null
      })
      .catch((error) => {
        console.error(error)
        return null
      })

    return userResponse
  } catch (error) {
    console.warn("Error fetching user", error)
    return null
  }
}

export default fetchCurrentUser
