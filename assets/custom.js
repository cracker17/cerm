// Product slider unslick

	$(document).ready(function(){
      var checkexist = setInterval(function(){
        if($('.slick-initialized').length){
          console.log("check")
          $('.slider-for').slick('unslick');
          
          $('.product_slide_wrap').slick({
            autoplay: false,
            infinite: true,
            autoplaySpeed: 3000,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".product_thumbs",
            prevArrow:"<img style='width:unset;height:unset;' class='slick-prev' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back_efba46b5-26b4-46c7-9367-d279f85348c1.png?v=1656308592'>",
            nextArrow:"<img style='width:unset;height:unset;' class='slick-next' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back-1_30cc347c-ca2e-48f4-8e94-9da89b58fedf.png?v=1656308592'>"
          });
          
          clearInterval(checkexist);
        }

      }, 100);
      
//     Isntagram Feed Slider 
      
//       var checkexist = setInterval(function(){
//         if($('div#insta-feed').length){
//           console.log("aaaa")

//           if (window.matchMedia("(max-width: 768px)").matches) {
//             $('.insta_widget div#insta-feed').slick({
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               arrows: true,
//               infinite: true,
//               prevArrow:"<img class='slick-prev' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back_efba46b5-26b4-46c7-9367-d279f85348c1.png?v=1656308592'>",
//               nextArrow:"<img class='slick-next' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back-1_30cc347c-ca2e-48f4-8e94-9da89b58fedf.png?v=1656308592'>"
//             });
//           }
            
//           clearInterval(checkexist);
//         }

//       }, 1000);
      
    })
    
//  Product Thumbnails Slider
    
    $('.product_thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".product_slide_wrap"
    });
    
//  Filters Brand Code

	$('.change_st .widget-content li').click(function(){
      $(this).addClass("bg_label");
      $(this).siblings().removeClass("bg_label");
    })
    
    
//  Isntagram Feed Slider 

  $(document).ready(function(){
    if (window.matchMedia("(max-width: 768px)").matches) {
      $('.detox_rounded .contain .row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow:"<img class='slick-prev' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back_efba46b5-26b4-46c7-9367-d279f85348c1.png?v=1656308592'>",
        nextArrow:"<img class='slick-next' src='https://cdn.shopify.com/s/files/1/0631/1870/4856/files/Icon_ionic-ios-arrow-back-1_30cc347c-ca2e-48f4-8e94-9da89b58fedf.png?v=1656308592'>"
      });
    }
  })
    
//   Change Rating text
    $(document).ready(function(){
      $('.visib_none h3.sidebar-title span').text("Rating");
    })

//   Change space-between space-evenly 

  $(document).ready(function(){
    var len = $('.footer_nav').length
    
    if(len <= 2) {
        $('.footer_navigation').css("justify-content", "space-evenly");
    }else {
        $('.footer_navigation').css("justify-content", "space-between");
    }
  })

//   FAQ page tabs

  $('.faq_nav').click(function(){
    var target = $(this).data('target');
    $('.nav_blocks').removeClass('active_block');
    $(target).addClass('active_block');
    var chng = $(this).find('p').text();
    $('.side_block_heading').html(chng);
    // $('.side_block_heading').css("text-transform", "uppercase");
  })

//   Slideshow Homepage Banner

    $(document).ready(function(){
      var slide = $('.slide_banner').length
      if(slide > 1) {
          $('.slideshow_enable').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
          });
      }
    })

//   Trigger Click on credo rewards 

    $('.rewards-icon').click(function(){
      $( ".stamped-launcher-button" ).first().trigger( "click" );
    })

//   Credo Points changing
    $(document).ready(function(){
      var bizId = $("meta[property='og:price:amount']").attr("content");
      var calc = bizId * 10
      $('span.dynamic_value').text(calc);
    })

//   Price Split last value after "."

    $(document).ready(function(){
      var spl = $('.col_price_pr span.money').text().split(".");
      $('.col_price_pr span.money').text(spl[0])
    })