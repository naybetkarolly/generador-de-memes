const body = document.body 
const btnImgAside = document.getElementById("btn-img-aside") //BOTON IMG
const btnTxtAside = document.getElementById("btn-txt-aside") //BOTONES txt
const btnTheme = document.getElementById("btn-theme") //BOTON TEMA 
const textTheme = document.getElementById("text-theme") //SPAN MODO CLARO
const downloadBtn = document.getElementById("download-btn") //BOTON DESCARGA
const contImage = document.querySelector('.wrapper')//CONTENEDOR TEXTO TOP Y BOTTOM 
const closeAside = document.getElementById('close-aside') //ARIA-LABEL CLOSE ASIDE
const aside = document.querySelector('.aside') //IMAGEN PANNEL CONTENEDOR


btnImgAside.addEventListener("click", () => { 
	aside.classList.remove('hidden') 
	asideImg.classList.remove("hidden")   
	asideTxt.classList.add("hidden") 
}); 

btnTxtAside.addEventListener("click", () => {  
	aside.classList.remove('hidden') 
	asideImg.classList.add("hidden") 
	asideTxt.classList.remove("hidden") 
}); 

btnTheme.addEventListener("click", () => {  
	body.classList.toggle("dark")  
	body.classList.toggle("light")  
	if (body.className == "dark") { 
		textTheme.innerText = "Modo claro" 
	} else {  
		textTheme.innerText = "Modo oscuro" 
	} 
});

closeAside.addEventListener('click', () => {  
	aside.classList.add('hidden') 
}) 

downloadBtn.addEventListener("click", () => { 
	domtoimage.toBlob(contImage).then(function (blob) { 
		window.saveAs(blob, "meme.png") 
	}) 
}); 

if (window.screen.width <= '700') { 
	aside.classList.add('hidden') 
} 


