$('#left-box').on('click', function () {
  window.open(
    'https://www.google.com/maps/place/Oscar+Wilde/@40.7451678,-73.992647,17z/data=!3m2!4b1!5s0x89c259a5ebe01a09:0x43a6cfa4c539c06a!4m6!3m5!1s0x89c259a5e959b781:0x9c2c03e28babd5c6!8m2!3d40.7451638!4d-73.9900721!16s%2Fg%2F11dfgs61n3?entry=ttu',
    '_blank'
  );
});

$('#rock1').hover(
  function () {
    $('#bubble1').show();
  },
  function () {
    $('#bubble1').hide();
  }
);

$('#rock2').hover(
  function () {
    $('#bubble2').show();
  },
  function () {
    $('#bubble2').hide();
  }
);

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
