
const asideTxt = document.querySelector(".aside-txt")//TEXTO PANNEL
const topText = document.getElementById("top-text")//ID TEXT AREA SUPERIOR
const bottomText = document.getElementById("bottom-text")//ID TEXT AREA INFERIOR
const topImage = document.querySelector(".top-text") //CONTENEDOR TEXTO TOP
const bottomImage = document.querySelector(".bottom-text")//CONTENEDOR TEXTO BOTTOM
const checkTopText = document.getElementById("check-top-text")//ELIMINAR TEXTO SUPERIOR
const checkBottomText = document.getElementById("check-bottom-text")//ELIMINAR TEXTO INFERIOR
const textFontTop = document.getElementById("textFontTop")// fuente superior
const textFontBottom = document.getElementById("textFontBottom")//fuente inferior
const optionTextFont = document.getElementById("optionTextFont")//ID DEL SELECT *FUENTES
const fontSize = document.getElementById("fontSize")// TAMAÑO DE FUENTE
const alignLeftBtn = document.getElementById("btn-left")//TEXTO A LA IZQUIERDA
const alignRightBtn = document.getElementById("btn-right")//TEXTO A LA DERECHA
const alignCenterBtn = document.getElementById("btn-center")//TEXTO AL CENTRO
const textColor = document.getElementById("text-color")//COLOR DE TEXTO INPUT
const textBackground = document.getElementById("text-background")//COLOR DE FONDO
const textColorHex = document.getElementById("text-color-hex")//COLOR DE TEXTO
const textBackgroundHex = document.getElementById("text-background-hex")//COLOR DE FONDO
const checkTransparent = document.getElementById("checkbox-transparent")//FONDO TRANSPARENTE
const textShadowNone = document.getElementById("text-shadow-none")//SIN CONTORNO DE TEXTO
const textShadowLight = document.getElementById("text-shadow-light")//CONTORNO DE TEXTO CLARO
const textShadowDark = document.getElementById("text-shadow-dark")//CONTORNO DE TEXTO OSCURO
const paddingText = document.getElementById("padding-text")//ESPACIADO
const lineHeight = document.getElementById("line-height")//INTERLINEADO
const colorInput = document.getElementById("color-input")//CONTENEDOR DE COLOR Y FONDO PARA EL TEXTO
const backgroundInput = document.getElementById("background-input")//COLOR DE FONDO


const forms = document.getElementsByTagName("form")

for (form of forms) {
	form.addEventListener("submit", (e) => {
		e.preventDefault()
	})
}


topText.addEventListener("keyup", (e) => {
	topImage.innerText = e.target.value
})

bottomText.addEventListener("keyup", (e) => {
	bottomImage.innerText = e.target.value
})

checkTopText.addEventListener("change", (e) => {
	if (e.target.checked) {
		topImage.style.display = "none"
	} else {
		topImage.style.display = "flex"
	}
})

checkBottomText.addEventListener("change", (e) => {
	if (e.target.checked) {
		bottomImage.style.display = "none"
	} else {
		bottomImage.style.display = "flex"
	}
})

optionTextFont.addEventListener("change", () => {
	textFontTop.style.fontFamily = optionTextFont.value
	textFontBottom.style.fontFamily = optionTextFont.value
})

fontSize.addEventListener("change", () => {
	textFontTop.style.fontSize = fontSize.value + "px"
	textFontBottom.style.fontSize = fontSize.value + "px"
})

alignLeftBtn.addEventListener("click", (e) => {
	e.preventDefault()
	textFontTop.style.justifyContent = "flex-start"
	textFontBottom.style.justifyContent = "flex-start"
})

alignRightBtn.addEventListener("click", (e) => {
	e.preventDefault()
	textFontTop.style.justifyContent = "flex-end"
	textFontBottom.style.justifyContent = "flex-end"
})

alignCenterBtn.addEventListener("click", (e) => {
	e.preventDefault()
	textFontTop.style.justifyContent = "center"
	textFontBottom.style.justifyContent = "center"
})

textColor.addEventListener("input", () => {
	textFontTop.style.color = `${textColor.value}`
	textFontBottom.style.color = `${textColor.value}`
	textColorHex.innerText = `${textColor.value}`
})

textBackground.addEventListener("input", () => {
	textFontTop.style.backgroundColor = `${textBackground.value}`
	textFontBottom.style.backgroundColor = `${textBackground.value}`
	textBackgroundHex.innerText = `${textBackground.value}`
})

checkTransparent.addEventListener("change", (e) => {
	if (e.target.checked) {
		textFontTop.style.backgroundColor = "transparent"
		textFontBottom.style.backgroundColor = "transparent"
	} else {
		textFontTop.style.backgroundColor = `${textBackground.value}`
		textFontBottom.style.backgroundColor = `${textBackground.value}`
	}
})

textShadowNone.addEventListener("click", () => {
	textFontTop.style.textShadow = "none"
	textFontBottom.style.textShadow = "none"
})

textShadowLight.addEventListener("click", () => {
	textFontTop.style.textShadow =
		"rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px"
	textFontBottom.style.textShadow =
		"rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px"
})

textShadowDark.addEventListener("click", () => {
	textFontTop.style.textShadow =
		"rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
	textFontBottom.style.textShadow =
		"rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
})

paddingText.addEventListener("input", (e) => {
	textFontTop.style.padding = `${paddingText.value}px 10px`
	textFontBottom.style.padding = `${paddingText.value}px 10px`
})

lineHeight.addEventListener("change", () => {
	textFontTop.style.lineHeight = `${lineHeight.value}`
	textFontBottom.style.lineHeight = `${lineHeight.value}`
})

colorInput.addEventListener('click', () => {
	textColor.click()
})

backgroundInput.addEventListener('click', () => {
	textBackground.click()
})
