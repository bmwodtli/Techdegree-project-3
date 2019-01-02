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
$('.activities input').on('change',function(){

  if($('input[name="js-frameworks"]').prop('checked')){

       $('input[name="express"]').attr('disabled',true);
       $('input[name="express"]').parent().addClass('disable');
   }
  else{
       $('input[name="express"]').removeAttr('disabled');
       $('input[name="express"]').parent().removeClass('disable');
     }

  if($('input[name="express"]').prop('checked')){

       $('input[name="js-frameworks"]').attr('disabled',true);
       $('input[name="js-frameworks"]').parent().addClass('disable');
      }
  else{
       $('input[name="js-frameworks"]').removeAttr('disabled');
       $('input[name="js-frameworks"]').parent().removeClass('disable');
        }

  if($('input[name="js-libs"]').prop('checked')){

       $('input[name="node"]').attr('disabled',true);
       $('input[name="node"]').parent().addClass('disable');
         }
   else{
       $('input[name="node"]').removeAttr('disabled');
       $('input[name="node"]').parent().removeClass('disable');
           }

  if($('input[name="node"]').prop('checked')){

       $('input[name="js-libs"]').attr('disabled',true);
       $('input[name="js-libs"]').parent().addClass('disable');
          }
    else{
       $('input[name="js-libs"]').removeAttr('disabled');
       $('input[name="js-libs"]').parent().removeClass('disable');
          }


  });
