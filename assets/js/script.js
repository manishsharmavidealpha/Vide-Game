(function ($) {
	// preloader area start
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});
	// preloader area end

	// Mobile Menu Start here
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	// Mobile Menu end here

	// Menu Top Fixed Start here
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	// Menu Top Fixed end here

	//search-area-start-here
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});
	//search-area-end-here

	//custom-mouse-corsor-area-start-here
	function mousecursor() {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n,
				i = 0,
				o = !1;
			(window.onmousemove = function (s) {
				o ||
					(t.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(e.style.transform =
						"translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(n = s.clientY),
					(i = s.clientX);
			}),
				$("body").on("mouseenter", "a, .cursor-pointer", function () {
					e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
				}),
				$("body").on("mouseleave", "a, .cursor-pointer", function () {
					($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
						(e.classList.remove("cursor-hover"),
						t.classList.remove("cursor-hover"));
				}),
				(e.style.visibility = "visible"),
				(t.style.visibility = "visible");
		}
	}

	$(function () {
		mousecursor();
	});

	//custom-mouse-corsor-area-end-here

	//comment-slide-area-start-here
	var swiper = new Swiper(".comment-slide", {
		spaceBetween: 100,
		speed: 2500,
		loop: true,
		grabCursor: true,
		breakpoints: {
			420: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: ".dot",
			clickable: true,
		},
	});
	//comment-slide-area-end-here

	//team-slide-area-tart-here
	var swiper = new Swiper(".team-slide", {
		spaceBetween: 10,
		speed: 1000,
		autoplay: {
			delay: 3000,
			reverseDirection: true,
			disableOnInteraction: false,
		},
		loop: "true",
		centeredSlides: true,
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
		},
	});
	var swiper = new Swiper(".team-slide2", {
		spaceBetween: 10,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		centeredSlides: true,
		loop: "true",
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
		},
	});
	var swiper = new Swiper(".team-slide3", {
		spaceBetween: 10,
		speed: 1000,
		autoplay: {
			delay: 3000,
			reverseDirection: true,
			disableOnInteraction: false,
		},
		loop: "true",
		centeredSlides: true,
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 5,
			},
		},
	});
	var swiper = new Swiper(".team-slide4", {
		spaceBetween: 10,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		centeredSlides: true,
		loop: "true",
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 5,
			},
		},
	});
	//team-slide-area-end-here

	//related-product-slide-area-start-here
	var swiper = new Swiper(".related-product-slide", {
		spaceBetween: 10,
		speed: 500,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		loop: "true",
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
		},
	});
	//related-product-slide-area-end-here

	// shop single swiper slider area start here
	var swiper = new Swiper(".shop-slider-thumb", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
	});
	var swiper2 = new Swiper(".shop-single-slide", {
		speed: 1000,
		loop: "true",
		grabCursor: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	// shop single swiper slider area end here

	// Quantity-js-area-start-here
	jQuery(document).ready(($) => {
		$(".quantity").on("click", ".plus", function (e) {
			let $input = $(this).prev("input.qty");
			let val = parseInt($input.val());
			$input.val(val + 1).change();
		});

		$(".quantity").on("click", ".minus", function (e) {
			let $input = $(this).next("input.qty");
			var val = parseInt($input.val());
			if (val > 0) {
				$input.val(val - 1).change();
			}
		});
	});
	// Quantity-js-area-end-here

	// Quantity-js-area-end-here
	/* Set rates + misc */
	var taxRate = 0.05;
	var shippingRate = 15.0;
	var fadeTime = 300;

	/* Assign actions */
	$(".product-quantity input").change(function () {
		updateQuantity(this);
	});

	$(".product-removal button").click(function () {
		removeItem(this);
	});

	/* Recalculate cart */
	function recalculateCart() {
		var subtotal = 0;

		/* Sum up row totals */
		$(".product").each(function () {
			subtotal += parseFloat($(this).children(".product-line-price").text());
		});

		/* Calculate totals */
		var tax = subtotal * taxRate;
		var shipping = subtotal > 0 ? shippingRate : 0;
		var total = subtotal + tax + shipping;

		/* Update totals display */
		$(".totals-value").fadeOut(fadeTime, function () {
			$("#cart-subtotal").html(subtotal.toFixed(2));
			$("#cart-tax").html(tax.toFixed(2));
			$("#cart-shipping").html(shipping.toFixed(2));
			$("#cart-total").html(total.toFixed(2));
			if (total == 0) {
				$(".checkout").fadeOut(fadeTime);
			} else {
				$(".checkout").fadeIn(fadeTime);
			}
			$(".totals-value").fadeIn(fadeTime);
		});
	}

	/* Update quantity */
	function updateQuantity(quantityInput) {
		/* Calculate line price */
		var productRow = $(quantityInput).parent().parent();
		var price = parseFloat(productRow.children(".product-price").text());
		var quantity = $(quantityInput).val();
		var linePrice = price * quantity;

		/* Update line price display and recalc cart totals */
		productRow.children(".product-line-price").each(function () {
			$(this).fadeOut(fadeTime, function () {
				$(this).text(linePrice.toFixed(2));
				recalculateCart();
				$(this).fadeIn(fadeTime);
			});
		});
	}

	/* Remove item from cart */
	function removeItem(removeButton) {
		/* Remove row from DOM and recalc cart total */
		var productRow = $(removeButton).parent().parent();
		productRow.slideUp(fadeTime, function () {
			productRow.remove();
			recalculateCart();
		});
	}
	// Quantity-js-area-end-here

	//blog-slide-area-end-here
	var swiper = new Swiper(".blog-slide", {
		effect: "cube",
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		speed: 1000,
		loop: "true",
	});
	//blog-slide-area-end-here

	//blog-single-slide-area-end-here
	var swiper = new Swiper(".blog-single-slide", {
		speed: 500,
		loop: "true",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	//blog-single-slide-area-end-here

	//image-popup-area-start-here
	$(".img-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	//image-popup-area-end-here

	//video-popup-area-start-here
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	//video-popup-area-end-here

	//counter-up-area-start-here
	$(".count").counterUp({
		delay: 50,
		time: 5000,
	});
	$(".count2").counterUp({
		delay: 40,
		time: 4000,
	});
	$(".count3").counterUp({
		delay: 30,
		time: 3000,
	});
	$(".count4").counterUp({
		delay: 20,
		time: 2000,
	});
	//counter-up-area-end-here

	//Back-to-top-area-start-here
	var scrollPath = document.querySelector(".scroll-up path");
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
	scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updatescroll = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength) / height;
		scrollPath.style.strokeDashoffset = scroll;
	};
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".scroll-up").addClass("active-scroll");
		} else {
			jQuery(".scroll-up").removeClass("active-scroll");
		}
	});
	jQuery(".scroll-up").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate(
			{
				scrollTop: 0,
			},
			duration
		);
		return false;
	});
	//Back-to-top-area-end-here

	// WOW
	new WOW().init();
	
	
	//contact form js
	 $(function () {
		// Get the form.
		var form = $("#contact-form");
		// Get the messages div.
		var formMessages = $(".form-message");
		// Set up an event listener for the contact form.
		$(form).submit(function (e) {
			// Stop the browser from submitting the form.
			e.preventDefault();
			// Serialize the form data.
			var formData = $(form).serialize();
			// Submit the form using AJAX.
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					// Set the message text.
					$(formMessages).text(response);
					// Clear the form.
					$("#form input, #form textarea").val("");
				})
				.fail(function (data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					// Set the message text.
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	});
})(jQuery);



//coundown-area-start-here
function handleTickInit(tick) {
	Tick.helper.interval(function () {
		var d = Tick.helper.date();
		tick.value = {
			sep: ".",
			hours: d.getHours(),
			minutes: d.getMinutes(),
			seconds: d.getSeconds(),
		};
	});
}
//coundown-area-end-here
