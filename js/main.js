var box1=document.getElementsByClassName("box1")[0];
var box2=document.getElementsByClassName("box2")[0];
var box3=document.getElementsByClassName("box3")[0];
var i=0;
function _jackbox(){
	i++;
	if(i<=3){
	/*positions*/
	_pb1=parseInt(Math.ceil(Math.random()*-1000)/100)*100;
	_pb2=parseInt(Math.ceil(Math.random()*-1000)/100)*100;
	_pb3=parseInt(Math.ceil(Math.random()*-1000)/100)*100;
	
		box1.style.top=_pb1+"px";

		box2.style.top=_pb2+"px";

		box3.style.top=_pb3+"px";

	
	
	/*numbers*/
	_x=Math.ceil(Math.random()*100);
	_y=Math.ceil(Math.random()*100);
	_z=Math.ceil(Math.random()*100);
	
	
	
	document.getElementsByClassName("number")[0].innerHTML=_x;
	document.getElementsByClassName("number")[1].innerHTML=_x;
	document.getElementsByClassName("number")[2].innerHTML=_x;
	document.getElementsByClassName("number")[3].innerHTML=_x;
	document.getElementsByClassName("number")[4].innerHTML=_x;
	document.getElementsByClassName("number")[5].innerHTML=_x;
	document.getElementsByClassName("number")[6].innerHTML=_x;
	document.getElementsByClassName("number")[7].innerHTML=_x;
	document.getElementsByClassName("number")[8].innerHTML=_x;
	document.getElementsByClassName("number")[9].innerHTML=_x;
	document.getElementsByClassName("number")[10].innerHTML=_y;
	document.getElementsByClassName("number")[11].innerHTML=_y;
	document.getElementsByClassName("number")[12].innerHTML=_y;
	document.getElementsByClassName("number")[13].innerHTML=_y;
	document.getElementsByClassName("number")[14].innerHTML=_y;
	document.getElementsByClassName("number")[15].innerHTML=_y;
	document.getElementsByClassName("number")[16].innerHTML=_y;
	document.getElementsByClassName("number")[17].innerHTML=_y;
	document.getElementsByClassName("number")[18].innerHTML=_y;
	document.getElementsByClassName("number")[19].innerHTML=_y;
	document.getElementsByClassName("number")[20].innerHTML=_z;
	document.getElementsByClassName("number")[21].innerHTML=_z;
	document.getElementsByClassName("number")[22].innerHTML=_z;
	document.getElementsByClassName("number")[23].innerHTML=_z;
	document.getElementsByClassName("number")[24].innerHTML=_z;
	document.getElementsByClassName("number")[25].innerHTML=_z;
	document.getElementsByClassName("number")[26].innerHTML=_z;
	document.getElementsByClassName("number")[27].innerHTML=_z;
	document.getElementsByClassName("number")[28].innerHTML=_z;
	document.getElementsByClassName("number")[29].innerHTML=_z;
	
	
    if(_x == _y && _x==_z && _y == _z){
		
		alert("you won");
		i=0;

	}
	
	}
	else if(i==4){
		
		
		
		   document.getElementsByClassName("gameover")[0].style.opacity="1";
	
	}
	
	else if(i>=4){
		
			document.getElementsByClassName("gameover")[0].style.opacity="0";
			i=0;
		
	}
	
}