/* Menu patte */
jQuery(document).ready(function($) {
	
	$("li.lvl0").on({
		mouseenter: function () {
			$(this).find(".lvl1").show().css({
				left: 0,
				top: 0
			});
		},
		mouseleave: function () {
			$(this).find(".lvl1").hide();
		}
	});
	$("li.sublvl1").on({
		mouseenter: function () {
			var pos = $(this).position();
			$(this).find(".lvl2").show().css({
				left: pos.left+220,
				top: pos.top
			});
		},
		mouseleave: function () {
			$(this).find(".lvl2").hide();
		}
	});
});
