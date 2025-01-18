
// hamburger

      $(".btn-gNav").click(function(){
        if($(".gnav").hasClass("open")){ // クリックされた要素がopenクラスだったら
          $(".gnav").removeClass("open");
        }else{
          $(".gnav").addClass("open");
        }
      });

      $(".gnav").click(function(){
        $(this).removeClass("open");
      });


// スクロールするとicon色変更
if (window.matchMedia("(min-width: 768px)").matches) {


$(function () {

  $(window).on("scroll", function () {
    const sliderHeight = $(".conB").height();

      if (sliderHeight - 30 < $(this).scrollTop()) {

        $(".js-header").addClass("headerColorScroll");

      } else {

        $(".js-header").removeClass("headerColorScroll");

      }

    });

  })
};