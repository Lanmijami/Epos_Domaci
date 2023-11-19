function validacija() {
  let mejl = $('#mail').val();
  let ime = $('#name').val();

  if (ime == '') {
    window.alert('Ime mora biti popunjeno');
    $('#name').css('border-color', 'red');
    return false;
  }

  if (mejl == '') {
    window.alert('Mejl mora biti popunjen');
    $('#mail').css('border-color', 'red');
    return false;
  }

  let radio;

  if (document.getElementById('formRadio1').checked == true) {
    radio = '18';
  } else if (document.getElementById('formRadio2').checked == true) {
    radio = '18 - 38';
  } else if (document.getElementById('formRadio3').checked == true) {
    radio = '39 - 45';
  } else {
    radio = '45+';
  }

  let check = '';

  if (document.getElementById('kamen').checked == true) {
    check += '[kamen] ';
  }
  if (document.getElementById('banana').checked == true) {
    check += '[banana] ';
  }
  if (document.getElementById('Protivpožarniaparat').checked == true) {
    check += '[Protivpožarni aparat] ';
  }
  if (document.getElementById('Pisoar').checked == true) {
    check += '[pisoar] ';
  }
  if (document.getElementById('Saksija').checked == true) {
    check += '[saksija] ';
  }
  if (document.getElementById('Random').checked == true) {
    check += '[random] ';
  }

  alert(
    'Uneli ste za ime: ' +
      ime +
      '\n\nZa mejl: ' +
      mejl +
      '\n\nZa starosni opseg: ' +
      radio +
      '\n\nŽelite da dodamo sledeće predmete u galeriju: \n' +
      check
  );

  return true;
}
