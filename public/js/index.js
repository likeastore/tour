var ls = {
	init: function () {
		this.setDynamicHeights();
		this.initScrollParallax();
	},

	setDynamicHeights: function () {
		var $window = $(window);
		var $block = $('.setter');
		var $wordsBlock = $('.words-block');

		$block.css('height', $window.height() + 2);

		$window.scroll(function () {
			$wordsBlock.css({
				'opacity': 1 - ($window.scrollTop() / 1000),
				'-webkit-transform': 'translateY(' + $window.scrollTop() / 6 + 'px)'
			});

			if ($window.scrollTop() >= $('#account').offset().top) {
				$('.networks-block').addClass('fadeInLeft visible');
			}

			if ($window.scrollTop() >= $('#networks').offset().top) {
				$('.favorites-block').addClass('fadeInRight visible');
			}

			if ($window.scrollTop() >= $('#favorites').offset().top) {
				$('.dashboard-block').addClass('fadeInLeft visible');
			}

			if ($window.scrollTop() >= $('#dashboard').offset().top) {
				$('.search-block').addClass('fadeInRight visible');
			}

			var $searchId = $('#search');
			if ($window.scrollTop() >= $searchId.height() / 2 + $searchId.offset().top) {
				$('.devices-overview-wrap').addClass('fadeInDown visible');
			}
		});

		$window.resize(function () {
			$block.css('height', $window.height() + 2);
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