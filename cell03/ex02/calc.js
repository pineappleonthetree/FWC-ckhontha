document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('calc-form');
	var leftInput = document.getElementById('left');
	var rightInput = document.getElementById('right');
	var operatorSelect = document.getElementById('operator');

function isPositiveInteger(value) {
	return /^\d+$/.test(value);
}

function calculate(left, operator, right) {
	switch (operator) {
		case '+':
			return left + right;
		case '-':
			return left - right;
		case '*':
			return left * right;
		case '/':
			return left / right;
		case '%':
			return left % right;
		default:
			return null;
	}
}

form.addEventListener('submit', function (event) {
	event.preventDefault();

	var leftValue = leftInput.value.trim();
	var rightValue = rightInput.value.trim();
	var operator = operatorSelect.value;

	if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
		alert('Error :(');
		return;
	}

	var left = parseInt(leftValue, 10);
	var right = parseInt(rightValue, 10);

	if ((operator === '/' || operator === '%') && right === 0) {
		alert("It's over 9000!");
	    return;
	}

	var result = calculate(left, operator, right);

	console.log(result);
	alert(result);
});

	setInterval(function () {
		alert('Please, use me...');
	}, 30000);
});