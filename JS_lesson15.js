// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(num) {
// 	if (num > 0 && num < 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// ..
// function isNumberInRange(num) {
// 	return num > 0 && num < 10;
// }
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// var arr = [1, 3, 5, 6, 9, 11, 15, 30];
// var result = [];
// function isNumberInRange(num) {
// 	if (num > 0 && num < 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// for (var i = 0; i < arr.length; i++) {
// 	if (isNumberInRange(arr[i])) {
// 		result.push(arr[i]);
// 	}
// }
// console.log(result);
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(num) {
// 	var num = String(num);
// 	var sum = 0;
// 	for (var i = 0; i < num.length; i++) {
// 		sum += Number(num[i]);
// 	}
// 	return sum;
// }
// alert(getDigitsSum(333));
// Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// function getDigitsSum(num) {
// 	var num = String(num);
// 	var sum = 0;
// 	for (var i = 0; i < num.length; i++) {
// 		sum += Number(num[i]);
// 	}
// 	return sum;
// }
// for (i = 1; i <= 2018; i++) {
// 	if (getDigitsSum(i) == 13) {
// 		console.log(i);
// 	}
// }
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// ..
// function isEven(num) {
// 	return num % 2 == 0;
// }
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// function isEven(num) {
// 	return num % 2 == 0;
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arrEven = [];
// for (var i = 0; i < arr.length; i++) {
// 		if (isEven(arr[i])) {
// 			arrEven.push(arr[i]);
// 		}
// 	}
// alert(arrEven);
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}
alert(getDivisors(12));


