function myFunction(){
	document.getElementById("men-content").style.display="block";
	var el=document.getElementById("men-content").style;
	let id=null;
	var x=100;
	clearInterval(id);
	id=setInterval(f,2);
	function f(){
		if(x==0){
			clearInterval(id);
		}
		else{
			x--;
			el.left=x+"%";	
		}
	}

}
function mclose2(){
	document.getElementById("men-content").style.display="none";
}
function mclose(){
	let id2=null;
	var el2=document.getElementById("men-content").style;
	var y=0;
	clearInterval(id2);
	id2=setInterval(g,2);
	function g(){
		if(y==100){
			clearInterval(id2);
			document.getElementById("men-content").style.display="none";
		}
		else{
			y++;
			el2.left=y+"%";
		}
	}
	

}
function pop(){
	window.alert("Alert: It takes you to mail application");
}