// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// var arr = [];
// var str = 'x';
// var arrLength = 7;
// for (var i = 0; i < arrLength; i++) {
// 	arr.push(str);
// 	str = str + 'x';
// }
// alert(arr);
// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// var arr = [];
// for (var i = 1; i < 10; i++) {
// 	var str = '';
// 	for (var j = 0; j < i; j++) {
// 		str += i;
// 	}
// 	arr.push(str);
// }
// alert(arr);
// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// function arrayFill(a, b) {
// 	var arr = [];
// 	for (var i = 0; i < b; i++){
// 		arr.push(a);
// 	}
// 	return arr;
// }
// var x = arrayFill('x', 5);
// alert(x);
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Показать решение.
// function func(arr) {
// 	var sum = 0;
// 	for (var i = 0 ; i < arr.length; i++) {
// 		sum += arr[i];
// 		if (sum > 10) {
// 			return i + 1;
// 	}
// }
// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));  
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {
// 	newArr.push(arr[i]);
// }
// alert(newArr);
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// var arr = [[1, 2, 3], [4, 5], [6]];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j];
// 	}
// }
// alert(sum);
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		for (var k = 0; k < arr[i][j].length; k++) {
// 			sum += arr[i][j][k];
// 		}
// 	}
// }
// alert(sum);

