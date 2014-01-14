var ls = {
	init: function () {
		this.setDynamicHeights();
		this.initScrollParallax();
	},

	setDynamicHeights: function () {
		var $window = $(window);
		var $helloBlock = $('#hello');
		var $wordsBlock = $helloBlock.find('.words-block');

		$helloBlock.css('height', $window.height());

		$window.scroll(function () {
			$helloBlock.css('height', $window.height());
			$wordsBlock.css({
				'opacity': 1 - ($window.scrollTop() / 1000),
				'-webkit-transform': 'translateY(' + $window.scrollTop() / 6 + 'px)'
			});
		});
	},

	initScrollParallax: function () {
		$('.scrolly').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var $anchor = $(this);
			var href = $anchor.attr('href');

			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 800, function () {
				$('body').addClass('stepper');
			});
		});
	}
};

$(function () {
	ls.init();
});