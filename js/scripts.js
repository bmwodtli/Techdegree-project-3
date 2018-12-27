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

    $("#color option[value='tomato']").hide().attr('selected',false);
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();
    $("#color option[value='cornflowerblue']").show().attr('selected',"");
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
}

   if(event.target.value === "heart js")
   {
    console.log('you clicked heart js');

    $("#color option[value='cornflowerblue']").hide().attr('selected',false);
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show().attr('selected',"");
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
   }
  });

//activities section
$('input').on('change',function(){

  if($('input[name="js-frameworks"]').attr('checked',true)){

     $('input[name="express"]').attr('disabled',true);
     $('input[name="express"]').parent().toggleClass('disable');
   }

 else if ($('input[name="js-frameworks"]').attr('checked',false)){

         $('input[name="express"]').removeAttr('disabled');
       }



  });
