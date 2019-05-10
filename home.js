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
	var sem;
	if(y==0){
		sem = document.getElementsByClassName("fst_yr");
		sem[x].style.display = "block";
	}
	else if(y==1){
		sem = document.getElementsByClassName("cse");
		sem[x].style.display = "block";
	}
	else if(y==2){
		sem = document.getElementsByClassName("ece");
		sem[x].style.display = "block";
	}
	else if(y==3){
		sem = document.getElementsByClassName("ce");
		sem[x].style.display = "block"; 
	}
	else if(y==4){
		sem = document.getElementsByClassName("me");
		sem[x].style.display = "block"; 
	}
	else if(y==5){
		sem = document.getElementsByClassName("ee");
		sem[x].style.display = "block"; 
	}
	else if(y==6){
		sem = document.getElementsByClassName("ch");
		sem[x].style.display = "block"; 
	}
	else if(y==7){
		sem = document.getElementsByClassName("mt");
		sem[x].style.display = "block"; 
	}
}

function content_display(x){
	if(x==0){
		document.getElementById("ln").style.display = "block";
		document.getElementById("lm").style.display = "none";
		document.getElementById("pa").style.display = "none";
	}
	else if(x==1){
		document.getElementById("ln").style.display = "none";
		document.getElementById("lm").style.display = "block";
		document.getElementById("pa").style.display = "none";
	}
	else if(x==2){
		document.getElementById("ln").style.display = "none";
		document.getElementById("lm").style.display = "none";
		document.getElementById("pa").style.display = "block";
	}
	//x.preventDefault();
}

function midTerm1(){
	x = document.getElementsByClassName("mt1");
	if(x[0].style.display === "none"){
		x[0].style.display = "block";
	}
	else{
		x[0].style.display = "none";
	}
}

function displayBranchHeader(){
	var x = localStorage.getItem("BranchInp");
	if(x==0){
		document.getElementById("branch_display").innerHTML = "First Year";
	}
	else if(x==1){
		document.getElementById("branch_display").innerHTML = "Computer Science and Engineering";
	}
	else if(x==2){
		document.getElementById("branch_display").innerHTML = "Electronics and Communication Engineering";
	}
	else if(x==3){
		document.getElementById("branch_display").innerHTML = "Civil Engineering";
	}
	else if(x==4){
		document.getElementById("branch_display").innerHTML = "Mechanical Engineering";
	}
	else if(x==5){
		document.getElementById("branch_display").innerHTML = "Electrical Engineering";
	}
	else if(x==6){
		document.getElementById("branch_display").innerHTML = "Chemical Engineering";
	}
	else if(x==7){
		document.getElementById("branch_display").innerHTML = "Metallurgy & Material Science Engineering";
	}
}

function displaySemHeader(){
	var x = localStorage.getItem("semInp");
	var y = localStorage.getItem("BranchInp");
	if(y==0){
		if(x==0){
			document.getElementById("sem_display").innerHTML = "Physics Semester";
		}
		else if(x==1){
			document.getElementById("sem_display").innerHTML = "Chemistry Semester";
		}
	}
	else{
		if(x==0){
			document.getElementById("sem_display").innerHTML = "3rd Semester";
		}
		else if(x==1){
			document.getElementById("sem_display").innerHTML = "4th Semester";
		}
		else if(x==2){
			document.getElementById("sem_display").innerHTML = "5th Semester";
		}
		else if(x==3){
			document.getElementById("sem_display").innerHTML = "6th Semester";
		}
		else if(x==4){
			document.getElementById("sem_display").innerHTML = "7th Semester";
		}
		else if(x==5){
			document.getElementById("sem_display").innerHTML = "8th Semester";
		}
	}
}

function SubInput(x){
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("subInp",x);
	}	
	else{
		document.getElementById("result").innerHTML = "Sorry"; 
	}
}
/*function semInput(x){
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("semInp",x);
	}
	else{
		document.getElementById("result").innerHTML = "Sorry";
	}
}*/
function displaySubHeader(){
	var x = localStorage.getItem("semInp");
	var y = localStorage.getItem("subInp");
	if(x==0){
		var z = document.getElementsByClassName("3rd");
		if(y==0){
			document.getElementById("sub_display").innerHTML = "Data Structures & Algorithms";
			z[0].style.display = "block";
		}
		else if(y==1){
			document.getElementById("sub_display").innerHTML = "Introduction to Signals & Communication";
			z[1].style.display = "block";
		}
		else if(y==2){
			document.getElementById("sub_display").innerHTML = "Programming Methodology";
			z[2].style.display = "block";
		}
		else if(y==3){
			document.getElementById("sub_display").innerHTML = "Logic in Computing";
			z[3].style.display = "block";
		}
		else if(y==4){
			document.getElementById("sub_display").innerHTML = "Digital Logic Design";
			z[4].style.display = "block";
		}
		else if(y==5){
			document.getElementById("sub_display").innerHTML = "Effective Communication";
			z[5].style.display = "block";
		}
	}
	else{
		
	}
}

function OnOffFun(x){
	if(x==0){
		var s = document.getElementById("ln");
		if(s.style.display=="none"){
			s.style.display = "block";
			document.getElementById("ln0").style.display = "none";
			document.getElementById("ln1").style.display = "block";
		}
		else{
			s.style.display = "none";
			document.getElementById("ln0").style.display = "block";
			document.getElementById("ln1").style.display = "none";
		}
	}
	else if(x==1){
		var s = document.getElementById("pyp");
		if(s.style.display=="none"){
			s.style.display = "block";
			document.getElementById("pyp0").style.display = "none";
			document.getElementById("pyp1").style.display = "block";
		}
		else{
			s.style.display = "none";
			document.getElementById("pyp0").style.display = "block";
			document.getElementById("pyp1").style.display = "none";
		}
	}
	else if(x==2){
		var s = document.getElementById("lm");
		if(s.style.display=="none"){
			s.style.display = "block";
			document.getElementById("lm0").style.display = "none";
			document.getElementById("lm1").style.display = "block";
		}
		else{
			s.style.display = "none";
			document.getElementById("lm0").style.display = "block";
			document.getElementById("lm1").style.display = "none";
		}
	}
}