var ls = {
	init: function () {
		this.setDynamicHeights();
		this.initScrollParallax();
	},

	setDynamicHeights: function () {
		var $window = $(window);
		var $block = $('.setter');
		var $wordsBlock = $block.find('.words-block');

		$block.css('height', $window.height() + 2);

		$window.scroll(function () {
			$wordsBlock.css({
				'opacity': 1 - ($window.scrollTop() / 1000),
				'-webkit-transform': 'translateY(' + $window.scrollTop() / 6 + 'px)'
			});
		});

		$window.resize(function () {
			$block.css('height', $window.height());
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