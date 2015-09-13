$(function() {
  $('form#trip').submit(function(event) {
    event.preventDefault();

    var inputCountry = $('input#new-country').val();
    var inputYear = $('input#new-year').val();
    var inputNote = $('input#new-note').val();

    var newTrip = { country: inputCountry, year: inputYear, note: inputNote };

    $('ul#trips').append('<li><span class="trip">' + newTrip.country + '</span></li>');

    $('input#new-country').val('');
    $('input#new-year').val('');
    $('input#new-note').val('');

    $('.trip').last().click(function() {
      $('#show-trip').show();
      $("#show-trip h3").text(newTrip.country);
      $(".year").text(newTrip.year);
      $('.note').text(newTrip.note);
    });
  });
});