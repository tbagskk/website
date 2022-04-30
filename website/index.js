function compteur()
{

var jour = document.getElementById("jour");
var heure = document.getElementById("heure");
var minutes = document.getElementById("minutes");
var secondes =document.getElementById("secondes");
const now = new Date();
const date = new Date ('may 10, 2022 00:00').getTime();
const date_voulu = date - now;
const day = Math.floor( date_voulu / (1000*60*60*24));
const hours = Math.floor(( date_voulu % (1000*60*60*24)) / (1000*60*60));
const minutes2 = Math.floor(( date_voulu % (1000*60*60))/(1000*60));
const seconds = Math.floor((date_voulu % (1000*60))/ 1000);



	jour.innerHTML=day;
	heure.innerHTML=hours;
	minutes.innerHTML=minutes2;
	secondes.innerHTML=seconds;
	
	if (day<10)
	{
		jour.innerHTML="0"+day;
	}
	if (hours<10)
	{
		heure.innerHTML="0"+hours;
	}
	if (minutes2<10)
	{
		minutes.innerHTML="0"+minutes2;
	}
	if (seconds<10)
	{
		secondes.innerHTML="0"+seconds;
	}

}

setInterval(compteur,100);