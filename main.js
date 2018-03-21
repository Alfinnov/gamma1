var xhr;

function loginbox_show()
{
 $('.authbox .lbutton').fadeOut(300, function()
 {
  $('.authbox .loginbox').fadeIn(400);
 }); 
 return false;
}


function loginbox_submit()
{
 $('.authbox p.warning').text(); $('.authbox p.warning').css('display: none;')
 
 $('.authbox .loading').height($('.authbox .boxxer').height()).css('display','block');
 
 if (xhr && xhr.readyState != 4) { xhr.abort(); }
 
 xhr=jQuery.ajax({
  url: './login.php', type: "POST", dataType: "html", data: { 'login': $(".authbox input[name='login']").val(), 'passw': $(".authbox input[name='passw']").val() },
  success: function(response)
  {

   if (response)
   {
    if (response.indexOf('{ok}') >= 0) 
    {
     $('.authbox p.warning').text('Авторизовались! Молодцы!'); $('.authbox p.warning').fadeIn(400); 
     $('.authbox .loginbox').fadeOut(400);
    }

    if (response.indexOf('{err}') >= 0) 
    {
     $('.authbox p.warning').text('Для авторизации надо набрать demo/demo'); $('.authbox p.warning').fadeIn(400); 
    }

    if (response.indexOf('{require}') >= 0) 
    {
     $(".authbox input").addClass('require');
     
    }

//    $('.authbox .loading').height($('.authbox .boxxer').height());		// это если проверить хотите, фикс так как высота <p> не учитывалась ранее при расчете
      $('.authbox .loading').css('display','none');
      
      
   } else { }
  }, error: function(response) { alert("Ошибка при отправке формы"); }
 });
 return false;
}