var date = new Date();
var end=false;
var pause=false;
const nm_mnth = ['Janv.','Fév.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
const nm_day = ['Dim.','Lun.','Mar.','Mer.','Jeu.','Vend.','Sam.'];
var dt;
var d;
var countDownDate;
var week_end;
var num = nm_mnth[date.getMonth()];
var jr = nm_day[date.getDay()];
var j = jr+" "+date.getDate()+" "+num;
var url = './phone.png'
var size = 64;
var affDt = document.getElementById("theDay");
var affTime = document.getElementById("time");
var affLogo = document.getElementById("logo");
dt = new Date();
if(dt.getDay()>5 || dt.getDay()==0){
	week_end=true;
}
else{
	week_end=false;
}

setcount();

// Update the count down every 1 second

affDt.innerHTML = "<span class='color-org'>" + j + "</span>";

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  var t=new Date();  
  var h=t.getHours();
  var m=t.getMinutes();
  var s=t.getSeconds();

  var distance = countDownDate - now;
  
  affTime.innerHTML = "<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+ s + "</span>";
  
}, 1000);

function playAudio(url) {
  new Audio(url).play();
}

function setcount(){
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
	
	var content=atob(JSON.parse(this.responseText).content);	//fixedstring = decodeURIComponent(escape(utfstring));
	content=decodeURIComponent(escape(content));
	  
	switch(true) {
		
		case content.startsWith("Work"):
		sessionStorage.setItem("howStart",1);
		sessionStorage.setItem("txt",content);
		break;
		
		case content.startsWith("En"):
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

d=parseInt(new Date().getHours()+""+(10>new Date().getMinutes() ? "0" : "")+new Date().getMinutes());
if(!week_end && sessionStorage.getItem("howStart")==1){
	if (d<900){
		pause=true;
	    dt = new Date();
		dt.setHours(09);
		dt.setMinutes(00);
		dt.setSeconds(00);
		countDownDate=dt.getTime();
		affLogo.innerHTML = "<span><a href='tel:0679929758' style='color:green'><img width='64' height='64' src='./phone.png'/></a></span>";
		}
	else if (d>=900 && d<1600){
		pause=false;
	    dt = new Date();
		dt.setHours(16);
		dt.setMinutes(00);
		dt.setSeconds(00);
		countDownDate=dt.getTime();
		if(dt.getDay()==1 || dt.getDay()==3 || dt.getDay()==5)
			affLogo.innerHTML = "<span><a href='tel:0553879932' style='color:green'><img width='64' height='64' src='./phone.png'/></a></span>";
		else
			affLogo.innerHTML = "<span><a href='tel:0553958939' style='color:green'><img width='64' height='64' src='./phone.png'/></a></span>";
		}
	else{
		pause=true;
		dt = new Date();
		countDownDate=0;
		end=true;
		affLogo.innerHTML = "<span><a href='tel:0679929758' style='color:green'><img width='64' height='64' src='./phone.png'/></a></span>";
		}
	}
else if (week_end && sessionStorage.getItem("howStart")==1){
	affLogo.innerHTML = "<span class='color-green'>Week-end</span>";
}
else if (sessionStorage.getItem("howStart")==6){
	affLogo.innerHTML = "<span class='color-green'>"+sessionStorage.getItem("txt")+"</span>";
}
else if (sessionStorage.getItem("howStart")==7){
	affLogo.innerHTML = "<span class='color-green'>"+sessionStorage.getItem("txt").substring(0, 11)
	+"<br>"+sessionStorage.getItem("txt").substring(11)+"</span>";
}
}
