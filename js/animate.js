let h = ( document.documentElement.clientHeight );
let w = ( document.documentElement.clientWidth ) - 3;

console.log ( h, w );

let fontStyle = "30px monospace";

let stepLeft_1 = -400;
let stepLeft_2 = -450;
let stepLeft_3 = -450;
let stepLeft_4 = -400;
let stepLeft_5 = -450;
let stepLeft_6 = -450;
let stepLeft_7 = -550;
let stepLeft_8 = -550;
		
let rowSpace = 250;

function snowString(snows = 10, spaces = 10) {
	let snowsAmount = "";
	
	
	for (let i = 0; i < snows; i++){
		snowsAmount += ".";
		
		for (let k = 0; k < spaces; k++){
			snowsAmount += " ";
		}
	}
	
	return snowsAmount;
}

if (h>w) {
	fontStyle = "20px monospace";   rowSpace = 500;	
		stepLeft_1 = -510;
		stepLeft_2 = -550;
		stepLeft_3 = -510;
		stepLeft_4 = -550;
		stepLeft_5 = -510;
		stepLeft_6 = -550;
		stepLeft_7 = -550;
		stepLeft_8 = -550;
	}

let dwn = 0;						
let dwn2 = -((h-rowSpace) / 4);		
let dwn3 = -((h-rowSpace) / 4)*2;	
let dwn4 = -((h-rowSpace) / 4)*3;	
let dwn5 = -((h-rowSpace) / 4)*4;	
let dwn6 = -((h-rowSpace) / 4)*5;	
let dwn7 = -((h-rowSpace) / 4)*6;
let dwn8 = -((h-rowSpace) / 4)*7;

let canvas = document.getElementById('canvas');

setInterval( function draw() { 
  
  
  canvas.width = (window.innerWidth) - 3;
  canvas.height = (window.innerHeight) - 3; 
  

  if (canvas.getContext && h<w) {
	  if ( dwn > (h-140)) { dwn = 0; stepLeft_1 = -400;}	
	  if ( dwn2 > (h-140)) { dwn2 = 0; stepLeft_2 = -500;}	
	  if ( dwn3 > (h-140)) { dwn3 = 0; stepLeft_3 = -450;}	
	  if ( dwn4 > (h-140)) { dwn4 = 0; stepLeft_4 = -500; }	
	  if ( dwn4 > (h-140)) { dwn5 = 0; stepLeft_5 = -600; }	
    let ctx = canvas.getContext('2d');
	ctx.font = fontStyle;
	ctx.fillStyle = "#8988f99B";
	ctx.fillText(snowString(12, 10), stepLeft_1+=0.3, dwn++);	
	ctx.fillText(snowString(12, 12), stepLeft_2+=0.4, dwn2++);
	ctx.fillText(snowString(12, 10), stepLeft_3+=0.5, dwn3++);
	ctx.fillText(snowString(12, 12), stepLeft_4+=0.6, dwn4++);
	ctx.fillText(snowString(12, 10), stepLeft_5+=0.7, dwn5++);
	
  } else if (canvas.getContext && h>w) { 
	  
	   if ( dwn > (h-140)) { dwn = 0; stepLeft_1 = -600;}	
	  if ( dwn2 > (h-140)) { dwn2 = 0; stepLeft_2 = -650;}	
	  if ( dwn3 > (h-140)) { dwn3 = 0; stepLeft_3 = -600;}	
	  if ( dwn4 > (h-140)) { dwn4 = 0; stepLeft_4 = -650; }	
	  if ( dwn5 > (h-140)) { dwn5 = 0; stepLeft_5 = -600; }	
	  if ( dwn6 > (h-140)) { dwn6 = 0; stepLeft_6 = -600; }	
	  
	  if ( dwn7 > (h-140)) { dwn7 = 0; stepLeft_7 = -600; }	
	  if ( dwn7 > (h-140)) { dwn7 = 0; stepLeft_8 = -600; }	
	  
    let ctx = canvas.getContext('2d');
	ctx.font = fontStyle;
	ctx.fillStyle = "#8988f99B";
	ctx.fillText(snowString(15, 5), stepLeft_1+=0.3, dwn++);	
	ctx.fillText(snowString(15, 6), stepLeft_2+=0.4, dwn2++);
	ctx.fillText(snowString(15, 5), stepLeft_3+=0.5, dwn3++);
	ctx.fillText(snowString(15, 6), stepLeft_4+=0.6, dwn4++);
	ctx.fillText(snowString(15, 5), stepLeft_5+=0.7, dwn5++);
	ctx.fillText(snowString(15, 6), stepLeft_6+=0.8, dwn6++);
	
	ctx.fillText(snowString(15, 5), stepLeft_7+=0.9, dwn7++);
	ctx.fillText(snowString(15, 6), stepLeft_8+=1, dwn8++);
  }
}, 50);
/*
1. 


 */

//----------------------------------------------------------------------------------------------------


let garlands = document.querySelector("#tree_1"); // загоняем в переменную элемент по #АЙДИ
for (let i=1; i<27; i++) { 
let div = document.createElement("div"); //присвоить переменной элемент
div.className = "gar g" + i; 
div.id = "g" + i;
//div.setAttribute('name', "fieldElem"); // даем элементу класс и атрибуты
garlands.append(div); // поместим готовый эл.. в начало блока в переменной ПОЛЕ
}

//----------------------------------------------------------------------------------------------------

let clickCounter = 0;
let stepPeriod = 200;
let actualYear = '';

let now = new Date(); 
let year = now.getFullYear();
let month = now.getMonth(); 

if(month == 0) {
	actualYear = 'С Новым ' + year + ' годом!!!';
	} else if (month == 11) {
		actualYear = 'С Наступающим ' + (year + 1) + ' годом!!!';
	} else {actualYear = 'not now'}


function setLight () {
		
		clickCounter++;	console.log(clickCounter);
		
		 if (clickCounter >= 4) {			 
			 document.querySelector('h1.happy').innerHTML = actualYear;
			 }
	
				let colorDivs = document.querySelectorAll(".gar");
				let colors = ['red', 'lime', '#0080FF', 'yellow', 'Aqua', 'Fuchsia'];
				let randColor; 
				let i = 0; 
				
				let timer = setInterval ( () => {		
				
				if (i < colorDivs.length) {
					 
					 randColor = Math.floor( (Math.random()*6)); 
					 
					 colorDivs[i].style.backgroundColor = colors[randColor];
					 i++;				 
					 
				} else if (i == colorDivs.length) {					
					i = 0;					
				}
				
		 if (clickCounter%2 == 0 && i>2) {			 
			colorDivs[( i - 2 )].style.backgroundColor = "transparent";			 
			colorDivs[0].style.backgroundColor = "transparent";			
			colorDivs[25].style.backgroundColor = "transparent";			 
			 }			
}, stepPeriod);
	
}

document.querySelector('.spruse').onclick = setLight;






