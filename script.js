$(document).ready(function () {
  $(document).on('click', '#toggleTheme', function () {
    if ($('body').hasClass('theme-light')) {
      $('body').fadeOut(200, function () {
        $(this).removeClass('theme-light').addClass('theme-dark').fadeIn(200);
      });
    } else {
      $('body').fadeOut(200, function () {
        $(this).removeClass('theme-dark').addClass('theme-light').fadeIn(200);
      });
    }
  });
});


