// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
// var ul = document.getElementById('ul');
// var test = document.getElementById('elem');

// var li = document.createElement('li');
// li.innerHTML = '!!!';

// ul.insertBefore(li, test);

// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeBegin','<span>!!!</span>');        

// Дан элемент #elem. Вставьте после него span с текстом '!!!'. 

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterEnd','<span>!!!</span>');

// Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterBegin','<span>!!!</span>');

// Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

// var elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeEnd','<span>!!!</span>');

// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

// var elem = document.getElementById('elem');
// elem.firstElementChild.style.color = 'red'; 

// Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// var elem = document.getElementById('elem');
// elem.lastElementChild.style.color = 'red';

// Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// var elem = document.getElementById('elem');
// for (var i = 0; i < elem.children.length; i++) {
// 	elem.children[i].innerHTML += ' !';
// }
// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
// var elem = document.getElementById('elem');
// var prev = elem.previousElementSibling;
// prev.innerHTML = prev.innerHTML + '!';
// Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
// var elem = document.getElementById('elem');
// var prev = elem.nextElementSibling;
// prev.innerHTML = prev.innerHTML + '!';
// Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
// var elem = document.getElementById('elem');
// var prev = elem.nextElementSibling.nextElementSibling;
// prev.innerHTML = prev.innerHTML + '!';

// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
// var elem = document.getElementById('elem');
// elem.parentElement.style.color = 'red';

// Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
// var elem = document.getElementById('elem');
// elem.parentElement.parentElement.style.color = 'red';

// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	var parent = document.getElementById('parent');
// 	var child = document.getElementById('child');
// 	parent.removeChild(child);
// }
// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
// var elem = document.getElementById('button');
// elem.addEventListener('click', func);

// function func() {
// 	var parent = document.getElementById('parent');
// 	parent.removeChild(parent.lastElementChild);
// }

// Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
// var elem = document.getElementById('elem');
// elem.addEventListener('click', func);

// function func() {
// 	this.parentElement.removeChild(this);
// }

// Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
// var elems = document.getElementsByTagName('li');
// for (var i = 0; i < elems.length; i++) {
//  	elems[i].addEventListener('click', func);
// }

// function func() {
// 	this.parentElement.removeChild(this);
// }

// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

// var input = document.getElementById('input');
// var button = document.getElementById('button');

// button.addEventListener('click', func);

// function func(){
// 	var clone = input.cloneNode(true);
// 	input.parentElement.appendChild(clone);
// }

// Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
// var arr = [1, 2, 3];
// var ul = document.createElement('ul');
// for (var i = 0; i < arr.length; i++) {
// 	var li = document.createElement('li');
//  	li.innerHTML = arr[i];
// 	ul.appendChild(li);
// }
// document.body.appendChild(ul);
// Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func(){
// 	var parent = button.parentElement;
// 	var newInput = document.createElement('input');
// 	parent.appendChild(newInput);
// }
// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
// var input = document.getElementById('input');
// input.addEventListener('blur', func);

// function func(){
// 	var digits = this.value.split(''); //массив цифр
// 	var parent = input.parentElement;

// 	for (var i = 0; i < digits.length; i++) {
// 		var newInput = document.createElement('input');
// 		newInput.value = digits[i];
// 		parent.appendChild(newInput);
// 	}
// }
// Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
// var button = document.getElementById('button');
// button.addEventListener('click', func);

// function func() {
// 	this.parentElement.style.display = 'none';
// }

