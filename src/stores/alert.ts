import { atom } from "nanostores"

export type AlertType = {
  open: boolean

  kind: "info" | "warning" | "error" | "success"
  icon?: HTMLDivElement
  primary: string
  secondary: string
  onClose?: Function
  timeout: number
}
const alert = atom<Partial<AlertType>>({
  open: false,
  primary: "",
  secondary: "",
  kind: "success" as "info" | "warning" | "error" | "success",
  timeout: 2000,
})

export default alert
