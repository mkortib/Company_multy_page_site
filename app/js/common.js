$(function() {


$('.mainnav a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, "slow");
    }
    return false;
});

	$(".slider-wrap").slideDown();

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$("a[href=#callback]").click(function() {
		$("#callback .formname").val($(this).data("form"));
	})

	$(".services-item h4").equalHeights();
	$(".new-item").equalHeights();
	$(".new-item-text h4").equalHeights();
	$(".item-link").equalHeights();
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});
	var owl = $('.slider');
  owl.owlCarousel({
   loop: true,
   items: 1,
   itemClass: 'slide-wrap',
   navText: "", 
  });
  
  $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  });
  $(".sf-menu").after("<div id='my-menu'>");
  $(".sf-menu").clone().appendTo("#my-menu");
  $("#my-menu").find("*").attr("style", "");
  $("#my-menu").find("ul").removeClass("sf-menu");
  $("#my-menu").mmenu({
  	extensions: ['widescreen','theme-white','effect-menu-slide','pagedim-black'],
  	navbar: {
  		title: "Меню"
  	}
  });
  var api = $("#my-menu").data("mmenu");
  api.bind("close", function() {
  	$(".toggle-mnu").removeClass("on");
  });
  $(".mobile-mnu").click(function() {
  	var mmAPI = $("#my-menu").data( "mmenu" );
 		mmAPI.open();
  	$(".main-mnu").slideToggle();
  	return false;
	});	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".succes").addClass(".visible");
			setTimeout(function() {
				// Done Functions
				$(".succes").removeClass(".visible");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
