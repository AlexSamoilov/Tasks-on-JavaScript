// Дана строка 'js'. Сделайте из нее строку 'JS'.
// var str = 'js';
// alert(str.toUpperCase());
// Дана строка 'JS'. Сделайте из нее строку 'js'.
// var str = 'JS';
// alert(str.toLowerCase());
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. 
// var str = 'я учу javascript!';
// alert(str.length);
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// var str = 'я учу javascript!';
// alert(str.substr(2, 3) + ' ' + str.substr(6, 10));
// alert(str.substring(2, 5) + ' ' + str.substring(6, 16));
// alert(str.slice(2, 6) + ' ' + str.slice(6, 16));
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// var str = 'я учу javascript!';
// alert(str.indexOf('учу'));
// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
// var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quam!';
// var result;
// var n = 17;
// if (n < str.length) {
// 	result = str.substr(0, n-1) + ' ...';
// } else {
// 	result = str;
// };
// alert(result);
// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// var str = 'Я-учу-javascript!';
// var newStr = str.replace(/-/g, '!');
// alert(newStr);
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
// var str = 'я учу javascript!';
// var arr = str.split(' ');
// alert(arr);
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// var date = '2025-12-31';
// var arr = date.split('-');
// var newDate = arr[2] + '.' + arr[1] + '.'+arr[0];
// alert(newDate);
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'
// var arr = ['я', 'учу', 'javascript', '!'];
// var str = arr.join('+');
// alert(str);
// Преобразуйте первую букву строки в верхний регистр.
// var str = 'я учу javascript';
// var newStr = str[0].toUpperCase() + str.substr(1);
// var secStr = str.slice(0, 1).toUpperCase() + str.slice(1);
// alert(newStr);
// alert(secStr);
// Преобразуйте первую букву каждого слова строки в верхний регистр.
// var str = 'я учу javascript!';
// var arr = str.split(' ');
// for (var i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// var newStr = arr.join(' ');
// alert(newStr);
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
// var str = 'var_test_text';
// var arr = str.split('_');
// for (var i = 1; i < arr.length; i++) {
// 	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// var newStr = arr.join('');
// alert(newStr);
