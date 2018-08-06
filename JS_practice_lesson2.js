Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
var inp = document.querySelector('input');
inp.addEventListener('blur', func);

function func() {
	var content = inp.value;
	if (content > 0 && content < 101){
		inp.style.background = 'green';
	} else {
		inp.style.background = 'red';
	}
} 

