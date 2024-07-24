(function ($) {
	"use strict";

	//Page cursors

	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
		t.style.left = n.clientX + "px",
			t.style.top = n.clientY + "px",
			e.style.left = n.clientX + "px",
			e.style.top = n.clientY + "px",
			i.style.left = n.clientX + "px",
			i.style.top = n.clientY + "px"
	});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function n(t) {
		e.classList.add("hover"), i.classList.add("hover")
	}
	function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover")
	}
	s();
	for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
		o(r[a])
	}
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
	}

	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();


	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});

})(jQuery);

/* fifth section */

let strips = document.querySelector('.strips');
let strip = document.querySelectorAll('.strip');

strip.forEach(function (theStrip) {
	theStrip.addEventListener('mouseenter', function () {
		strip[0].classList.remove('hoverin');
		theStrip.classList.add('hoverin');
	});
	theStrip.addEventListener('mouseleave', function () {
		theStrip.classList.remove('hoverin');
		strip[0].classList.add('hoverin');
	});
});

/* seventh container */
$(function () {
	setTimeout(function () {
		$(".animated-text").removeClass("hidden-text");
	}, 500);
});


/* ninth container */
function show_next(id, nextid, bar) {
	var ele = document.getElementById(id).getElementsByTagName("input");
	var error = 0;
	for (var i = 0; i < ele.length; i++) {
		if (ele[i].type == "text" && ele[i].value == "") {
			error++;
		}
	}

	if (error == 0) {
		document.getElementById("account_details").style.display = "none";
		document.getElementById("user_details").style.display = "none";
		document.getElementById("qualification").style.display = "none";
		$("#" + nextid).fadeIn();
		document.getElementById(bar).style.backgroundColor = "#000000";
	}
	else {
		alert("Fill All The details");
	}
}

function show_prev(previd, bar) {
	document.getElementById("account_details").style.display = "none";
	document.getElementById("user_details").style.display = "none";
	document.getElementById("qualification").style.display = "none";
	$("#" + previd).fadeIn();
	document.getElementById(bar).style.backgroundColor = "#000000";
}

/* fourth-fifth section */
$(".event-card").hover(function () {
	$(this).toggleClass("active");
});

$(".purchase").hover(function () {
	$(this).toggleClass("active");
});

$(".show-details").click(function () {
	$(".overlay-details").addClass('active');
});

$(".close-details").click(function () {
	$(".overlay-details").removeClass('active');
});

$(".show-share").click(function () {
	$(".overlay-share").addClass('active');
});

$(".close-share").click(function () {
	$(".overlay-share").removeClass('active');
});