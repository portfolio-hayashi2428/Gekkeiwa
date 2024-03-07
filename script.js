//スライダー部分
$(".slider").slick({
  fade: true, //切り替えをフェードで行う。初期値はfalse。
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 4600, //次のスライドに切り替わる待ち時間
  speed: 2500, //スライドの動きのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  arrows: true, //左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").slick("slickPlay");
});

//スクロールをしたら1度だけアニメーションをする設定
$(".kodawari-wrap ,.news-wrap ,.sns-wrap ,.storeguide-wrap").on(
  "inview",
  function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass("active"); //クラス名が付与
    }
  }
);

//スクロールをしたら順番に度だけアニメーションをする設定
function delayScrollAnime() {
  var time = 0.2; // 遅延時間を増やす秒数の値（各要素間の遅延時間）
  $(".content-wrap").each(function (i) {
    var elemPos = $(this).offset().top; // 要素の位置まで来たら
    var scroll = $(window).scrollTop(); // スクロール値を取得
    var windowHeight = $(window).height(); // 画面の高さを取得

    if (
      scroll >= elemPos - windowHeight - 100 &&
      !$(this).hasClass("animated")
    ) {
      // 画面内に入ったかつアニメーション未実施の場合
      $(this)
        .css("animation-delay", i * time + "s")
        .addClass("fadeUp animated");
    }
  });
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
});
