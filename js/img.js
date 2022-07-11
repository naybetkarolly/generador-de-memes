//ASIDE
//IMAGEN
const asideImg = document.querySelector('.aside-img')//ID DEL CONTENEDOR DE PROPIEDADES IMAGEN PANNEL
const url = document.getElementById('url') //ID DEL IMPUT URL
const image = document.querySelector('.image') //CONTNEDOR "IMAGEN DEL MEME"
const imgColor = document.getElementById('img-color')//COLOR DE FONDO IMPUT
const optionsFilterBg = document.getElementById('options-filter-bg')//FILTRO PARA EL COLOR DE LA IMAGEN
const brightnessFilter = document.getElementById('brightness')//FILTRO INPUT
const opacityFilter = document.getElementById('opacity')//FILTRO INPUT
const contrastFilter = document.getElementById('contrast')//FILTRO INPUT
const blurFilter = document.getElementById('blur')//FILTRO INPUT
const grayscaleFilter = document.getElementById('grayscale')//FILTRO INPUT
const sepiaFilter = document.getElementById('sepia')//FILTRO INPUT
const hueFilter = document.getElementById('hue')//FILTRO INPUT
const saturateFilter = document.getElementById('saturate')//FILTRO INPUT
const invertFilter = document.getElementById('invert')//FILTRO INPUT
const resetBtn = document.getElementById('reset-btn')//RESETEAR FILTROS
const imageForm = document.getElementById('imageForm')//IMAGEN FORM PANNEL
const textInputColor = document.getElementById("text-input-color")//ID DEL SPAN "text-background-color"
const contInputColor = document.getElementById("cont-input")//CONTENEDOR DEL INPUT Y SPAN "img-color", "text-input-color"

contInputColor.addEventListener("click", () => {
    imgColor.click()
})

url.addEventListener('change', () => {
    image.style.backgroundImage = (`url("${url.value}")`)
    image.style.backgroundSize = 'cover'
    image.style.backgroundPosition = 'center'
})

const updateColor = () => {
    image.style.backgroundColor = (`${imgColor.value}`)
    textInputColor.innerText = `${imgColor.value}`
}

imgColor.addEventListener('input', updateColor)

optionsFilterBg.addEventListener('change', () => {
    image.style.backgroundBlendMode = optionsFilterBg.value

})
const updateFilter = () => {
    image.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`
}
brightnessFilter.addEventListener('input', updateFilter)
opacityFilter.addEventListener('input', updateFilter)
contrastFilter.addEventListener('input', updateFilter)
blurFilter.addEventListener('input', updateFilter)
grayscaleFilter.addEventListener('input', updateFilter)
sepiaFilter.addEventListener('input', updateFilter)
hueFilter.addEventListener('input', updateFilter)
saturateFilter.addEventListener('input', updateFilter)
invertFilter.addEventListener('input', updateFilter)

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    imageForm.reset()
    updateFilter()
    updateColor()
})

