$(document).ready(function(){


	var get_percent, push_percent=[], percent_length;
	
	var percent_number_step = $.animateNumber.numberStepFactories.append(' %');

	$(window).scroll(function(){
		if($(".distribution_section").hasClass("active")){
			
			$(".distribution_section").find(".counter").each(function(){
			if(!$(this).find("span").length){
				$(this).prepend("<span class='percent_counter'>0%</span");
			}
			})

			setTimeout(function(){
				percent_length=$(".distribution_section").find(".percent_counter").length;
				for(i=0;i<percent_length;i++){
					get_percent=$(".distribution_section").find("p").eq(i).attr("data-percent");
					push_percent.push(get_percent);

						$(".distribution_section").find(".percent_counter").eq(i).animateNumber({
							number: push_percent[i],
							numberStep: percent_number_step
						},
						1000
						);
				}
			}, 500);
		
		}

		else if(!$(".distribution_section").hasClass("active")){
			$(".distribution_section").find("span").remove();
		
		}

	});

	$('.chart_box').waypoint(function() {
		$('.distribution_section').addClass("active");
	}, { offset: '20%'});

	$('.chart_box').waypoint(function() {
		$('.distribution_section').removeClass("active");
	}, { offset: '100%'});

	$('.chart_box').waypoint(function() {
		$('.distribution_section').removeClass("active");
	}, { offset: '-100%'});
	

	// $('.day_countdown_top').dsCountDown({
	// 	endDate: new Date("April 24, 2018 23:59:00"),
	// 	titleDays: '',
	// 	titleHours: '',
	// 	titleMinutes: '',
	// 	titleSeconds: ''
	// });

	$('.carousel_logo').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$('.carousel_timeline').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:false,
	 	loop:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	var owl_timeline = $('.carousel_timeline');
	owl_timeline.owlCarousel();
	
	$('.customNextBtn').click(function() {
	    owl_timeline.trigger('next.owl.carousel');
	});

	$('.customPrevBtn').click(function() {
	    owl_timeline.trigger('prev.owl.carousel');
	});

	$('.day_countdown_bttm').dsCountDown({
		endDate: new Date("April 24, 2018 23:59:00"),
		titleDays: 'DAYS',
		titleHours: 'HOURS',
		titleMinutes: 'MINUTES',
		titleSeconds: 'SECONDS'
	});

	$('.team_slider').bxSlider({
		slideWidth: 263,
		slideMargin:30,
		minSlides:1,
		maxSlides:4,
		pager:false,
		infiniteLoop:false,
		nextSelector: '#team-next',
		prevSelector: '#team-prev',
		nextText: 'Onward &rarr;',
		prevText: '&larr; Go back'
	});

	$(".acc_content").eq(0).show();

	$(".acc_wrapper").on("click", ".acc_head", function(){
		var torefer=$(this);
		torefer.closest(".acc_wrapper").find(".acc_head").removeClass("active");
		torefer.closest(".acc_wrapper").find(".acc_content").slideUp(200);
		torefer.next(".acc_content").slideDown(500);
		torefer.addClass("active");
	});

	var options = {
		offset: 300, 

 
  		offsetSide: 'top',
		  classes: {
		    clone: 'headhesive',
		    stick: 'headhesive--stick',
		    unstick: 'headhesive--unstick'
		},
		 onStick:   function () {
		    	$(".logo").hide();
		    	$(".logo_blue").delay(500).fadeIn(500);
		    },
  			onUnstick: function () {
  				$(".logo").delay(500).fadeIn(500);
		    	$(".logo_blue").hide();
  			}
	}

	var header = new Headhesive('header', options);

	$("ul.menu li").on("click", "a", function(e){
		e.preventDefault();
		var get_sectionid=$(this).attr("data-target");
		$("html, body").animate({
        	scrollTop: $("#"+get_sectionid).offset().top 
    	}, 1000);
	});

	$('.logo_blue').click(function(){
        $('body,html').animate({scrollTop: 0}, 1000);
        return false;
    });

});

$(window).on("load", function(){

	$(window).scroll(function(){
   
	   $("section").each(function(){
	      
	     var torefer=$(this);
	     
	        var offsetSection = torefer.offset().top;
	        var get_id=torefer.attr("id");
	        var get_height= torefer.outerHeight(true);

	        var final= offsetSection + get_height

	         var docScroll = $(window).scrollTop();
	         var docScroll1 = docScroll + 1;

	         if ( docScroll1 >= offsetSection && docScroll1 < final && torefer.attr("id")){
	               	$("ul.menu li").find("a").removeClass("active");
					$("ul.menu li").find($('a[data-target=' + get_id + ']')).addClass("active");	
	         }

	         else{
	         		$("ul.menu li").find($('a[data-target=' + get_id + ']')).removeClass("active")
	         }
	     });
    });

	$(".se-pre-con").fadeOut("slow");


});

var data = {
    datasets: [{

        data: [
            25,
            20,
            20,
            15,
            10,
            5
        ],
        backgroundColor: [
            "#fd6742",
            "#ffc856",
            "#90d661",
            "#47cbff",
            "#4a77f6",
            "#1c4aa1"
        ],
        label: 'My dataset' // for legend
    }
    ],

    
    labels: [
        "25% Branding and Marketing",
        "20% Gift Code Invemtory",
        "20% Legal & Financial Overhead",
        "15% IT Infastructure",
        "10% Bounty & Overhead",
        "5% Management"
    ]
};
var ctx = $("#myChart");
new Chart(ctx, {
    data: data,

    type: 'polarArea',

    options: {	
			    layout: {
			        padding: {
			            left: 0,
			            right: 0,
			            top: 0,
			            bottom: 0
			        }
			    },
				responsive: true,
				legend: {
					position: 'right',
					labels: {
					usePointStyle: true ,
					fontSize: 16,
					fontFamily: "Open Sans",
					fontColor: '#443c62',
					padding: 40,

				}
				},
				title: {
					display: false,
					text: 'Chart.js Polar Area Chart'
				},
				scale: {
					display:false,
					ticks: {
						beginAtZero: true
					},
					reverse: false
				},
				animation: {
					animateRotate: true,
					animateScale: true
				}
			}
});