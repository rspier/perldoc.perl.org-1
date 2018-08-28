$(function () {
  // $('[data-toggle="tooltip"]').tooltip();

  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  // $('body').on('click', '.js-show-sidebar', function(e) {
  //   $('.sidebar').addClass('showSidebar')
  // })
  function navHeight() {
    var navHeight = document.querySelector('nav').offsetHeight
    $('.wrapper').css({
      "padding-top": navHeight + 'px'
    })
  }
  navHeight()
  window.addEventListener('resize', navHeight)
  window.addEventListener('orientationchange', navHeight)

})