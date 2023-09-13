import type { User } from "@/api/types"

type LoginArgs = {
  email: string
  password: string
}

const loginUser = async ({ email, password }: LoginArgs) => {
  const loginResponse = await fetch(
    import.meta.env.PUBLIC_API_BASE + "/users/login",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  )

  const loginData = await loginResponse.json()

  return loginData?.user?.id ? (loginData.user as User) : null
}

export default loginUser
