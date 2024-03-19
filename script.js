/*-------------------------------------------
スライダー
-------------------------------------------*/
$(".slider").slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 4600,
  speed: 2500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

/*-------------------------------------------
スライダー_SP
-------------------------------------------*/
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").slick("slickPlay");
});

/*-------------------------------------------
ふわっと表示 
-------------------------------------------*/
$(".kodawari-wrap ,.news-wrap ,.sns-wrap ,.storeguide-wrap").on(
  "inview",
  function (event, isInView) {
    if (isInView) {
      $(this).addClass("active");
    }
  }
);

/*-------------------------------------------
順番にふわっと表示
-------------------------------------------*/
function delayScrollAnime() {
  var time = 0.2;
  $(".content-wrap").each(function (i) {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (
      scroll >= elemPos - windowHeight - 100 &&
      !$(this).hasClass("animated")
    ) {
      $(this)
        .css("animation-delay", i * time + "s")
        .addClass("fadeUp animated");
    }
  });
}
