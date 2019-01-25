var a = 0;
var b = 0;

function showContent(){
	if(a == 0){
		a = 1;
		document.getElementById("dropdown_1").style.display = "block";
	}

	else if(a == 1){
		a = 0;
		document.getElementById("dropdown_1").style.display = "none";
	}
}

function showContent_2(){
	if(b == 0){
		b = 1;
		document.getElementById("dropdown_2").style.display = "block";
	}

	else if(b == 1){
		b = 0
		document.getElementById("dropdown_2").style.display = "none";
	}
}
