document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('ft_list');
	var newBtn = document.getElementById('new-btn');
	var COOKIE_NAME = 'ft_todos';

	function setCookie(name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toUTCString();
		}
		document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
	}

	function getCookie(name) {
		var nameEQ = name + '=';
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var c = cookies[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) === 0) {
				return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
		}
		return null;
	}

	function getTodos() {
		var raw = getCookie(COOKIE_NAME);
		if (!raw) {
			return [];
		}
		try {
			var parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) {
				return parsed;
			}
			return [];
		} catch (e) {
			return [];
		}
	}

	function saveTodos(todos) {
		setCookie(COOKIE_NAME, JSON.stringify(todos), 365);
	}

	function createTodoElement(text) {
		var item = document.createElement('div');
		item.className = 'todo-item';
		item.textContent = text;

		item.addEventListener('click', function () {
			var confirmed = confirm('Remove "' + text + '" from the list?');
			if (confirmed) {
				var todos = getTodos();
				var index = todos.indexOf(text);
				if (index !== -1) {
					todos.splice(index, 1);
					saveTodos(todos);
				}
				item.remove();
			}
		});

		return item;
	}

	function addTodo(text) {
		var item = createTodoElement(text);
		list.insertBefore(item, list.firstChild);
	}

	function loadTodos() {
		var todos = getTodos();
		list.innerHTML = '';
		todos.forEach(function (text) {
			var item = createTodoElement(text);
			list.appendChild(item);
		});
	}

	newBtn.addEventListener('click', function () {
		var text = prompt('New TO DO:');
		if (text !== null && text.trim() !== '') {
			var trimmed = text.trim();
			addTodo(trimmed);
			var todos = getTodos();
			todos.unshift(trimmed);
			saveTodos(todos);
		}
	});

	loadTodos();
});