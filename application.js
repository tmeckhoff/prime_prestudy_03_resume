$(document).ready(function(){
$('body').children().hide(); 
$('button').show();
$('button').on('click', function(){
		$('body').children().show();
		$(this).remove();

});
});