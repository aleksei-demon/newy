let h = ( document.documentElement.clientHeight );
let hei = (h - 3);
let w = ( document.documentElement.clientWidth ) - 3;

console.log ( h, w );

let dwn = 0;
let dwn2 = -((h-100) / 4);
let dwn3 = -((h-100) / 4)*2;
let dwn4 = -((h-100) / 4)*3;

setInterval( function draw() { 
  var canvas = document.getElementById('canvas');
  
  canvas.width = (window.innerWidth) - 3;
  canvas.height = (window.innerHeight) - 3; 
  

  if (canvas.getContext) {
	  if ( dwn > (h-100)) { dwn = 0}
	  if ( dwn2 > (h-100)) { dwn2 = 0 }
	  if ( dwn3 > (h-100)) { dwn3 = 0 }
	  if ( dwn3 > (h-100)) { dwn4 = 0}
    var ctx = canvas.getContext('2d');
	ctx.font = "50px verdana";
	ctx.strokeStyle = "#8988f99B";
	ctx.strokeText("	*									*									*									*											*", 100, dwn++);	
	ctx.strokeText("*									*									*									*											*", 250, dwn2++);
	ctx.strokeText("	*							*									*											*											*", 100, dwn3++);
	ctx.strokeText("*							*									*											* 											*", 250, dwn4++);
		  }
}, 50);


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






