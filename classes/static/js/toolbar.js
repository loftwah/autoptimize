jQuery( document ).ready(function() {
	jQuery('body').append('<div id="autoptimize-loader-toolbar"></div>');

	jQuery('#wp-admin-bar-autoptimize-default li').click(function(e){
		var id = (typeof e.target.id != 'undefined' && e.target.id) ? e.target.id : jQuery(e.target).parent('li').attr('id');
		var action = '';
		
		if(id == 'wp-admin-bar-autoptimize-delete-cache'){
			action = 'autoptimize_delete_cache';
		}

		if( action == '' ) return;

		jQuery('#autoptimize-loader-toolbar').show();
		jQuery.ajax({
			type: 'GET',
			url: ajaxurl,
			data : {'action': action},
			dataType : 'json',
			cache: false, 
			success: function(data){
				jQuery('#autoptimize-loader-toolbar').hide();
				jQuery('#wp-admin-bar-autoptimize-cache-info .size').html('0.00 B');
				jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');
			}
		});
	});
});