// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот. 
// function func() {
// 	var elem = document.getElementById('text');
// 	if (elem.checked) {
// 		elem.checked = false;
//  	} else {
// 		elem.checked = true;
//  	}
//   }    

// Даны чекбокс. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.
// function func() {
// 	var elem = document.getElementsByTagName('input');
// 	for (var i = 0; i < elem.length; i++) {
// 		elem[i].checked = true;
//  	}
// }      

// Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац.
// var elem = document.getElementsByTagName('input');
// var p = document.getElementById('text');
// for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('change', func);
// }

// function func() {
// 	if(this.checked) {
// 		p.innerHTML=this.value;
//  	}
// }  

// Спросите у пользователя какие языки (html, css, js, php) он знает с помощью чекбоксов. Выбранные языки должны выводится в абзац ниже через запятую.
// var elem = document.getElementsByTagName('input');
// var p = document.getElementById('text');
// var arr = [];
// for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('change', func);
// }

// function func() {
// 	if(this.checked) {
// 		arr.push(this.value);
// 		p.innerHTML = arr;
//  	}
// }  








