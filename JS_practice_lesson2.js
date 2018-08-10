// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// var inp = document.querySelector('input');
// inp.addEventListener('blur', func);

// function func() {
// 	var content = inp.value;
// 	if (content > 0 && content < 101){
// 		inp.style.background = 'green';
// 	} else {
// 		inp.style.background = 'red';
// 	}
// } 

// Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут.
// var inp = document.querySelector('input');
// document.documentElement.addEventListener('mouseup', func);

// function func() {
// 	var content = window.getSelection().toString();
// 	inp.value = content;
// }   

// Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета. 
// var elems = document.getElementsByTagName('p');
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener('click', func);
// }

// function func() {
// 	var inp = document.querySelector('input');
// 	inp.value = Number(inp.value) + 1;
// } 

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// var inp = document.getElementById('result');
// var p = document.getElementsByTagName('p');
// for (var i = 0; i < p.length; i++) {
// 	p[i].addEventListener('click', func);
//  }

// var count = 0;
// function func() {
// 	count++;
// 	inp.value = count;
// } 

// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// var inp = document.getElementById('result');

// function start() {
// 	window.setInterval(timer, 1000);
//  }

// function timer() {
// 	inp.value = inp.value * inp.value;
//  }   






