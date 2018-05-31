// Выведите на экран текущий день.
// var date = new Date();
// alert(date.getDate());
// Выведите на экран текущий месяц.
// var date = new Date();
// var months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// var month = date.getMonth();
// alert(months[month]);
// Выведите на экран текущий год.
// var date = new Date();
// alert(date.getFullYear());
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры
// var date = new Date();
// function getZero(num){
// 	if (num > 0 && num < 10) { 
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
// Выведите на экран номер текущего дня недели.
// var date = new Date();
// alert(date.getDate());
// Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски.
// var date = new Date();
// var day = date.getDay();
// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }
// alert(showDay(day));
// Узнайте, какой был 7-го января 2015 года.
// var date = new Date(2015, 0, 7);
// var day = date.getDay();
// var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// alert(days[day]);
// ..
// var date = new Date(2015, 0, 7);
// var day = date.getDay();
// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }
// alert(showDay(day));
// Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
// var date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// alert(minute);
// Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
// var time = Date.parse('1988-03-01T00:00:00');
// var date = new Date();
// var now = date.getTime(); 
// var result = now - time; 
// result = result / (1000 * 60 * 60);
// alert(result);
// Выведите на экран количество секунд с начала дня до настоящего момента времени.
// var date = new Date();
// var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
// var result = Math.floor((date.getTime() - now.getTime()) / 1000);
// alert(result);
// Выведите на экран количество секунд, которое осталось до конца дня.
// function getSecondsToTomorrow() {
//   var now = new Date();
//   var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//   var diff = tomorrow - now;
//   return Math.round(diff / 1000);
// }
// getSecondsToTomorrow();
// Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.





