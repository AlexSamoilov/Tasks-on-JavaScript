// Дан элемент #elem. Добавьте ему класс www.
// var elem = document.getElementById('elem');
// elem.classList.add('www');
// Дан элемент #elem. Удалите у него класс www.
// var elem = document.getElementById('elem');
// elem.classList.remove('www');
// Дан элемент #elem. Проверьте наличие у него класса www.
// var elem = document.getElementById('elem');
// var checkClass = elem.classList.contains('www');
// alert(checkClass);
// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
// var elem = document.getElementById('elem');
// elem.classList.toggle('www');
// Дан элемент #elem. Узнайте количество его классов.
// var elem = document.getElementById('elem');
// var length = elem.classList.length;
// alert(length);
// Дан элемент #elem. Выведите последовательно алертом его классы.
// var elem = document.getElementById('elem');
// var classNames = elem.classList;
// for (var i = 0; i < classNames.length; i++) {
// 	alert(classNames[i]);
// }
// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
// var elem = document.getElementById('elem');
// elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid black;';
// Дан элемент #elem. По клику на него выведите название его тега.
// function func() {
// 	var elem = document.getElementById('elem');
// 	alert(elem.tagName);
// }
// Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
// function func() {
// 	var elem = document.getElementById('elem');
// 	alert(elem.tagName.toLowerCase());
// }
// Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
// var elems = document.querySelectorAll('.www');
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].innerHTML = elems[i].innerHTML + elems[i].tagName.toLowerCase();
// }
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.
// var ol = document.getElementById('ol');
// var li = document.createElement('li');
// li.innerHTML = 'пункт';
// elem.appendChild(li);
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// var ul = document.getElementById('ul');
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
// 	var li = document.createElement('li');
//  	li.innerHTML = arr[i];
// 	ul.appendChild(li);
// }
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
// var ul = document.getElementById('ul');
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
// 	var li = document.createElement('li');
//  	li.innerHTML = arr[i];
// 	li.addEventListener('click', func); //привяжем событие
// 	ul.appendChild(li);
// }
// function func() {
// 	alert(this.innerHTML);
// }
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
