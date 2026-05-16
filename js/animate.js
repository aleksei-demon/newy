// =============================================================================
// НОВЫЙ ДВИЖОК РЕАЛИСТИЧНОГО СНЕГА (ВМЕСТО СТАРОГО КОДА)
// =============================================================================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let w = window.innerWidth;
let h = window.innerHeight;

// Устанавливаем размеры холста один раз и обновляем только при ресайзе
function resizeCanvas() {
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.width = w;
	canvas.height = h;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Настройки снежинок (автоматическая адаптация под мобильные/десктоп)
const numFlakes = w < h ? 60 : 130; // На смартфонах меньше частиц, чтобы не перегружать экран
const flakes = [];
const wind = 0.25; // Легкий наклон ветра вправо

// Инициализация массива частиц
for (let i = 0; i < numFlakes; i++) {
	flakes.push({
		x: Math.random() * w,
		y: Math.random() * h,
		r: Math.random() * 3.2 + 0.8,        // Разброс радиуса (объем)
		speed: Math.random() * 0.2 + 0.01,    // Базовая скорость
		opacity: Math.random() * 0.5 + 0.3,  // Прозрачность (3D глубина)
		swayPhase: Math.random() * 100,      // Уникальная фаза покачивания
		swaySpeed: Math.random() * 0.02 + 0.01 // Скорость виляния из стороны в сторону
	});
}

// Главный цикл отрисовки и физики
function drawSnowParticles() {
	ctx.clearRect(0, 0, w, h);

	for (let i = 0; i < numFlakes; i++) {
		const f = flakes[i];

		// Рисуем пушистую круглую снежинку
		ctx.beginPath();
		ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
		ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
		ctx.fill();

		// Расчет физики полета
		f.y += f.speed + f.r / 3; // Тяжелые (крупные) снежинки падают чуть быстрее
		f.swayPhase += f.swaySpeed;
		f.x += Math.sin(f.swayPhase) * 0.5 + wind; // Магическое покачивание по синусоиде + ветер

		// Если снежинка вышла за границы экрана — аккуратно перерождаем её сверху
		if (f.y > h || f.x > w + 10 || f.x < -10) {
			flakes[i] = {
				x: Math.random() * w,
				y: -10,
				r: f.r,
				speed: f.speed,
				opacity: f.opacity,
				swayPhase: f.swayPhase,
				swaySpeed: f.swaySpeed
			};
		}
	}

	// Запрашиваем следующий кадр у браузера
	requestAnimationFrame(drawSnowParticles);
}

// Запускаем магию
drawSnowParticles();
// =============================================================================






//----------------------------------------------------------------------------------------------------


let garlands = document.querySelector("#tree_1"); // загоняем в переменную элемент по #АЙДИ
for (let i = 1; i < 27; i++) {
	let div = document.createElement("div"); //присвоить переменной элемент
	div.className = "gar g" + i;
	div.id = "g" + i;
	//div.setAttribute('name', "fieldElem"); // даем элементу класс и атрибуты
	garlands.append(div); // поместим готовый эл.. в начало блока в переменной ПОЛЕ
}

//----------------------------------------------------------------------------------------------------

let clickCounter = 0;
let stepPeriod = 500;
let actualYear = '';

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();

if (month == 0) {
	actualYear = 'С Новым ' + year + ' годом!!!';
} else if (month == 11) {
	actualYear = 'С Наступающим ' + (year + 1) + ' годом!!!';
} else { actualYear = 'not now' }


function setLight() {

	clickCounter++; console.log(clickCounter);

	if (clickCounter >= 4) {
		document.querySelector('h1.happy').innerHTML = actualYear;
		document.querySelector('div.star').innerHTML = '✮';
	};
	if (clickCounter >= 4 && (month == 11 || month == 0)) {
		console.log('ok');
		document.querySelector('.gift_1').style.display = "block";
		document.querySelector('.gift_2').style.display = "block";
		document.querySelector('.gift_1shadow').style.display = "block";
		document.querySelector('.gift_2shadow').style.display = "block";

	}

	let colorDivs = document.querySelectorAll(".gar");
	let colors = ['red', 'lime', '#0080FF', 'yellow', 'Aqua', 'Fuchsia'];
	let randColor;
	let i = 0;

	let timer = setInterval(() => {

		if (i < colorDivs.length) {

			randColor = Math.floor((Math.random() * 6));

			colorDivs[i].style.backgroundColor = colors[randColor];
			i++;

		} else if (i == colorDivs.length) {
			i = 0;
		}

		//------
		let blick_1 = document.getElementById('blick_1');
		let blicker_1 = document.getElementById('g23');
		color_1 = window.getComputedStyle(blicker_1).backgroundColor;
		blick_1.style.background = "radial-gradient(circle, " + color_1 + " 0%, rgba(255,255,255,0.0) 100%)";

		let blick_2 = document.getElementById('blick_2');
		let blicker_2 = document.getElementById('g24');
		color_2 = window.getComputedStyle(blicker_2).backgroundColor;
		blick_2.style.background = "radial-gradient(circle, " + color_2 + " 0%, rgba(255,255,255,0.0) 100%)";

		let blick_3 = document.getElementById('blick_3');
		let blicker_3 = document.getElementById('g25');
		color_3 = window.getComputedStyle(blicker_3).backgroundColor;
		blick_3.style.background = "radial-gradient(circle, " + color_3 + " 0%, rgba(255,255,255,0.0) 100%)";

		let blick_4 = document.getElementById('blick_4');
		let blicker_4 = document.getElementById('g26');
		color_4 = window.getComputedStyle(blicker_4).backgroundColor;
		blick_4.style.background = "radial-gradient(circle, " + color_4 + " 0%, rgba(255,255,255,0.0) 100%)";



		//------------

		if (clickCounter % 2 == 0 && i > 2) {
			colorDivs[(i - 2)].style.backgroundColor = "transparent";
			colorDivs[0].style.backgroundColor = "transparent";
			colorDivs[25].style.backgroundColor = "transparent";
		}
	}, stepPeriod);

}

document.querySelector('.spruse').onclick = setLight;






