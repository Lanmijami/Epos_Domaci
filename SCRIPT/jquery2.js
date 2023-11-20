$('#rockBlind').on('click', function () {
  $('#rockEyes').css('display', 'block');
  $('#rockBlind').css('display', 'none');
});

$('#rockEyes').on('click', function () {
  $('#rockEyes').css('display', 'none');
  $('#rockBlind').css('display', 'block');
});
