;(function($) {
	"use strict";

	$('.portfolio-examp').masonry({
		itemSelector: '.portfolio-item',
	});

	$('.portfolio-examp').isotope();

	var filters = [];

	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');

		var isChecked = $(this).hasClass('active');

		var filter = $(this).attr('data-filter');

		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});

	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
	    filters.push( filter );
	  }
	}

	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
	    filters.splice( index, 1 );
	  }
	}

	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false
	});





















})(jQuery);  