window.addEventListener("DOMContentLoaded", function () {
	$('.sec01_typo03').addClass('on')
  
	var mouseX = 0;
	var mouseY = 0;
	
	$("body").mousemove(function (e) {
	  mouseX = e.pageX;
	  mouseY = e.pageY;
	  $("#flag").css({
		left: mouseX - 15 + "px",
		top: mouseY - 50 + "px",
	  });
	});
	
  $('.sec02_typo >div').hover(function(){
	$('#flag').addClass('on')
	var list01 = $(this).index()
	$('.sec02_typo >div').eq(list01).addClass('on')
  
	console.log(list01)
  
  },function(){
	$('#flag').removeClass('on')
	$('.sec02_typo >div').removeClass('on')
  }
  )
  
	gsap.to(".sec03_typo", {
	  scrollTrigger:
	   {trigger: ".sec03_typo",
	   start: "100 top",
	   end:'7000 bottom',
	   pin:true,
	  },
	 })
  
	// sec03 typo
	gsap.to(".sec03_typo01", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"445px",
	  duration:0.7,
	  opacity:1,
	 })
  
	 gsap.to(".sec03_typo02", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"445px",
	  duration:0.7,
	  opacity:1,
	  delay:0.2,
	 })
	 
	gsap.to(".sec03_typo03", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"545px",
	  duration:0.7,
	  opacity:1,
	  delay:0.3,
  
	 })
	 
	gsap.to(".sec03_typo04", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"545px",
	  duration:0.7,
	  opacity:1,
	  delay:0.4,
  
	 })
	 
	gsap.to(".sec03_typo05", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"667px;",
	  duration:0.7,
	  opacity:1,
	  delay:.5,
	 })
  
	 gsap.to(".sec03_typo06", {
	  scrollTrigger:
	   {trigger: "#sec03",
	   start: "-100 top",
	   end:'bottom bottom',
	   ease:Power1.easeIn,
	  },
	  rotate:0,
	  top:"667px",
	  duration:0.7,
	  opacity:1,
	  delay:.6,
	})
  
  
  
  gsap.to(".sec03_card01", {
	scrollTrigger:
	 {trigger: ".sec03_card01",
	 start: "-800 top",
	//  scrolltop 
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	 },
	left:"33%",
   })
  
   gsap.to(".sec03_card01 >img", {
	scrollTrigger:
	 {trigger: ".sec03_card01",
	 start: "-800 top",
	//  scrolltop 
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	 },
	rotate:0,
   })
   
  gsap.to(".sec03_card02", {
	scrollTrigger:
	 {trigger: ".sec03_card02",
	 start: "-800 top",
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	},
	right:"33%",
   })
   
  
   gsap.to(".sec03_card02 >img", {
	scrollTrigger:
	 {trigger: ".sec03_card02",
	 start: "-800 top",
	//  scrolltop 
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	 },
	rotate:0,
   })
  
  
  gsap.to(".sec03_card03", {
	scrollTrigger:
	 {trigger: ".sec03_card03",
	 start: "-800 top",
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	},
	left:"33%",
   })
  
  
   gsap.to(".sec03_card03 >img", {
	scrollTrigger:
	 {trigger: ".sec03_card03",
	 start: "-800 top",
	//  scrolltop 
	 end:'1000 bottom',
	 scrub: true,
	 markers:true,
	 },
	rotate:0,
   })
  
  
  
  
  
   
  //  기울임
  // $('.sec03_card >div').hover(function(){
  //   var list = $(this).index()
  //   $('.sec03_card >div').eq(list).addClass('on')
  // },function(){
  // $('.sec03_card >div').removeClass('on')
  // })
  gsap.to(".sec04_con", {
	scrollTrigger:
	 {trigger: ".sec04_con",
	 start: "100 top",
	//  scrolltop 
	 end:'5000 bottom',
	 pin:true,
	 //position:fix
	 scrub: true,
	 markers:true,
	},
   })
  
  
  gsap.to(".sec04_img01", {
	scrollTrigger:
	 {trigger: "#sec04",
	 start: "-500 top",
	//  scrolltop 
	 end:'3000 bottom',
	 scrub: true,
	 markers:true,
	 },
	 x:"-200px"
   })
  
  
   gsap.to(".sec04_img02", {
	scrollTrigger:
	 {trigger: "#sec04",
	 start: "-300 top",
	//  scrolltop 
	 end:'3000 bottom',
	 scrub: true,
	 markers:true,
	 },
	 x:"200px"
   })
  
  
  
  
  
   gsap.to(".text", {
	scrollTrigger:
	 {trigger: ".text",
	 start: "top top",
	//  scrolltop 
	 end:'7500 bottom',
	 pin:true,
	 //position:fix
	 scrub: true,
	 markers:true,
	},
   })
  
   gsap.to(".sec05_text01", {
	scrollTrigger:
	 {trigger: ".sec05_text01",
	 start: "top top",
	//  scrolltop 
	 end:'3000 bottom',
	 //position:fix
	 scrub: true,
	 markers:true,
	},
	scale:1,
   })
  
   gsap.to(".sec05_img01", {
	scrollTrigger:
	 {trigger: ".sec05_img01",
	 start: "-400 top",
	 end:'1000 bottom',
	 scrub: 0.1,
	 markers:true,
	},
	scale:1,
	opacity:1,
   })
  
  
  
  
  
  
	  gsap.to(".scroll_container01", {
	  scrollTrigger:
	   {trigger: ".scroll_container01",
	   start: "465 top",
	   end:'10000 bottom',
	   pin:true,
	   scrub: true,
	  },
	 })
  
	  gsap.to(".scroll_fix01", {
	  scrollTrigger:
	   {trigger: ".scroll_fix01",
	   start: "4000 top",
	   end:'8000 bottom',
	   scrub: true,
	  },
	  x:"-3000px"
	 })
  
	 gsap.to(".sec06_typo03", {
	  scrollTrigger:
	   {trigger: ".scroll_fix01",
	   start: "500 top",
	   end:'10000 bottom',
	   scrub: true,
	  },
	  // y:-600,
	  x:1200, 
	 })
	
	   gsap.to(".sec06_video > video", {
		scrollTrigger:
		 {trigger: ".scroll_fix01",
		 start: "000 top",
		 end:'3500 bottom',
		 scrub: true,
		},
		scale:1.1,
	   })
  
	   
  
	 gsap.to(".sec06_video", {
	  scrollTrigger:
	   {trigger: ".scroll_fix01",
	   start: "500 top",
	   end:'5000 bottom',
	   scrub: true,
	  },
	  width:"1820px",
	 })
  
	
	   gsap.to(".sec07_con", {
		scrollTrigger:
		 {trigger: ".sec07_con",
		 start: "8600 top",
		 end:'12000 bottom',
		 pin:true,
		 scrub: true,
		},
	   })
	  
	
  
	 gsap.to(".scroll_container02", {
	  scrollTrigger:
	   {trigger: ".scroll_container02",
	   start: "top top",
	   end:'10000 bottom',
	   pin:true,
	   scrub: true,
	  },
	 })
  
  
  
  
	  gsap.to(".scroll_fix02", {
	  scrollTrigger:
	   {trigger: ".scroll_fix02",
	   start: "top top",
	   end:'8000 bottom',
	   scrub: true,
	  },
	  x:"-7290px"
	 })
  
  
  
	
	//  gsap.to(".sec09_img01", {
	//   scrollTrigger:
	//    {trigger: "#sec09",
	//    start: "100 top",
	//    end:'2000 bottom',
	//    pin:false,
	//    scrub: true,
	//    markers:true,
	//   },
  
	//   x:550
	//  })
	
  
  
  
  
	 gsap.to(".sec12_left", {
	  scrollTrigger:
	   {trigger: ".sec12_left",
	   start: "9000 top",
	   end:'11830 bottom',
	   pin:true,
	   scrub: true,
	  },
	 })
  
  
  
  
  
  
	//  sec12_left(따라 내려오기)
  
  $('.sec03_bt02').hover(function(){
	$(this).addClass('on')
  },function(){
	$('.sec03_bt02').removeClass('on')
  }
  
  )
  
  
  
  
  
  
  
  
  
  
  
  
  
  
	/* scroll event section */
	// $(window).scroll(function () {
	//   var scrollTop = $(window).scrollTop();
	//   $(".posNum").text(scrollTop);
	  container.addListener((e) => {
		let scrollTop = container.scrollTop;
		$(".posNum").html(scrollTop);
  
		if(scrollTop >7800){
		  $('.sec03_bt').addClass('on')
		}else{
		  $('.sec03_bt').removeClass('on')
  
		}
  // 16985
		if(scrollTop >16885){
		  $('.text').addClass('on')
		}else{
		  $('.text').removeClass('on')
		}
  
		if(scrollTop >21341){
		  $('.sec06_typo03').css({display:"none"})
  
		}else{
		  $('.sec06_typo03').css({display:"block"})
  
		}
  
  
		
		if(scrollTop >27584){
		  $('.sec08_typo01').addClass('on')
		  $('.sec08_typo02').addClass('on')
  
		}else{
		  $('.sec08_typo01').removeClass('on')
		  $('.sec08_typo02').removeClass('on')
		}
  
  
  
	});
  })
  
  
  
  
  
  
  
  
  
  
  
  
	  // function toggleClassAndScroll(start, end, className) {
	  //   if (scrollTop >= start && scrollTop < end) {
	  //     $(className).addClass('on');
	  //   } else {
	  //     $(className).removeClass('on');
	  //   }
	  // }
	  // toggleClassAndScroll(100, 200, '#');
	  // toggleClassAndScroll(300, 400, '.');
	  // toggleClassAndScroll(500, 600, '#');
	  // toggleClassAndScroll(700, 800, '.');
	 