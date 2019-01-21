var api_key = "&api_key=rsDTmlzMLP7i5V7yhjaxjEUx54ei5UmU";
var limit = 5;
var queryURL;
var results;
var rating;
var newButton;
var form_text;
var newCarId;
var cars = ["Subaru", "Porsche", "BMW", "Mercedez", "McClaren", "Dodge", "Ford", "Hyundai", "Lamborghini", "Chevrolet"];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  person + api_key + "&limit=" + limit + "";
 // $(this).attr("data-person");

(function load_buttons() {
  for (var i = 0; i < cars.length; i++) {
    newButton = $('<button>');
    $('#button_area').append(newButton[i]);
    newButton.addClass("car_button");
    newButton.attr("data-name", cars[i]);
    newButton.text(cars[i]);
    $("#button_area").append(newButton);

  }
}());


$("#create_button").on("click", function () {
  form_text = "";
  for (var i = 0; i < ($('newCar')).length; i++) {
    form_text += ($('newCar')).elements[i].value + "<br>";
  }
  newButton = $('<button>');
  newButton.addClass("car_button");
  newButton.attr("data-name", form_text);
  newButton.text(form_text);
  $("#button_area").append(newButton);
});

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   })
  //     .then(function() {

  //       console.log(queryURL);
  //       var results = response.data;

  //       for (var i = 0; i < results.length; i++) {
  //         var gifDiv = $("<div>");

  //         var rating = results[i].rating;

  //         var p = $("<p>").text("Rating: " + rating);

  //         var personImage = $("<img>");
  //         personImage.attr("src", results[i].images.fixed_height.url);

  //         gifDiv.prepend(p);
  //         gifDiv.prepend(personImage);

  //         $("#gifs-appear-here").prepend(gifDiv);
  //       }
  //     });
  // });