// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
// var str ='abcde abcde abcde';
// var newArr = [];

// function ucfirst(str) {
// 	return str[0].toUpperCase() + str.substr(1);
// }

// var arr = str.split(' ');
// for (var i = 0; i < arr.length; i++) {
// 	newArr.push(ucfirst(arr[i]));
// }

// var newStr = newArr.join(' ');
// alert(newStr);
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// var str = 'var_text_hello';
// var newArr = [];
// function ucfirst(str) {
// 	return str[0].toUpperCase() + str.substr(1);
// }
// var arr = str.split('_');
// newArr.push(arr[0]);
// for (var i = 1; i < arr.length; i++) {
// 	newArr.push(ucfirst(arr[i]));
// }
// var newStr = newArr.join('');
// alert(newStr);
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
// function inArray(str, arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if ((arr[i]) === str) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// var str = 'нафнаф';
// var arr = ['нифниф', 'нафнаф', 'нуфнуф'];
// alert(inArray(str, arr));
// Дана строка, например, '123456'. Сделайте из нее '214365'.

