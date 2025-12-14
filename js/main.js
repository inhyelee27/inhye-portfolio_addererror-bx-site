window.addEventListener("DOMContentLoaded", function () {
  $('.sec01_typo11').addClass('on')
  $('.sec01_typo02').addClass('on')

  $('.sec13_typo02').addClass('on')

  $('.sec03_typo07')
  .addClass('on')

  

  var mouseX = 0;
  var mouseY = 0;
  
  $("body").mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    $("#flag").css({
      left: mouseX  + "px",
      top: mouseY  + "px",
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
   start: "-1200 top",
  //  scrolltop 
   end:'bottom bottom',
   scrub: true,
   markers:true,
   },
  left:"33%",
 })

 gsap.to(".sec03_card01 >img", {
  scrollTrigger:
   {trigger: ".sec03_card01",
   start: "-1200 top",
  //  scrolltop 
   end:'bottom bottom',
   scrub: true,
   markers:true,
   },
  rotate:0,

 })
 
gsap.to(".sec03_card02", {
  scrollTrigger:
   {trigger: ".sec03_card02",
   start: "-1200 top",
   end:'bottom bottom',
   scrub: true,
   markers:true,
  },
  right:"33%",
 })
 

 gsap.to(".sec03_card02 >img", {
  scrollTrigger:
   {trigger: ".sec03_card02",
   start: "-1200 top",
  //  scrolltop 
   end:'bottom bottom',
   scrub: true,
   markers:true,
   },
  rotate:0,
 })


gsap.to(".sec03_card03", {
  scrollTrigger:
   {trigger: ".sec03_card03",
   start: "-1200 top",
   end:'bottom bottom',
   scrub: true,
   markers:true,
  },
  left:"33%",
 })


 gsap.to(".sec03_card03 >img", {
  scrollTrigger:
   {trigger: ".sec03_card03",
   start: "-1200 top",
  //  scrolltop 
   end:'bottom bottom',
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
  marginTop:"600px"
  

 })
 gsap.to(".sec05_img01", {
  scrollTrigger:
   {trigger: ".sec05_img01",
   start: "-400 top",
   end:'700 bottom',
   scrub: 0.1,
   markers:true,
  },
  scale:1,
  opacity:1,
 })

 gsap.to(".sec05_img02", {
  scrollTrigger:
   {trigger: ".sec05_img02",
   start: "-350 top",
  //  scrolltop 
   end:'750 bottom',
   //position:fix
   scrub: 0.1,
   markers:true,
  },
  scale:1,
  opacity:1,
 })


 gsap.to(".sec05_img03", {
  scrollTrigger:
   {trigger: ".sec05_img03",
   start: "-500 top",
  //  scrolltop 
   end:'930 bottom',
   //position:fix
   scrub: 0.1,
   markers:true,
  },
  scale:1,
  opacity:1,
 })
 gsap.to(".sec05_img03", {
  scrollTrigger:
   {trigger: ".sec05_img03",
   start: "-300 top",
   end:'3900 bottom',
   scrub: true,
   markers:true,
  },
  y:-580,


 })

 gsap.to(".sec05_img06", {
  scrollTrigger:
   {trigger: ".sec05_img06",
   start: "-450 top",
   end:'2800 bottom',
   scrub: true,
   markers:true,
  },
  y:-600,
 })
 gsap.to(".sec05_img08", {
  scrollTrigger:
   {trigger: ".sec05_img08",
   start: "-850 top",
   end:'2800 bottom',
   scrub: true,
   markers:true,
  },
  y:-700,
 })
 gsap.to(".sec05_img10", {
  scrollTrigger:
   {trigger: ".sec05_img10",
   start: "-950 top",
   end:'2700 bottom',
   scrub: true,
   markers:true,
  },
  y:-600,
 })








    gsap.to(".scroll_container01", {
    scrollTrigger:
     {trigger: ".scroll_container01",
     start: "460 top",
     end:'10000 bottom',
     pin:true,
     scrub: true,
    },
   })

    gsap.to(".scroll_fix01", {
    scrollTrigger:
     {trigger: ".scroll_fix01",
     start: "3000 top",
     end:'8000 bottom',
     scrub: true,
    },
    x:"-3600px"
   })

   gsap.to(".sec06_typo03", {
    scrollTrigger:      
     {trigger: ".scroll_fix01",
     start: "500 top",
     end:'7000 bottom',
     scrub: true,
    },
    // y:-600,
    x:2000, 
   })
  
     gsap.to(".sec06_video > video", {
      scrollTrigger:
       {trigger: ".scroll_fix01",
       start: "top top",
       end:'5000 bottom',
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
       end:'18000 bottom',
       pin:true,
       scrub: true,
      },
     })
    
  

   gsap.to(".scroll_container02", {
    scrollTrigger:
     {trigger: ".scroll_container02",
     start: "top top",
     end:'9997 bottom',
     pin:true,
     scrub: true,
    },
   })




    gsap.to(".scroll_fix02", {
    scrollTrigger:
     {trigger: ".scroll_fix02",
     start: "top top",
     end:'10000 bottom',
     scrub: true,
    },
    x:"-7760px"
   })



   $('.sec09_img01 >img').hover(function(){
    $(this).addClass('on')
    $('.sec09_img01').addClass('on')},
    function(){
  $('.sec09_img01 >img, .sec09_img01').removeClass('on')}
  )
  
  $('.sec10_img01 >img').hover(function(){
    $(this).addClass('on')
    $('.sec10_img01').addClass('on')},
    function(){
  $('.sec10_img01 >img, .sec10_img01').removeClass('on')}
  )
  


   gsap.to(".sec12_left", {
    scrollTrigger:
     {trigger: ".sec12_left",
     start: "9030 top",
     end:'11900 bottom',
     pin:true,
     scrub: true,
    },
   })

  // 11.02 추가 
  gsap.to("#sec13", {
    scrollTrigger:
     {trigger: "#sec13",
     start: "top top",
     end:'4000 bottom',
     pin:true,
     scrub: true,
    },
   })

 





$('.sec03_bt02').hover(function(){
  $(this).addClass('on')
},function(){
  $('.sec03_bt02').removeClass('on')
}

)





var sec12_video = $('.sec12_video > video').get(0)


var sec06_video = $('.sec06_video > video').get(0)











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


      
      if(scrollTop >7850){
        $('.sec03_typo03 > img:nth-child(2)').addClass('on')
      }else{
        $('.sec03_typo03 > img:nth-child(2)').removeClass('on')
      
      }

      if(scrollTop >17718){
        $('.text').addClass('on')
      }else{
        $('.text').removeClass('on')
      }

      if(scrollTop >21341){
        $('.sec06_typo03').css({display:"none"})

      }else{
        $('.sec06_typo03').css({display:"block"})

      }

      if(scrollTop > 18942){ 
        sec06_video.play()
      }else{
        sec06_video.pause() 
      }

      
    
      // 7777777777
      if(scrollTop >23961){
        $('.sec07_typo02, .sec07_typo03, .sec07_typo04, .sec07_typo05').addClass('on')

      }else{
        $('.sec07_typo02, .sec07_typo03, .sec07_typo04, .sec07_typo05').removeClass('on')
      }
      if(scrollTop >23961){
        $('.sec07_typo06, .sec07_typo07, .sec07_typo08, .sec07_typo09').addClass('on')

      }else{
        $('.sec07_typo06, .sec07_typo07, .sec07_typo08, .sec07_typo09').removeClass('on')
      }
      if(scrollTop >23961){
        $('.sec07_typo10, .sec07_typo11, .sec07_typo12, .sec07_typo01').addClass('on')

      }else{
        $('.sec07_typo10, .sec07_typo11, .sec07_typo12, .sec07_typo01').removeClass('on')
      }
      if(scrollTop >23961){
        $('.sec07_typo13, .sec07_typo14, .sec07_typo15, .sec07_typo16').addClass('on')

      }else{
        $('.sec07_typo13, .sec07_typo14, .sec07_typo15, .sec07_typo16').removeClass('on')
      }
      if(scrollTop >23961){
        $('.sec07_typo17, .sec07_typo18, .sec07_typo19, .sec07_typo20, .sec07_typo21, .sec07_typo22, .sec07_typo23').addClass('on')

      }else{
        $('.sec07_typo17, .sec07_typo18, .sec07_typo19, .sec07_typo20, .sec07_typo21, .sec07_typo22, .sec07_typo23').removeClass('on')
      }








      if(scrollTop >27820){
        $('.sec08_typo01, .sec08_typo02, .sec08_typo03').addClass('on')

      }else{
        $('.sec08_typo01, .sec08_typo02, .sec08_typo03').removeClass('on')

      }
      if(scrollTop >28430){
        $('.sec09_img01, .sec09_img01>img, .sec09_typo01, .sec09_typo02, .sec09_typo03, .sec09_typo04').addClass('on')

      }else{
        $('.sec09_img01, .sec09_img01>img, .sec09_typo01, .sec09_typo02, .sec09_typo03, .sec09_typo04').removeClass('on')

      }
      if(scrollTop >29408){
        $('.sec10_img01, .sec10_img01>img, .sec10_typo01, .sec10_typo02, .sec10_typo03, .sec10_typo04, .sec10_typo05').addClass('on')

      }else{
        $('.sec10_img01, .sec10_img01>img, .sec10_typo01, .sec10_typo02, .sec10_typo03, .sec10_typo04, .sec10_typo05').removeClass('on')

      }
      if(scrollTop >31265){
        $('.sec11_typo01, .sec11_typo02, .sec11_typo03, .sec11_typo04').addClass('on')

      }else{
        $('.sec11_typo01, .sec11_typo02, .sec11_typo03, .sec11_typo04').removeClass('on')

      }

      if(scrollTop > 36777){ 
        sec12_video.play()
      }else{
        sec12_video.pause()
      }
      
      if(scrollTop >36777 ){
        $('.sec12_typo01, .sec12_typo01_01, .sec12_typo02, .sec12_video').addClass('on')
        

      }else{
        $('.sec12_typo01, .sec12_typo01_01, .sec12_typo02, .sec12_video').removeClass('on')

      }
      // if(scrollTop >36965 ){
      //   $('.sec12_typo02, .sec12_video').addClass('on')

      // }else{
      //   $('.sec12_typo02, .sec12_video').removeClass('on')
       
      // }
  
  


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