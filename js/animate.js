let h = ( document.documentElement.clientHeight );
let w = ( document.documentElement.clientWidth ) - 3;

console.log ( h, w );

let fontStyle = "25px Christmas Mouse";

let stepLeft_1 = 100;
let stepLeft_2 = 250;
let stepLeft_3 = 150;
let stepLeft_4 = 100;
let stepLeft_5 = 250;
let stepLeft_6 = 150;

let rowSpace = 200;

function snowString(snows = 7, spaces = 30) {
	let snowsAmount = "";
	
	
	for (let i = 0; i < snows; i++){
		snowsAmount += "e";
		
		for (let k = 0; k < spaces; k++){
			snowsAmount += " ";
		}
	}
	
	return snowsAmount;
}

if (h>w) {
	fontStyle = "20px Christmas Mouse";   rowSpace = 300;	
		stepLeft_1 = -210;
		stepLeft_2 = -250;
		stepLeft_3 = -210;
		stepLeft_4 = -250;
		stepLeft_5 = -210;
		stepLeft_6 = -250;
	}

let dwn = 0;						
let dwn2 = -((h-rowSpace) / 4);		
let dwn3 = -((h-rowSpace) / 4)*2;	
let dwn4 = -((h-rowSpace) / 4)*3;	
let dwn5 = -((h-rowSpace) / 4)*4;	
let dwn6 = -((h-rowSpace) / 4)*5;	

let canvas = document.getElementById('canvas');

setInterval( function draw() { 
  
  
  canvas.width = (window.innerWidth) - 3;
  canvas.height = (window.innerHeight) - 3; 
  

  if (canvas.getContext && h<w) {
	  if ( dwn > (h-140)) { dwn = 0; stepLeft_1 = -100;}	
	  if ( dwn2 > (h-140)) { dwn2 = 0; stepLeft_2 = 100;}	
	  if ( dwn3 > (h-140)) { dwn3 = 0; stepLeft_3 = -150;}	
	  if ( dwn4 > (h-140)) { dwn4 = 0; stepLeft_4 = 100; }	
	  if ( dwn4 > (h-140)) { dwn5 = 0; stepLeft_5 = -600; }	
    let ctx = canvas.getContext('2d');
	ctx.font = fontStyle;
	ctx.strokeStyle = "#8988f99B";
	ctx.strokeText(snowString(7, 27), stepLeft_1+=0.1, dwn++);	
	ctx.strokeText(snowString(7, 25), stepLeft_2+=(-0.3), dwn2++);
	ctx.strokeText(snowString(7, 30), stepLeft_3+=0.4, dwn3++);
	ctx.strokeText(snowString(7, 25), stepLeft_4+=(-0.3), dwn4++);
	ctx.strokeText(snowString(7, 32), stepLeft_5+=0.4, dwn5++);
	
  } else if (canvas.getContext && h>w) { //console.log(dwn, dwn2, dwn3, dwn4, dwn5, dwn6);
	  
	   if ( dwn > (h-140)) { dwn = 0; stepLeft_1 = -200;}	
	  if ( dwn2 > (h-140)) { dwn2 = 0; stepLeft_2 = -250;}	
	  if ( dwn3 > (h-140)) { dwn3 = 0; stepLeft_3 = -200;}	
	  if ( dwn4 > (h-140)) { dwn4 = 0; stepLeft_4 = -250; }	
	  if ( dwn5 > (h-140)) { dwn5 = 0; stepLeft_5 = -200; }	
	  if ( dwn5 > (h-140)) { dwn5 = 0; stepLeft_6 = -200; }	
    let ctx = canvas.getContext('2d');
	ctx.font = fontStyle;
	ctx.strokeStyle = "#8988f99B";
	ctx.strokeText(snowString(7, 17), stepLeft_1+=0.1, dwn++);	
	ctx.strokeText(snowString(7, 15), stepLeft_2+=(-0.3), dwn2++);
	ctx.strokeText(snowString(7, 10), stepLeft_3+=0.4, dwn3++);
	ctx.strokeText(snowString(7, 15), stepLeft_4+=(-0.3), dwn4++);
	ctx.strokeText(snowString(7, 12), stepLeft_5+=0.4, dwn5++);
	ctx.strokeText(snowString(7, 10), stepLeft_6+=(-0.4), dwn6++);
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
				let colors = ['red', 'lime', 'blue', 'yellow', 'Aqua', 'Fuchsia'];
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






