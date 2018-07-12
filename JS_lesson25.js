// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.clientTop);
// }
// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.clientLeft);
// }
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding. 
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.offsetWidth);
// }
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.offsetHeight);
// }
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.clientWidth);
// }
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.clientHeight);
// }
// Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(getComputedStyle(elem).height + ' ' + getComputedStyle(elem).width);
// }
// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.scrollTop);
// }

// Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.scrollLeft);
// }
// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	elem.scrollTop = 100;
// }
// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	elem.scrollTop += 100;
// }
// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.scrollHeight);
// }
// Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(elem.scrollWidth);
// }
// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	var total_height = elem.scrollHeight;
// 	var needed_height = total_height - 100;
// 	elem.scrollTop = needed_height;
// }
// Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(pageYOffset);
// }
// Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. 
// var elem = document.getElementById('elem');
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	alert(pageXOffset);
// }

// Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	window.scrollTo(300, 500);
// }

// Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	window.scrollBy(0, 300);
// }

// По нажатию на кнопку прокрутите страницу до самого низа.

// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	window.scrollTo(0, document.body.clientHeight);
// }

// По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	window.scrollBy(0, 400);
// }

// По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края.
// var button = document.getElementById('button');
// button.addEventListener('click', func);
// function func() {
// 	var body = document.documentElement;
// 	if (body.scrollHeight - body.scrollTop == body.clientHeight) {
// 		window.scrollTo(0, 100);
// 	}
// }
// Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза.
// var elem = document.getElementById('elem');
// elem.addEventListener('click', func);

// function func() {
// 	var startWidth = this.offsetWidth;
// 	var startHeight = this.offsetHeight;
// 	this.style.width = startWidth * 2 + 'px';
// 	this.style.height = startHeight * 2 + 'px';
// }
