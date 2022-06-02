const btnTwo = document.querySelector(".twentyfive");
const btnFour = document.querySelector(".forty");
const btnFive = document.querySelector(".fiftyfive");
const timeleft = document.querySelector(".number");
const timeFoward = document.querySelector(".timeFoward");
const finalizar = document.querySelector(".final");
const mainNumber = document.querySelector(".mainNumber");
const seventyFive = document.querySelector(".seventy-five");

//let contador = 0;

let currentTime = timeleft.textContent; 
var timeId = 0;

// se añade una escucha y se remueve la misma (75 min)
const remove75 = ()=>{
	contador = 4500;
	var timeId = setInterval(conteo, 1000);
	seventyFive.removeEventListener("click", remove75);	
}
seventyFive.addEventListener("click", remove75);

// se añade una escucha y se remueve la misma (25 min)
const remove25 = ()=>{
	contador = 1500;
	var timeId = setInterval(conteo, 1000);
	btnTwo.removeEventListener("click", remove25);	
}
btnTwo.addEventListener("click", remove25);

// se añade una escucha y se remueve la misma (40 min)
const remove40 = ()=>{
	contador = 2400;
	var timeId = setInterval(conteo, 1000);
	btnFour.removeEventListener("click", remove40);	
}
btnFour.addEventListener("click", remove40);

// se añade una escucha y se remueve la misma (55 min)
const remove55 = ()=>{
	contador = 3300;
	var timeId = setInterval(conteo, 1000);
	btnFive.removeEventListener("click", remove55);	
}
btnFive.addEventListener("click", remove55);
		
		
function conteo(){
	contador--;
	timeleft.textContent = segundosAString(contador);
	if(contador === 0){
		clearInterval(contador);
		the_end();	
	}		
}
function the_end() {
	let timeId2 = setInterval(conteomas, 1000);
	console.log(timeId2)
	contador = 0;
	contador++;
	mainNumber.textContent = 0;
	finalizar.innerHTML = `
		<div class="final">
     		<h2>Break!</h2>
     		<span class="timeFoward" >${segundosAString(timeId2)}</span>
		</div>			`;
		
}
function conteomas(){
	//let contador = 0 ;
	//return contador; 	
}

//Funcion para convertir segundos a minutos y horas
function segundosAString(segundos) {
	var hora="";
	if (segundos>3600){
		hora = Math.floor(segundos / 3600);
		hora = (hora < 10)? '0' + hora : hora;
		hora+=":"
	}
	var minutos = Math.floor((segundos / 60) % 60);
	minutos = (minutos < 10)? '0' + minutos : minutos;
	var segundos = segundos % 60;
	segundos = (segundos < 10)? '0' + segundos : segundos;
	return hora  + minutos + ':' + segundos;
}



//let timeId = setInterval(conteo, 1000);
