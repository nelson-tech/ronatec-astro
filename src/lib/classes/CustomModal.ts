class CustomModal extends HTMLElement {
  transitionClasses = "transition-all duration-300"

  modalId: string | undefined
  modal: HTMLDialogElement | null
  initialModalClasses: string =
    " fixed top-0 left-0 min-h-screen min-w-full flex justify-center items-center bg-black bg-opacity-60 z-50 opacity-0 " +
    this.transitionClasses
  modalClasses: string =
    " fixed top-0 left-0 min-h-screen min-w-full flex justify-center items-center bg-black bg-opacity-60 z-50 opacity-100 " +
    this.transitionClasses

  modalButton: HTMLButtonElement | null

  panel: HTMLDivElement | null | undefined
  initialPanelClasses: string
  panelClasses: string =
    "bg-white p-4 rounded-lg shadow-lg scale-100 transition-all duration-500"

  constructor() {
    super()

    // ####################
    // Modal Initialization
    // ####################

    this.modalButton = this.querySelector("button")

    this.modalId = this?.dataset.target
    this.modal = document.getElementById(
      this.modalId ?? ""
    ) as HTMLDialogElement | null

    if (this.modal) {
      // remove modal
      this.modal.style.zIndex = "-1"

      // store given modalClasses
      this.initialModalClasses =
        this.dataset.initialModalClasses ??
        this.dataset["initial-modal-classes"] ??
        this.initialModalClasses
      this.modalClasses = this.modal.getAttribute("class") ?? this.modalClasses

      // remove hidden option from modal
      this.modal.hidden = false

      // set attributes on modal
      this.modal.setAttribute("aria-modal", "true")
      this.modal.setAttribute("aria-labelledby", this.modalId ?? "")
      this.modal.setAttribute("role", "dialog")
      this.modal.setAttribute("tabindex", "-1")
      this.modal.setAttribute("data-background-click", "disabled")
      this.modal.setAttribute("class", this.initialModalClasses)
    }

    // ####################
    // Panel Initialization
    // ####################

    this.panel = this.modal?.querySelector("div")

    this.initialPanelClasses =
      this.dataset.initialPanelClasses ??
      this.dataset["initial-panel-classes"] ??
      "bg-white p-4 rounded-lg shadow-lg scale-0"

    if (this.panel) {
      // store given panelClasses
      this.panelClasses = this.panel.getAttribute("class") ?? this.panelClasses

      // set attributes on panel
      this.panel.setAttribute("role", "document")
      this.panel.setAttribute("tabindex", "-1")
      this.panel.setAttribute("class", this.initialPanelClasses)
    }

    // open modal when button is clicked
    this.modalButton?.addEventListener("click", this.openModal)
  }

  public disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }

  public openModal() {
    if (this.modal) {
      this.modal.setAttribute("class", this.modalClasses)
      this.panel?.setAttribute("class", this.panelClasses)
      // move modal into place
      this.modal.style.zIndex = "9999"

      // prevent body from scrolling
      this.disableScroll()
    }

    // add event listener to panel
    this.panel?.addEventListener("keydown", (e) => {
      const keyboardEvent = e as Event & KeyboardEvent

      // close modal when escape key is pressed
      if (keyboardEvent.code === "Escape") {
        this.closeModal()
      }
    })

    // close modal when modal is clicked outside panel
    this.modal?.addEventListener("click", (e) => {
      const target = e.target as HTMLElement | null

      if (
        target?.getAttribute("id") === this.modalId &&
        (this.dataset.backgroundClick === "enabled" ||
          this.dataset["background-click"] === "enabled")
      ) {
        this.closeModal()
      }
    })
  }

  public closeModal(callbackFn?: () => void) {
    // enable body scrolling
    window.onscroll = function () {}

    // close modal
    if (this.modal) {
      // set modal and panel classes
      this.modal?.setAttribute("class", this.initialModalClasses)
      this.panel?.setAttribute("class", this.initialPanelClasses)
      this.modal.style.zIndex = "-1"
    }
    callbackFn && callbackFn()
  }
}

customElements.define("x-modal", CustomModal)

export default CustomModal
