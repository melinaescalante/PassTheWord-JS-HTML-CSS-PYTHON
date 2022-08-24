// Funciones
class Palabra{
	constructor (ID, letra, pista, definicion, palabra, correcto) {
	this.ID = ID;
	this.letra = letra;
	this.pista = pista;
	this.definicion = definicion;
	this.palabra = palabra;
	this.correcto = null;
	}
}

var palabras = [
	new Palabra(0, "A","Empieza por A:","Capa de gas de un cuerpo celeste, el cual atrae los gases por su gravedad (se mantienen en él si la gravedad es suficiente)", "atmosfera"),
	new Palabra(1, "B", "Empieza por B:","Producto conformado por elementos químicos naturales que pueden descomponerse a partir de la acción del sol, agua, bacterias, etc", "biodegradable"),
	new Palabra(2, "C", "Empieza por C (2 palabras):","Se conoce como emisión neta de dióxido de carbono cero", "Carbono Neutro"),
	new Palabra(3, "D", "Empieza por D (3 palabras):","Gas emitido por la sociedad, se encuentra presente en efecto invernadero y contribuye a la contaminación", "Dioxido de carbono"),
	new Palabra(4, "E", "Empieza por E (2 palabras):","Medidas económicas que aspiren a reducir riesgos ambientales, apuntando a un desarrollo sostenible y ecológico", "Economia Verde"),
	new Palabra(5, "F", "Contiene la F (2 palabras):"," Fuego que se extiende sin control y planificación sobre parcelas silvestres, afectando la flora y fauna", "Incendio forestal"),
	new Palabra(6, "G", "Contiene la G (2 palabras):","Consecuencia de las acciones humanas sobre la naturaleza", "Calentamiento global"),
	new Palabra(7, "H", "Empieza por H:","Zona de tierra plana, cuya superficie se inunda permanentemente generando una saturación del suelo. Provee una fuente esencial de oxígeno, se desarrolla una flora y fauna híbrida entre acuáticos y terrestres", "Humedales"),
	new Palabra(8, "I", "Contiene la I (3 palabras):", "Punto en el cual se considera tarde para el accionar sobre ciertos efectos del cambio climático", "Punto de inflexion"),
	new Palabra(9, "J", "Empieza por J (2 palabras):", "Tratamiento justo y participación de todas las personas independientemente de su raza, color, origen nacional, cultura o educación con respecto al desarrollo, implantación, aplicación de las leyes, reglamentos y políticas ambientales", "Justicia ambiental"),
	new Palabra(10, "K", "Contiene la K (3 palabras)", "Es un protocolo de la Convención Marco de las Naciones Unidas sobre el cambio climático","Protocolo de kioto"),
    new Palabra(11, "L", "Contiene la L:", "Se lo considera como el estado frecuente de la atmósfera perteneciente a un lugar específico de una superficie terrestre", "Clima"),
	new Palabra(12, "M", "Empieza por M:", "Acciones humanas que buscan reducir emisiones de gases del efecto invernadero", "Mitigacion"),
	new Palabra(13, "N", "Empieza por N:", "Gas incoloro que compone cuatro quintos del volumen del aire de la atmósfera y se usa para sintetizar amoníaco y otros productos, para fabricar explosivos, como refrigerante y como atmósfera inerte para conservar ciertos productos", "Nitrogeno"),
	new Palabra(14, "O", "Empieza por O (3 palabras):", "Un evento protagonizado por temperaturas extremadamente altas para una región determinada, se mide en relación a la temperatura promedio del área", "Ola de calor"),
	new Palabra(15, "P", "Empieza por P (2 palabras):", "Tipo de dieta que consume únicamente productos 100% vegetales para minimizar el impacto de los gases y desechos provenientes de la industria cárnica", "Plant based"),
	new Palabra(16, "Q", "Contiene la Q:", "Anomalía climatológica en la escasa disponibilidad de agua dejando de ser suficiente para abastecer las necesidades de las plantas, los animales y los humanos que viven en dicho lugar", "Sequia"),
	new Palabra(17, "R", "Empieza por R (2 palabras):", "Son bienes o servicios que proporciona la naturaleza sin la intervención de la sociedad. Se divide en tres tipos dependiendo de su renovabilidad", "Recursos naturales"),
	new Palabra(18, "S", "Contiene la S (2 palabras):", "Desarrollo que satisfaga a la generación presente sin comprometer a las futuras en cuestiones naturales y climáticas", "Desarrollo sostenible"),
	new Palabra(19, "T", "Contiene la T:", "Principal compuesto fósil contaminante de flora y fauna marina tras la realización de una exploración y/o explotación dentro de áreas oceánicas", "Petroleo"),
	new Palabra(20, "U", "Contiene la U:", "Energía sustentable y renovable, se obtiene del aprovechamiento del potencial de la corriente del agua, saltos o mareas", "Hidraulica"),
	new Palabra(21, "V", "Empieza por V:", "Se utiliza para fumigar campos de siembra, el más conocido es el Glifosato", "Veneno"),
    new Palabra(22, "X", "Contiene la X:", "Explotación excesiva de un recurso natural", "Sobreexplotacion"),
	new Palabra(23, "Y", "Contiene la Y:", "Concepto que caracteriza a una persona o un objeto de ser respetuoso con el medio ambiente, como  un producto compostable, o una persona con hábitos saludables", "Ecofriendly"),
	new Palabra(24, "Z", "Contiene la Z:", "Una de las famosas Rs que nos permite que un desecho pueda ser utilizado formando parte de un producto nuevo", "Reutilizar")
];

let posicion = 0
let puntaje = 0
function enviar() {
	let respuestaUsuario = document.getElementById("respuestaUsuario").value;
	respuestaUsuario = respuestaUsuario.toLowerCase();
	try {
		posicion = document.getElementsByClassName("item")[0].id	
	} catch (error) {
		cargarDefinicion()
	}
	if (respuestaUsuario == palabras[posicion].palabra.toLowerCase()) {
		palabras[posicion].correcto = true;
		console.log(palabras[posicion].ID)
		document.getElementsByClassName("item")[0].classList.add("item--success");
		document.getElementsByClassName("item")[0].classList.remove("item");
		puntaje += 10
	} else {
		palabras[posicion].correcto = false;
		document.getElementsByClassName("item")[0].classList.add("item--failure");
		document.getElementsByClassName("item")[0].classList.remove("item");
	}
	cargarDefinicion()
	posicion ++
	document.getElementById("respuestaUsuario").value = ""
}

function pasapalabra() {
	try{
		document.getElementsByClassName("item")[0].classList.add("item--pasa");
		document.getElementsByClassName("item")[0].classList.remove("item");
		posicion++
	}
	catch(error){}

	
	cargarDefinicion();
	document.getElementById("respuestaUsuario").value = ""
}

let letraActual = 0
function cargarDefinicion() {
	if (letraActual <= 24) {
		try{
			letraActual = document.getElementsByClassName("item")[0].id
			document.getElementById("consignas").innerHTML = `<h2> ${palabras[letraActual].pista}, <br> ${palabras[letraActual].definicion} </h2>`
			letraActual++;	
		}
		catch(error){
			reiniciar()
		}
		
	}
	else{
		reiniciar()
	}

} 

function reiniciar() {
	if (document.getElementsByClassName("item--pasa").length == 0 && document.getElementsByClassName("item").length == 0) {
		finalizar()
	}
	else{
		while (document.getElementsByClassName("item--pasa").length > 0) {
			document.getElementsByClassName("item--pasa")[0].classList.add("item");
			document.getElementsByClassName("item--pasa")[0].classList.remove("item--pasa");
			letraActual = document.getElementsByClassName("item")[0].id;
			posicion = document.getElementsByClassName("item")[0].id;
			posicion--	
			document.getElementById("consignas").innerHTML = `<h2> ${palabras[letraActual].pista}, <br> ${palabras[letraActual].definicion} </h2>`
			letraActual++
		}	
		console.log(letraActual)
		console.log(posicion)
	}
	

}

cargarDefinicion()

function finalizar(){
	localStorage.setItem("puntaje", puntaje);
	location.href="/final" 
}

window.onload = updateClock;

var totalTime = 700;

function updateClock() {
    document.getElementById('tiempo').innerHTML = totalTime;
    if(totalTime==0){
        console.log('Final');
		finalizar();
    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}