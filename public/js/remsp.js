export default function () {
  const style = document.createElement('style')
  style.innerText = `html {font-size:${document.documentElement.clientWidth / 16}px;}`
  document.head.appendChild(style)
}
