var date = new Date();
var end=false;
var pause=false;
var dt;
var d;
var countDownDate;
var debut=sessionStorage.getItem("howStart");
var week_end;

setcount();

if(dt.getDay()>5 || dt.getDay()==0){
	week_end=true;
}
else{
	week_end=false;
}
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  var t=new Date();  
  var h=t.getHours();
  var m=t.getMinutes();
  var s=t.getSeconds();

  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result debut an element with id="demo"
  if (pause){
	document.getElementById("demo").innerHTML = "<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>"+(1>hours ? "" : hours + ":")+(10>minutes ? "0" : "") + minutes + ":" + (10>seconds ? "0" : "") + seconds+"</span>";}
  else{
	document.getElementById("demo").innerHTML = "<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	(1>hours ? "" : hours + ":")+(10>minutes ? "0" : "") + minutes + ":" + (10>seconds ? "0" : "") + seconds;}
    
  // affichage congés, chômage ou week end
  if (week_end){
  	document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>Week-end</span>";
  }
	
  else if (sessionStorage.getItem("howStart")==6){
	document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>"+sessionStorage.getItem("txt")+"</span>";
  }
	
  else if (sessionStorage.getItem("howStart")==7){
	document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>"+sessionStorage.getItem("txt").substring(0,sessionStorage.getItem("txt").indexOf("reprise")+5)
	+sessionStorage.getItem("txt").substring(sessionStorage.getItem("txt").indexOf("reprise")+5)+"</span>";
  }
  
  else{
	if (distance < 0 && end==false) {
		document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"Reload";
		setcount();
	}
	else if (distance < 0 && end==true && sessionStorage.getItem("howStart")!=7 && sessionStorage.getItem("howStart")!=6) {
		dt.getDay()>4 ? document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"<span class='color-green'>Week-end</span>" : 
		document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"<span class='color-green'>Fin de journée</span>";
	}
	}
  
}, 1000);

function setcount(){

d=parseInt(new Date().getHours()+""+(10>new Date().getMinutes() ? "0" : "")+new Date().getMinutes());
if (d<debut){
	pause=true;
    dt = new Date();
	if (debut==800){
		dt.setHours(08);
		dt.setMinutes(00);}
	else{
		dt.setHours(07);
		dt.setMinutes(30);}
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if (d>=debut && d<1000){
	pause=false;
    dt = new Date();
	dt.setHours(10);
	dt.setMinutes(00);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1000 && d<1015){
	pause=true;
	dt = new Date();
	dt.setHours(10);
	dt.setMinutes(15);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1015 && d<1230){
	pause=false;
	dt = new Date();
	dt.setHours(12);
	dt.setMinutes(30);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1230 && d<1300){
	pause=true;
	dt = new Date();
	dt.setHours(13);
	dt.setMinutes(00);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1300 && d<1445){
	pause=false;
	dt = new Date();
	dt.setHours(14);
	dt.setMinutes(45);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1445 && d<1500){
	pause=true;
	dt = new Date();
	dt.setHours(15);
	dt.setMinutes(00);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1500){
	pause=false;
	dt = new Date();
	if(debut==800){
		dt.getDay()==5 ? dt.setHours(16) : dt.setHours(17);
		dt.setMinutes(00);}
	else if (debut==730){
		dt.getDay()==5 ? dt.setHours(16) : dt.setHours(17);
		dt.setMinutes(30);}
	end=true;
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else{countDownDate=0;
}
}

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  
    //let data = JSON.parse(this.responseText).feed.entry;
	//var sha=JSON.parse(this.responseText).sha;
	//sessionStorage.setItem("sha",sha);
	
	var content=atob(JSON.parse(this.responseText).content);	//fixedstring = decodeURIComponent(escape(utfstring));
	content=decodeURIComponent(escape(content));
	  
	switch(true) {
		case content.startsWith("39 heures"):
		sessionStorage.setItem("howStart",800);
		sessionStorage.setItem("txt","39 heures");
		break;
		case content.startsWith("44 heures"):
		sessionStorage.setItem("howStart",730);
		sessionStorage.setItem("txt","44 heures");
		break;
		case content.startsWith("En"):
		sessionStorage.setItem("howStart",7);
		sessionStorage.setItem("txt",content);
		break;
		case content.startsWith("Chômage"):
		sessionStorage.setItem("howStart",7);
		sessionStorage.setItem("txt",content);
		break;
		case content.startsWith("Congé"):
		sessionStorage.setItem("howStart",6);
		sessionStorage.setItem("txt",content);
		break;
	}
  }
};

xmlhttp.open(
  "GET",
  "https://api.github.com/repos/nathanael-bonamie/countdown/contents/how.txt",
  false);
xmlhttp.send();
