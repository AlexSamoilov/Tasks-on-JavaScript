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

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).
// var elem = document.getElementById('input');
//  elem.addEventListener('blur', bigLetter);

// function uswords(str) {
// 	var arr = str.split(' ');
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i].split('');
// 		arr[i][0] = arr[i][0].toUpperCase();
// 		arr[i] = arr[i].join('');
// 	}
// 	str = arr.join(' ');
// 	return str;
// }

// function bigLetter() {
// 	elem.value = uswords(elem.value);
// }  

// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте
// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var num = 0;
// 	var str = elem.value;
// 	var arr = str.split(' ');
// 	for (var i = 0; i < arr.length; i++) {
// 		num += 1;
//  	}
// 	var p = document.getElementById('result');
// 	p.innerHTML = num;
// }    

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31. 
// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var arr2 = [];
// 	var str = elem.value;
// 	var arr = str.split('.');
// 	arr2 = arr.reverse();
// 	var str1 = arr2.join('-');
// 	elem.value = str1;
// } 

// Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет.
// var elem = document.getElementById('num');
// var elem1 = document.getElementById('btn');
// this.addEventListener('click', func);

// function func() {
// 	var year = elem.value;
// 	var date = new Date();
// 	var yearNow = date.getFullYear();
// 	var p = document.getElementById('result');
// 	p.innerHTML = yearNow - year;
// } 

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// var elem = document.getElementById('num');
// elem.addEventListener('click', func);

// function func() {
// 	var dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//  	var str = elem.value;
// 	var arr = str.split('.');
// 	var arr2 = arr.reverse();
// 	var str1 = arr2.join(',')
// 	var date = new Date(str1);
// 	var day = date.getDay();
// 	var p = document.getElementById('text');
// 	p.innerHTML = dayWeak[day];
// }
// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// var elem = document.getElementById('num');
// var btn = document.getElementById('but');
// btn.addEventListener('click', func);

// function func() {
// 	var str = elem.value;
//  	var arr = str.split('');
// 	var arr2 = str.split('').reverse();
// 	for(var i = 0; i < arr.length; i++) {
// 		if(arr[i]!== arr2[i]) { 
// 			alert('это слово не палиндром');
// 			return;
// 		}
//   	}
// 	alert('это слово палиндром');
// 	return;
// }

// Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3.
// var elem = document.getElementById('num');
// elem.addEventListener('click', func);

// function func() {
// 	var str = elem.value;
// 	var arr = str.split('');
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] == 3) {
// 			alert('это число содержит 3');
// 			return;
//   		}
// 	}
// 	alert('это число не содержит 3');
// 	return;
// }

// Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// var elem = document.getElementsByTagName('p');
// var btn= document.getElementById('btn');
// btn.addEventListener('click', func);

// function func() {
// 	for (var i = 0; i< elem.length; i++) {
// 		elem[i].innerHTML = elem[i].innerHTML+' '+(i + 1);
// 	}
//  }   

// Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.
// var elem = document.getElementsByTagName('p');
// var btn= document.getElementById('btn');
// btn.addEventListener('click', func);

// function func() {
// 	var arr2 = [];
//  	for (var i = 0; i< elem.length; i++) {
// 		arr2[i] = +elem[i].innerHTML;
// 	}
// 	var input = document.getElementById('num');
// 	input.value = arr2.sort(sortArr);
//    }

// function sortArr(a, b) {
// 	if (a > b) {
// 		return -1;
// 	}
// 	if (a < b) {
// 		return -1;
//  	}
// 	if (a == b) {
// 		return 0;
//  	}
//  }    

// Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках.
// var elem = document.getElementsByTagName('a');

// function start() {
// 	for (var i = 0; i < elem.length; i++) {
// 		elem[i].innerHTML = elem[i].innerHTML + '(' +elem[i].href+')';
// 	}
//  }  

// Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
//  var elem = document.getElementsByTagName('a');

// function start() {
// 	for (var i = 0; i < elem.length; i++) {
// 		if (elem[i].href.indexOf('http://') == 0) {
//  			elem[i].innerHTML = elem[i].innerHTML + 'стрелка';
// 		}
// 	}
//  }    

// Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// var elem = document.getElementsByTagName('a');
// for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('click', func);
// }

// function func() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// } 

// Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза.
// var elem = document.getElementsByTagName('img');
// for (var i = 0; i < elem.length; i++){
// 	elem[i].addEventListener('click', func);
//  }

// function func() {
// 	this.height = this.height * 2;
//  }    


 

