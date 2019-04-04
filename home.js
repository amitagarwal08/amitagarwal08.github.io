function BranchInput(x){
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("BranchInp", x);
	}
	else{
		document.getElementById("result").innerHTML = "Sorry";
	}
}


function displayBranchSem(){
	var y = localStorage.getItem("BranchInp");
	if(y==0){
		document.getElementById("first_yr").style.display = "block";
	}
	else{
		document.getElementById("branch").style.display = "block";
	}
}

function semInput(x){
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("semInp",x);
	}
	else{
		document.getElementById("result").innerHTML = "Sorry";
	}
}
function semOutput(){
	var y = localStorage.getItem("BranchInp");
	var x = localStorage.getItem("semInp");
	if(y==1){
		var sem = document.getElementsByClassName("cse");
		sem[x].style.display = "block";
	}
	else if(y==2){
		document.getElementById("ce").style.display = "block";
	}
	else if(y==3){
		document.getElementById("me").style.display = "block";
	}
}