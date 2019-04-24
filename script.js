const add_button = document.querySelector('.add-button');
const search_button = document.querySelector('.add-button');
const display = document.getElementById('display');

const user_input = document.querySelector('.user-input');

const todos = get_todos();



user_input.addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_todo();
		display_todos();
	}
})
display_todos();