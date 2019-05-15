const add_button = document.querySelector('.add-button');
const search_button = document.querySelector('.add-button');
const display = document.getElementById('display');
const hidden_checkbox = document.getElementById('hide-completed');
const user_search = document.querySelector('.user-search');
const user_input = document.querySelector('.user-input');

const todos = get_todos();


hidden_checkbox.addEventListener('click', ()=>{
	if(hidden_checkbox.checked === true){
		// display_complete_only();
		search_incompleted();
	} else {
		// display_todos(todos);
		search_all();
	}
})
user_search.addEventListener('input', (e)=>{
	if(hidden_checkbox.checked === true){
		search_incompleted();
	} else {
		search_all();
	}
})

user_input.addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_todo();
		display_todos(todos);
	}
})
display_todos(todos);
number_of_todos_left();
