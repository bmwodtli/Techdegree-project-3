// on page load focus cursor on first input field using jquery
$('#name').focus();
// hide text area
$('#other-title').hide();
// when other selected from menu show the textarea
$('#title').on('click',function(event){
// if other is clicked display textarea
if(event.target.value === "other"){
  $('#other-title').show();
}else{
  $('#other-title').hide();
}
});

//event handler for selected tshirt theme
$('#design').on('click',function(event){

  if(event.target.value === "js puns")
  {
    // show button was clicked in console
    console.log('you clicked js puns');

    $("#color option[value='tomato']").hide();
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
}

   if(event.target.value === "heart js")
   {
    console.log('you clicked heart js');

    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
  }
  /*if(event.target.value !== "js puns" && ||"heart js"){

    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();

  }*/
});
