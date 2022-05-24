const btnTwo = document.querySelector(".twentyfive");
const btnFour = document.querySelector(".forty");
const btnFive = document.querySelector(".fiftyfive");
const timeleft = document.querySelector(".number");
const finalizar = document.querySelector(".final");
const mainNumber = document.querySelector(".mainNumber");
const seventyFive = document.querySelector(".seventy-five");

//let contador = 0;
let currentTime = timeleft.textContent; 
var timeId = 0;

seventyFive.addEventListener("click", ()=>{ 
	contador = 4500;
	var timeId = setInterval(conteo, 1000);
});		
btnTwo.addEventListener("click", (e)=>{ 
	console.log(e);
	contador = 1500;
	var timeId = setInterval(conteo, 1000);
});
btnFour.addEventListener("click", ()=>{ 
	contador = 2400;
	var timeId = setInterval(conteo, 1000);
});
btnFive.addEventListener("click", ()=>{ 
	contador = 3300;
	var timeId = setInterval(conteo, 1000);
});
		
		
function conteo(){
	contador--;
	timeleft.textContent = segundosAString(contador);
	if(contador === 0){
		clearInterval(contador);
		the_end();	
	}		
}
function the_end() {
	finalizar.innerHTML = `
		<div class="final">
     		<h2>Break!</h2>
		</div>			`;
	mainNumber.textContent = 0;	
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
