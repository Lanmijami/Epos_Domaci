$('#naslov').on('click', function () {
  $('#tekst').show();
});
$('.naslov').click(function () {
  $('.tekst').slideDown(2000);
});
$('.googly').click(function () {
  $('.tekst').hide(2000);
});

$('.arrowLeft').on('click', function () {
  if ($('#img1').attr('src') == '/Epos_Domaci/IMG/Cat.jpg') {
    $('#img1').attr('src', '/Epos_Domaci/IMG/Yarn.jpeg');
    $('#img2').attr('src', '/Epos_Domaci/IMG/Hidrant.webp');
    $('#img3').attr('src', '/Epos_Domaci/IMG/Items.avif');
    $('#img4').attr('src', '/Epos_Domaci/IMG/rockWithEyes.png');
  } else if ($('#img1').attr('src') == '/Epos_Domaci/IMG/Yarn.jpeg') {
    $('#img1').attr('src', '/Epos_Domaci/IMG/Hidrant.webp');
    $('#img2').attr('src', '/Epos_Domaci/IMG/Items.avif');
    $('#img3').attr('src', '/Epos_Domaci/IMG/rockWithEyes.png');
    $('#img4').attr('src', '/Epos_Domaci/IMG/Cat.jpg');
  } else if ($('#img1').attr('src') == '/Epos_Domaci/IMG/Hidrant.webp') {
    $('#img1').attr('src', '/Epos_Domaci/IMG/Items.avif');
    $('#img2').attr('src', '/Epos_Domaci/IMG/rockWithEyes.png');
    $('#img3').attr('src', '/Epos_Domaci/IMG/Cat.jpg');
    $('#img4').attr('src', '/Epos_Domaci/IMG/Yarn.jpeg');
  } else if ($('#img1').attr('src') == '/Epos_Domaci/IMG/Items.avif') {
    $('#img1').attr('src', '/Epos_Domaci/IMG/rockWithEyes.png');
    $('#img2').attr('src', '/Epos_Domaci/IMG/Cat.jpg');
    $('#img3').attr('src', '/Epos_Domaci/IMG/Yarn.jpeg');
    $('#img4').attr('src', '/Epos_Domaci/IMG/Hidrant.webp');
  } else if ($('#img1').attr('src') == '/Epos_Domaci/IMG/rockWithEyes.png') {
    $('#img1').attr('src', '/Epos_Domaci/IMG/Cat.jpg');
    $('#img2').attr('src', '/Epos_Domaci/IMG/Yarn.jpeg');
    $('#img3').attr('src', '/Epos_Domaci/IMG/Hidrant.webp');
    $('#img4').attr('src', '/Epos_Domaci/IMG/Items.avif');
  }
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
