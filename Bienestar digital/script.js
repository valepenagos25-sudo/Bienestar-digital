let idioma="es";
let r=0;
let correcta=false;

function cambiar(id){
document.querySelectorAll(".pantalla").forEach(x=>x.classList.remove("activa"));
document.getElementById(id).classList.add("activa");
}

function cambiarIdioma(){
idioma = idioma==="es"?"en":"es";
cargarTextos();
}

function cargarTextos(){

titulo.innerText="Bienestar Digital";

m1.innerText="Bienestar Digital";
m2.innerText="Uso Saludable";
m3.innerText="Ciberseguridad";
m4.innerText="Redes Sociales";
m5.innerText="Gestión del Tiempo";
m6.innerText="Actividad";

/* DIGITAL */
tDigital.innerText="Bienestar Digital";
d1t.innerText="¿Qué es el bienestar digital?";
d1.innerText=`El bienestar digital es el uso equilibrado y responsable de la tecnología para mantener una buena salud física, mental y emocional. Implica controlar el tiempo que se pasa frente a pantallas y utilizar los dispositivos de manera consciente.`;

d2t.innerText="Importancia del bienestar digital";
d2.innerText=`El bienestar digital ayuda a reducir el estrés, mejorar la concentración y prevenir problemas como la fatiga visual y la dependencia tecnológica. También permite mantener un equilibrio entre la vida académica y el uso de dispositivos electrónicos.`;

/* HEALTHY */
tHealthy.innerText="Uso saludable";
h1t.innerText="Tiempo en pantalla";
h1.innerText=`El tiempo en pantalla se refiere al tiempo que una persona pasa utilizando dispositivos electrónicos como celulares, computadores o tablets. Un uso excesivo puede causar cansancio visual, problemas de sueño y disminución de la concentración.`;

h2t.innerText="Descanso digital";
h2.innerText=`El descanso digital consiste en hacer pausas durante el uso de dispositivos electrónicos para reducir la fatiga visual y mejorar el rendimiento académico. Se recomienda descansar al menos 5 minutos cada hora.`;

/* CYBER */
tCyber.innerText="Ciberseguridad";
c1t.innerText="Phishing";
c1.innerText=`El phishing es un tipo de fraude digital en el que los delincuentes intentan obtener información personal mediante correos electrónicos o mensajes falsos que aparentan ser de instituciones confiables.`;

c2t.innerText="Contraseñas seguras";
c2.innerText=`Una contraseña segura debe tener al menos ocho caracteres, incluir letras mayúsculas, minúsculas, números y símbolos. Es importante no compartirla con otras personas y cambiarla regularmente.`;

/* SOCIAL */
tSocial.innerText="Redes Sociales";
s1t.innerText="Uso responsable";
s1.innerText=`El uso responsable de redes sociales implica respetar a los demás, evitar publicar información falsa y mantener una conducta adecuada en internet.`;

s2t.innerText="Privacidad digital";
s2.innerText=`La privacidad digital consiste en proteger los datos personales y controlar quién puede acceder a la información que se publica en redes sociales.`;

/* TIME */
tTime.innerText="Gestión del tiempo";
t1t.innerText="Organización del tiempo";
t1.innerText=`La organización del tiempo permite planificar actividades académicas y personales, lo que ayuda a mejorar la productividad y reducir el estrés.`;

t2t.innerText="Evitar distracciones";
t2.innerText=`Evitar distracciones digitales implica desactivar notificaciones innecesarias y establecer horarios específicos para el uso de dispositivos electrónicos.`;

/* INTRO */
introTitulo.innerText="Misión: Sobrevive en el mundo digital";
introTexto.innerText=`Has quedado atrapado en el mundo digital. Para escapar debes tomar decisiones correctas y demostrar que tienes hábitos digitales saludables. Cada respuesta correcta te dará 5 puntos. Si tomas malas decisiones, perderás oportunidades. ¿Estás listo para comenzar?`;

btnStart.innerText="Comenzar";
btnNext.innerText="Continuar";
}

window.onload=cargarTextos;

/* ACTIVIDAD */

const retos=[
{
img:"imagenes/time.png",
pregunta:`Son las 11:45 p.m. Tienes una entrega importante mañana y llevas varias horas frente al computador trabajando en tu proyecto. Además, tienes abiertas múltiples pestañas: redes sociales, videos, chats y documentos académicos. Sientes cansancio visual, dolor de espalda y dificultad para concentrarte. El sistema detecta un riesgo de sobrecarga digital y fatiga académica. Debes tomar una decisión que proteja tu bienestar y tu rendimiento universitario.`,

opciones:[
"Trabajar durante largos periodos sin pausas",
"Realizar pausas cortas y planificadas durante el trabajo",
"Revisar constantemente redes sociales",
"Ignorar el cansancio y continuar trabajando"
],

correcta:1,

correcto:`Las pausas cortas y planificadas permiten:
Recuperar la atención
Reducir errores
Mejorar la productividad
Mantener el bienestar digital

No se trata de trabajar menos, sino de trabajar mejor.

Has demostrado una gestión inteligente del tiempo y la tecnología.

Tu decisión ha sido evaluada por el sistema. El análisis indica que has tomado una acción alineada con el bienestar digital.`,

incorrecto:`Trabajar durante largos periodos sin pausas puede afectar tu:
Concentración
Productividad
Postura corporal
Salud mental

En el contexto universitario, esto puede generar agotamiento y bajo rendimiento académico.

Replantea tu decisión para continuar la misión.`
}
];

function iniciar(){
r=0;
cargarReto();
cambiar("reto");
}

function cargarReto(){
let x=retos[r];

pregunta.innerText=x.pregunta;
imgReto.src=x.img;

op1.innerText=x.opciones[0];
op2.innerText=x.opciones[1];
op3.innerText=x.opciones[2];
op4.innerText=x.opciones[3];
}

function responder(op){
let x=retos[r];

if(op===x.correcta){
correcta=true;
resultado.innerText=x.correcto;
imgResultado.src="imagenes/correcto.png";
}else{
correcta=false;
resultado.innerText=x.incorrecto;
imgResultado.src="imagenes/incorrecto.png";
}

cambiar("resultadoPantalla");
}

function continuar(){

if(correcta === true){

r++;

if(r < retos.length){
cargarReto();
cambiar("reto");
}else{
resultado.innerText="MISIÓN COMPLETADA 🎉";
}

}else{
cambiar("reto");
}

}