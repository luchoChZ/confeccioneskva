	function validar(){
		var texto=document.getElementById("mail").value;
		var arroba="false";
		var punto = "false";
		var mensaje="Correo incorrecto";
		if (texto!=""){
			var texto = texto.split("");
			for(i in texto) { 
				if(texto[i] == "@") {
					arroba="true";
				}
			}	
			if(arroba=="false") {
				mensaje+= " - no tiene @ ";
			}
			for(i in texto) { 
				if(texto[i] == ".") {
					punto="true";
					document.getElementById("enviar").style="visibility: hidden;"
				}
			}	
			if(punto=="false") {
				mensaje+= " - no tiene (.) ";
				document.getElementById("enviar").style="visibility: hidden;"
			}		
		}else{
			mensaje="Debe escribir un correo, ";
		}	
		if((arroba=="true") && (punto=="true")){
			mensaje="";
			document.getElementById("enviar").style="visibility: visible;"
		}
	document.getElementById("ay1").innerHTML=mensaje;
}

function cotizar(){
	var pre=eval(document.getElementById("precio").value);
	var cantidad=(document.getElementById("cantidad").value);
	if (isNaN(pre) || isNaN(cantidad)){
		document.getElementById("resultado").value="Por favor completar los valores";
	}else{
		document.getElementById("resultado").value=cantidad*pre;
	}
	document.getElementById("CampoResultado").style="visibility: visible;"
}
function ocultar(){
	document.getElementById("CampoResultado").style="visibility: hidden;"
	document.getElementById("cantidad").value="";
}

window.onload = function() {
		document.getElementById("mail").onkeyup = validar;
		document.getElementById("cotizar").onclick = cotizar;
		document.getElementById("p").onchange = ocultar;
}