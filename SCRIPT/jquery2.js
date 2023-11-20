$('#rockBlind').on('click', function () {
  $('#rockEyes').css('display', 'block');
  $('#rockBlind').css('display', 'none');
});

$('#rockEyes').on('click', function () {
  $('#rockEyes').css('display', 'none');
  $('#rockBlind').css('display', 'block');
});

$('.linkContainer').hide();

let num = 0;

$('#hamburgerImg').on('click', function () {
  if (num % 2 == 0) {
    $('.linkContainer').show();
  } else {
    $('.linkContainer').hide();
  }

  num++;
});
