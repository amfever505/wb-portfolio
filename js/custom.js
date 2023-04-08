window.addEventListener('DOMContentLoaded', function () {
  $('.thumnail-box').imagesLoaded(function () {
    // 画像を読み込んだ後に実行したい処理
    $('#spinner').hide();
  });
  $('.card').on('click', () => {
    $('#spinner').show();

    $('.thumnail-box').imagesLoaded(function () {
      // 画像を読み込んだ後に実行したい処理
      $('#spinner').hide();
    });
  });
});
