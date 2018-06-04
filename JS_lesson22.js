// Создайте отсчет от 0 до бесконечности:
// function go(){
// 			window.setInterval(timer, 1000);
// 		}
// 		function timer(){
// 			var test = document.getElementById('test');
// 			test.innerHTML = parseInt(test.innerHTML)+1;
// 		}
// Создайте отсчет с кнопкой остановки:
// function go(){
// 			window.timerId = window.setInterval(timer, 500);
// 			document.getElementById('go').disabled = true;
// 			document.getElementById('stop').disabled = false;
// 		}
// 		function stop(){
// 			window.clearInterval(window.timerId);
// 			document.getElementById('go').disabled = false;
// 			document.getElementById('stop').disabled = true;
// 		}
// 		function timer(){
// 			var test = document.getElementById('test');
// 			test.innerHTML = parseInt(test.innerHTML)+1;
// 		}
// Создайте тикающие часики:
// 	function go(){
// 			window.timerId = window.setInterval(timer, 500);
// 		}
// 		function timer(){
// 			var clock = document.getElementById('clock');
// 			var date = new Date();
// 			clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
// 		}
// 		function addZero(num){
// 			if(num <=9) return '0'+num;
// 				else return num;
// 		}
// Создайте таймер обратного отсчета:
// function go(){
// 			window.timerId = window.setInterval(timer, 300);
// 			document.getElementById('go').disabled = true;
// 		}
// 		function stop(){
// 			window.clearInterval(window.timerId);
// 		}
// 		function timer(){
// 			var test = document.getElementById('test');
// 			var number = parseInt(test.innerHTML)-1;
// 			test.innerHTML = number;
// 			if(number == 0) {
// 				stop();
// 				var timetStop = document.getElementById('stop');
// 				timetStop.innerHTML = 'Обратный отсчет завершен.';
// 			}
// 		}
