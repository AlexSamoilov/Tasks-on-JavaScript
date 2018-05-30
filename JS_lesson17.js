// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
// var arr = [1, 2, 3, 4, 5];

// first(arr);

// function first(arr) {
// 	document.write(arr.shift() + '<br>');
    
// 	if(arr.length != 0) {
// 		first(arr);
// 	}
// }

// ..

// function func(arr) {
// 	alert(arr[0]);
// 	arr.splice(0, 1);
// 	if (arr.length > 0) {
// 		func(arr);
// 	}
// }
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом 
// function sumNum(n) {
//   let result = (n + '').split('').map(function(item){
//     return item * 1;
//   }).reduce(function(sum, item){
//     return sum + item;
//   });
//   n = result;
//   if (result > 9) { 
//     return sumNum(n);
//   }
//   console.log(n);
// }
// sumNum(998);

