const createLockClosedIcon = (
  className?: string,
  ariaHidden: boolean = true
) => {
  const xmlns = "http://www.w3.org/2000/svg"
  const svgElem = document.createElementNS(xmlns, "svg")
  svgElem.setAttributeNS(null, "class", className ?? "")
  svgElem.setAttributeNS(null, "viewBox", "0 0 24 24")
  svgElem.setAttributeNS(null, "fill", "none")
  svgElem.setAttributeNS(null, "stroke", "currentColor")
  svgElem.ariaHidden = ariaHidden ? "true" : "false"

  const path = document.createElementNS(xmlns, "path")
  // stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"

  path.setAttributeNS(null, "stroke-linecap", "round")
  path.setAttributeNS(null, "stroke-linejoin", "round")
  path.setAttributeNS(
    null,
    "d",
    "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
  )

  svgElem.appendChild(path)

  return svgElem
}

export default createLockClosedIcon
