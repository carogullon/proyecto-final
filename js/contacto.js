/* desafio eventos
let input1 = document.getElementById("nombre");
let input2 = document.getElementById("apellido");
let input3 = document.getElementById("mail");

input1.onchange = () => {console.log("valorNombre")};
input2.onchange = () => {console.log("valorApellido")};
input3.onchange = () => {console.log("valorMail")};


*/
function tomarDato(parametros) {
	let nombre = document.querySelector("#nombre").value
	let apellido = document.querySelector("#apellido").value
	let mail = document.querySelector("#mail").value
	let pregunta1 = document.querySelector("#exampleFormControlSelect1").value
	let pregunta2 = document.querySelector("#reservar").value
	let comentarioPaciente = document.querySelector("#floatingTextarea2").value
	
	console.log(nombre,apellido, mail, pregunta1, pregunta2, comentarioPaciente);

	let error = document.querySelector("#error") 
	
	if (nombre === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (apellido === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (mail === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (pregunta1 === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (pregunta2 === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (comentarioPaciente === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
}

