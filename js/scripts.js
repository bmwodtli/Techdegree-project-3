// on page load focus cursor on first input field using jquery
$('#name').focus();
// hide text area
$('#other-title').hide();
// when other selected from menu show the textarea
$('#title').on('click',function(e){

if(e.target.value === "other"){
  $('#other-title').show();
}else{
  $('#other-title').hide();
}
});
