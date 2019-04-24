const add_button = document.querySelector('.add-button');
const search_button = document.querySelector('.add-button');
const display = document.getElementById('display');
const hidden_checkbox = document.getElementById('hide-completed');
const user_search = document.querySelector('.user-search');
const user_input = document.querySelector('.user-input');

const todos = get_todos();


hidden_checkbox.addEventListener('click', ()=>{
	if(hidden_checkbox.checked === true){
		display_complete_only();
	} else {
		display_todos(todos);
	}
})
user_search.addEventListener('input', (e)=>{
		search_todos();
})

user_input.addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_todo();
		display_todos(todos);
	}
})
display_todos(todos);