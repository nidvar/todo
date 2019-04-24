const get_todos = ()=>{
	const from_storage = JSON.parse(localStorage.getItem('todos'));
	if(from_storage!= null){
		return from_storage
	} else {
		return [];
	}
}

const add_todo = ()=>{
	todos.push({
		text: user_input.value,
		completed: false,
		id: Math.random() * Math.random() * Math.random()
	});
	localStorage.setItem('todos', JSON.stringify(todos));
	user_input.value = '';
}

const display_todos = (array)=>{
	display.innerHTML = '';
	array.forEach((a)=>{

		const w = document.createElement('div');
		display.appendChild(w);
		w.style = 'margin:10px;'

		const z = document.createElement('input');
		z.type = 'checkbox';
		if(a.completed === true){
			z.checked = true
		}
		z.addEventListener('click', ()=>{
			if(z.checked === true){
				todo_is_completed(a.id);
				display_complete_only();
			} else {
				todo_is_incomplete(a.id);
			}
			localStorage.setItem('todos', JSON.stringify(todos));
			if(a.completed === true){
				x.classList.add('cross-out');
			} else {
				x.classList.remove('cross-out');
			}
		})
		z.style = 'margin-right:5px;'
		w.appendChild(z);

		const x = document.createElement('span');
		x.textContent = a.text;
		if(a.completed === true){
			x.classList.add('cross-out');
		}
		w.appendChild(x);

		const y = document.createElement('button');
		y.textContent = 'x';
		y.addEventListener('click', ()=>{
			delete_todo(a.id);
			localStorage.setItem('todos', JSON.stringify(todos));
			display_todos(todos);
		})
		y.classList.add('btn');
		y.classList.add('btn-warning');
		y.style = 'margin-left:10px; padding:0 4px 0 4px;'
		x.appendChild(y);
	})
}

const delete_todo = (the_id)=>{
	const x = todos.findIndex((a)=>{
		return a.id === the_id;
	})
	todos.splice(x, 1);
}

const todo_is_completed = (the_id)=>{
	const x = todos.findIndex((a)=>{
		return a.id === the_id;
	})
	todos[x].completed = true;
}

const todo_is_incomplete = (the_id)=>{
	const x = todos.findIndex((a)=>{
		return a.id === the_id;
	})
	todos[x].completed = false;
}

const display_complete_only = ()=>{
	const x = todos.filter((a)=>{
		return a.completed === false
	})
	display_todos(x);
}