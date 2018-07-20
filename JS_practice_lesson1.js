// Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.
// var elem = document.getElementById('task');
// elem.addEventListener('click', func);
// var elem1 = document.getElementsByClassName('cls');

// function func() {
// 	var sum = 0;
// 	for (var i = 0; i < elem1.length; i++) {
// 		sum += +elem1[i].value;
// 	}
// 	var newElem = document.getElementById('sum');
// 	newElem.value = sum;
// }    

// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
// var elem = document.getElementById('task');
// elem.addEventListener('click', func);
// var elem1 = document.getElementsByClassName('num');

// function func() {
// 	var sum = 0;
// 	for (var i = 0; i < elem1.length; i++) {
// 		sum += +elem1[i].value;
// 	}
// 	var newElem = document.getElementById('result');
// 	newElem.innerHTML = sum;
// }    
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var sum = 0;
// 	var str = elem.value;
// 	var arr = str.split('');
//   	for (var i = 0; i < arr.length; i++) {
// 		sum += +arr[i];
// 	}
// 	var newElem = document.getElementById('result');
// 	newElem.innerHTML = sum;
// }    
// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var sum = 0;
// 	var str = elem.value;
// 	var arr = str.split(',');
//   	for (var i = 0; i < arr.length; i++) {
// 		sum += +arr[i];
// 	}
// 	var newElem = document.getElementById('result');
// 	newElem.innerHTML = sum/arr.length;
// }    

//  Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.
// var elem = document.getElementById('input');
// elem.addEventListener('focus', func);
// elem.addEventListener('blur', func2);
  
// function func() {
// 	elem.placeholder = '';
// }

// function func2() {
// 	var elem = document.getElementById('input');
// 	var elems = document.getElementsByClassName('name');
// 	if (elem.value !== 0) {
// 		var str = elem.value;
// 		var arr = str.split(' ');
// 		for (var i = 0; i < arr.length; i++) {
// 			elems[i].value = arr[i];
// 		}
// 	}
// 	if (elem.value == 0) {
// 		elem.placeholder = 'Введите Ваши ФИО';
// 		for (var i = 0; i < elems.length; i++) {
// 			elems[i].value = '';
// 		}
// 	}
// }       














