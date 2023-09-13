import type { User } from "@/api/types"
import { atom } from "nanostores"

const user = atom<User | null | undefined>()

export default user
