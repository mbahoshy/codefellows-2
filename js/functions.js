function addTodo () {
	//assigns input text to variable
	x = $('input').val();
	if (x) {
		//if input text exists, appends todo to div
		$('#todo_container').append('<div class="todo">' + x + '<img class="delete" src="delete.png"	/></div>');
	} else {
		alert('Please input text');
	}
	//clear input field
	$('input').val("");
}

//deletes todo
function deleteTodo () {
	$(this).parent().remove();
}

$(document).ready(function(){
	//assign click events
	$('#todo_container').on('click', '.delete', deleteTodo);
	$('#add_button').click(addTodo);
});