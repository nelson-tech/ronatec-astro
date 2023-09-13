import type { AlertType } from "@/stores/alert"

class CustomAlert extends HTMLElement {
  public closeAlert(e?: Event, callbackFn?: () => void) {
    console.log("close alert")
  }
}

customElements.define("x-alert", CustomAlert, { extends: "div" })

export default CustomAlert
