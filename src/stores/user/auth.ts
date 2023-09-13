import { computed } from "nanostores"
import $user from "."

const userAuth = computed($user, (user) => !!user?.id)

export default userAuth
