$(document).ready(function () {

  //cached dom elements
  var button = $(".button");
  var inputfield = $(".field");

  //model
  function captureInput() {
    return input = $(inputfield).val();
  }

  //views
  function populateView(input) {
    $('.tasks').append('<li>' + input + '</li>');
  }

  //app controller
  var app = {
    init: function () {},
    /*bindUI: events()*/
  };

  //event listeners

  button.on("click", function () {
    populateView(captureInput());
  });

  inputfield.on("submit", function (e) {
    e.preventDefault();
    populateView(captureInput());
  });

});