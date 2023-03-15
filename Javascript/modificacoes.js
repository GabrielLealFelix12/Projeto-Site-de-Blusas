console.log("bem vindo ao deserto do real");

function BarraTransparente(){
	var navbar = document.getElementById("barra_nav");
	navbar.style.opacity = 1.0; 
}

function BarraTransparenteNot(){
	var navbar = document.getElementById("barra_nav");
	navbar.style.opacity = 1.0; 
}

function MudarTextoAoClicarSetaDireita(){
	var p_texto = document.getElementById("p_texto");
	p_texto.innerHTML = "Novo texto aqui - direita";
}

function MudarTextoAoClicarSetaEsq(){
	var p_texto = document.getElementById("p_texto");
	p_texto.innerHTML = "Novo texto aqui - esquerda";
}

const seta_e = document.getElementById("seta");
const seta_d = document.getElementById("seta2");

seta_d.addEventListener("click", MudarTextoAoClicarSetaDireita);
seta_e.addEventListener("click", MudarTextoAoClicarSetaEsq);
//const cab = document.getElementById("cab");
//cab.addEventListener("mouseover", BarraTransparente);
//cab.addEventListener("mouseout", BarraTransparenteNot);
