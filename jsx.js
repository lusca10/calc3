/*----------------------------------------*/

var s = document.getElementById('deltS')
var t = document.getElementById('deltT')

function cal(){
	var a = s.value
	var b = t.value
	if(a == 0 || b == 0){
		alert("digite os dois valores (numeros)")
	}
	if(a < 0 || b < 0){
		alert("digite valores positivos")
	}

	else{

	var res = a / b

	return res;

	}

}


igual.onclick = function () {
	alert("Velocidade Media = " + cal())
}