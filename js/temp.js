		/**
		 *	For Responsive menu
		 */
		$(window).resize(function(){
			var v = viewport();
			var w = v['width'];
			if ( w > 1024) {
				$('#main-menu').show();
			}
			else {
				$('#main-menu').hide();
			}
		});

		function viewport() {
		    var e = window, a = 'inner';
		    if (!('innerWidth' in window )) {
		        a = 'client';
		        e = document.documentElement || document.body;
		    }
		    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}