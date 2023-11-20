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
