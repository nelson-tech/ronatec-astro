class Dropdown extends HTMLElement {
  id: string
  open: boolean = false
  panel: HTMLElement | null

  constructor() {
    super()

    this.open = false

    this.id = this.dataset.id ?? ""
    this.panel = document.getElementById(this.id ?? "")

    //Add event listeners to close dropdown when clicking on internal links
    const buttons = this.panel?.querySelectorAll("button")
    buttons?.forEach((link) => {
      link.addEventListener("click", () => {
        this.closePanel()
      })
    })

    const links = this.panel?.querySelectorAll("a")
    links?.forEach((link) => {
      link.addEventListener("click", () => {
        this.closePanel()
      })
    })

    const button = this.querySelector("button")
    button?.addEventListener("click", () => {
      this.open ? this.closePanel() : this.openPanel()
    })

    // Close on escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.open) {
        this.closePanel()
      }
    })

    // Close on resize
    window.addEventListener("resize", () => {
      if (this.open) {
        this.closePanel()
      }
    })

    // Close on scroll
    window.addEventListener("scroll", () => {
      if (this.open) {
        this.closePanel()
      }
    })
  }

  openPanel() {
    this.open = true

    this.panel?.classList.remove("hidden")
    setTimeout(() => {
      this.panel?.classList.replace("opacity-0", "opacity-100")
      this.panel?.classList.replace("-translate-y-4", "translate-y-0")
      this.panel?.classList.replace("scale-y-80", "scale-y-100")
    }, 20)
    document.addEventListener("click", this.outsideClickListener.bind(this))
  }

  outsideClickListener(event: MouseEvent) {
    if (
      event.target &&
      !this.contains(event.target as Node) &&
      !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length)
    ) {
      this.closePanel()
    }
  }

  closePanel() {
    if (this.panel) {
      this.panel.classList.replace("opacity-100", "opacity-0")
      this.panel.classList.replace("translate-y-0", "-translate-y-4")
      this.panel.classList.replace("scale-y-100", "scale-y-80")
      setTimeout(() => {
        this.panel?.classList.add("hidden")
      }, 300)
    }
    document.removeEventListener("click", this.outsideClickListener.bind(this))
    this.open = false
  }
}

export default Dropdown
