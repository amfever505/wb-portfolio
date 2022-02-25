window.addEventListener('DOMContentLoaded', function () {
  $('.thumnail-box').imagesLoaded(function () {
    // 画像を読み込んだ後に実行したい処理
    console.log('loaded');
    $('#spinner').hide();
  });
  $('.card').on('click', () => {
    console.log('click');
    $('#spinner').show();

    $('.thumnail-box').imagesLoaded(function () {
      // 画像を読み込んだ後に実行したい処理
      console.log('loaded');
      $('#spinner').hide();
    });
  });
});
