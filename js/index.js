$(document).ready(function(){$('.reg_table').show();$('.toggle_login').show();var window_width=$(window).width();$('.reg_table tr').css('width',window_width);$('.toggle_login').click(function(){$('.load_submit').hide();$('.reg_table').hide();$('.show_error').hide();$('.load_error').hide();$('.login_table').show();$('.toggle_login').hide();$('.toggle_reg').show();});$('.toggle_reg').click(function(){$('.login_table').hide();$('.reg_table').show();$('.toggle_reg').hide();$('.toggle_login').show();});$('.r_name').focus(function(){var r_name=$(this).val().length;if(r_name==0){$('.name_img').fadeOut(300);}}).focusout(function(){var r_name=$(this).val().length;if(r_name==0){$('.name_img').fadeIn(300);}});$('.r_email').focus(function(){var r_email=$(this).val().length;if(r_email==0){$('.email_img').fadeOut(300);}}).focusout(function(){var r_email=$(this).val().length;if(r_email==0){$('.email_img').fadeIn(300);}});$('.password').focus(function(){var password=$(this).val();$('.password_img').fadeOut(300);}).focusout(function(){var password=$(this).val().length;if(password==0){$('.password_img').fadeIn(300);}else if(password!=0){$('.password_img').fadeOut(300);}});$('.r_password').focus(function(){$('.r_password_img').fadeOut(300);}).focusout(function(){var r_password=$(this).val().length;if(r_password==0){$('.r_password_img').fadeIn(300);}else if(r_password!=0){$('.r_password_img').fadeOut(300);}});$('.login_email').focus(function(){var l_email=$(this).val().length;if(l_email==0){$('.l_email_img').fadeOut(300);}}).focusout(function(){var l_email=$(this).val().length;if(l_email==0){$('.l_email_img').fadeIn(300);}});$('.login_password').focus(function(){var l_password=$(this).val();$('.l_password_img').fadeOut(300);}).focusout(function(){var l_password=$(this).val().length;if(l_password==0){$('.l_password_img').fadeIn(300);}else if(l_password!=0){$('.l_password_img').fadeOut(300);}});
$('.index_search').focus(function(){
	var index_search_val=$(this).val().length;
	if(index_search_val==0){
		$('.index_search_img').fadeOut(300);
	}
}).focusout(function(){
	var index_search_val=$(this).val().length;
	if(index_search_val==0){
		$('.index_search_img').fadeIn(300);
	}
});

$('.r_email').tooltip();
});