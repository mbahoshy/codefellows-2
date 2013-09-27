function addTodo () {
	x = $('input').val();
	if (x) {
		$('#todo_container').append('<div class="todo">' + x + '<img class="delete" src="delete.png"	/></div>');
	}
	$('input').val("");
}

function deleteTodo () {
	$(this).parent().remove();
}

$(document).ready(function(){
	$('#todo_container').on('click', '.delete', deleteTodo);
	$('#add_button').click(addTodo);
});