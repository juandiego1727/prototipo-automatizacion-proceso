function iniciarPipeline(){

document.getElementById("resultado").innerHTML =
"Pipeline iniciado...";

setTimeout(function(){
document.getElementById("resultado").innerHTML =
"Build completado";
},2000);

setTimeout(function(){
document.getElementById("resultado").innerHTML =
"Pruebas ejecutadas correctamente";
},4000);

setTimeout(function(){
document.getElementById("resultado").innerHTML =
"Despliegue realizado";
},6000);

setTimeout(function(){
document.getElementById("resultado").innerHTML =
"PDF generado y notificación enviada";
},8000);

}
