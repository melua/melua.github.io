/*
	This transition code and the associated images
	are taken from https://pyrosphere.net please
	visit them and try their awesome mobile games
*/

$(document).ready(function() {
	var bigImage = $("#intro");

	var fixInfoScreen = function() {
		var height = $(window).height();
		var curPos = $(window).scrollTop() + height;
		var opacity = (curPos / (height*0.75));

		opacity = Math.min(Math.max(0, opacity), 1);

		var opacityDay = 1 - getSpot(0, bigImage.height()/3, $(window).scrollTop());
		bigImage.children(".day").css("opacity", opacityDay);
	}

	function getSpot(min, max, pos) {
		var range = max-min;
		var posCur = pos - min;

		var op = posCur / range;

		return Math.min(1, Math.max(op, 0));
	}

	$(window).on("scroll", fixInfoScreen);
	fixInfoScreen();
});