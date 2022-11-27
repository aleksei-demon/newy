let h = ( document.documentElement.clientHeight );
let w = ( document.documentElement.clientWidth ) - 3;

console.log ( h, w );

let fontStyle = "45px verdana";
let fontStyle1 = "25px verdana";

let zstepLeft_1 = 100;
let zstepLeft_2 = 140;
let zstepLeft_3 = 90;
let zstepLeft_4 = 130;
let zstepLeft_5 = 160;
let zstepLeft_6 = 110;

let stepLeft_1 = 100;
let stepLeft_2 = 250;
let stepLeft_3 = 150;
let stepLeft_4 = 250;
let stepLeft_5 = 150;

let rowSpace = 200;

function snowString(snows = 10, spaces = 12) {
	let snowsAmount = "";
	for (let i = 0; i < snows; i++){
		snowsAmount += "*";
		
		for (let k = 0; k < spaces; k++){
			snowsAmount += " ";
		}
	}
	
	return snowsAmount;
}

if (h>w) {
	fontStyle = "30px verdana"; let fontStyle1 = "20px verdana"; stepLeft_1 = 10; stepLeft_2 = 25; rowSpace = 400;
	zstepLeft_1 = 10; zstepLeft_2 = 50; zstepLeft_3 = 20; zstepLeft_4 = 60; zstepLeft_5 = 30; zstepLeft_6 = 40;
	}

let dwn = 0;						let zdown = 0;
let dwn2 = -((h-rowSpace) / 4);		let zdown2 = -((h-rowSpace) / 4);
let dwn3 = -((h-rowSpace) / 4)*2;	let zdown3 = -((h-rowSpace) / 4)*2;
let dwn4 = -((h-rowSpace) / 4)*3;	let zdown4 = -((h-rowSpace) / 4)*3;
let dwn5 = -((h-rowSpace) / 4)*4;	let zdown5 = -((h-rowSpace) / 4)*4;
									let zdown6 = -((h-rowSpace) / 4)*5;

let canvas = document.getElementById('canvas');

setInterval( function draw() { 
  
  
  canvas.width = (window.innerWidth) - 3;
  canvas.height = (window.innerHeight) - 3; 
  

  if (canvas.getContext) {
	  if ( dwn > (h-140)) { dwn = 0; stepLeft_1 = -100;}	
	  if ( dwn2 > (h-140)) { dwn2 = 0; stepLeft_2 = -200;}	
	  if ( dwn3 > (h-140)) { dwn3 = 0; stepLeft_3 = -150;}	
	  if ( dwn4 > (h-140)) { dwn4 = 0; stepLeft_4 = -500; }	
	  if ( dwn4 > (h-140)) { dwn5 = 0; stepLeft_5 = -600; }	
    let ctx = canvas.getContext('2d');
	ctx.font = fontStyle;
	ctx.strokeStyle = "#8988f99B";
	ctx.strokeText(snowString(5, 14), stepLeft_1+=0.1, dwn++);	
	ctx.strokeText(snowString(5, 14), stepLeft_2+=0.2, dwn2++);
	ctx.strokeText(snowString(5, 14), stepLeft_3+=0.4, dwn3++);
	ctx.strokeText(snowString(5, 14), stepLeft_4+=0.15, dwn4++);
	ctx.strokeText(snowString(5, 14), stepLeft_5+=0.3, dwn5++);
	
		if ( zdown > (h-140)) { zdown = 0; }
		if ( zdown2 > (h-140)) { zdown2 = 0 }
		if ( zdown3 > (h-140)) { zdown3 = 0 }
		if ( zdown4 > (h-140)) { zdown4 = 0 }
		if ( zdown5 > (h-140)) { zdown5 = 0 }
		if ( zdown5 > (h-140)) { zdown6 = 0 }
	let ztx = canvas.getContext('2d');
	ztx.font = fontStyle1;
	ztx.strokeStyle = "#8988f99B";
	ztx.strokeText(snowString(), zstepLeft_2, zdown+=0.5);	
	ztx.strokeText(snowString(), zstepLeft_1, zdown2+=0.5);
	ztx.strokeText(snowString(), zstepLeft_2, zdown3+=0.5);
	ztx.strokeText(snowString(), zstepLeft_1, zdown4+=0.5);
	ztx.strokeText(snowString(), zstepLeft_2, zdown5+=0.5);
	ztx.strokeText(snowString(), zstepLeft_1, zdown6+=0.5);
	
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






