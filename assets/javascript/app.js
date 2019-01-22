var api_key = "&api_key=rsDTmlzMLP7i5V7yhjaxjEUx54ei5UmU";
var limit = 5;
var queryURL;
var results;
var rating;
var newButton;
var form_text;
var newCars = [];
var carMakeList = ['Abarth', 'AC', 'ACPropulsion', 'Acura', 'A.D.Tramontana', 'AlfaRomeo', 'Almac', 'AlternativeCars', 'Amuza', 'Anteros', 'Arash', 'Ariel', 'Arrinera', 'ASL', 'Asterio', 'AstonMartin', 'Audi', 'BAC', 'Bajaj', 'BeijingAutomobileWorks', 'Bentley', 'BMW', 'Bolloré', 'Bolwell', 'Brilliance', 'Bristol', 'BRMBuggy', 'Brooke', 'Buddy', 'Bufori', 'Bugatti', 'Buick', 'BYD', '', 'Cadillac', 'Caparo', 'Carbontech', 'Carice', 'Changan', 'Changhe', 'Chery', 'Chevrolet', 'Chevron', 'Citroën', 'Chrysler', 'CommuterCars', 'Connaught', 'Corvette', 'Covini', 'CUPRA', '', 'Dacia', 'Daihatsu', 'Datsun', 'DeLaChapelle', 'DMC', 'Diardi', 'Dodge', 'Donkervoort', 'Dongfeng', 'Donto', 'DSAutomobiles', 'DynastiElectricCarCorp.', 'E-Vade', 'Effedi', 'Egy-TechEngineering', 'ElectricRaceabout', 'Elfin', 'Englon', 'Etox', 'Equus', 'Exagon', 'Faralli&Mazzanti', 'FAW', 'Ferrari', 'Fiat', 'Fisker', 'Foday', 'Force', 'Ford', 'FordAustralia', 'FordGermany', 'Fraser', 'GACGroup', 'Galpin', 'Geely', 'Genesis', 'Gibbs', 'Gillet', 'Ginetta', 'GMC', 'GreatWall/Changcheng', 'GTAMotor', 'Hennessey', 'Hindustan', 'Honda', 'Holden', 'HTTTechnologies', 'Hyundai', 'ICML', 'IFRseeAspid', 'IranKhodro/IKCO', 'Infiniti', 'Isdera', 'Isuzu', 'JAC', 'Jaguar', 'Jeep', 'JensenMotors', 'Jetcar', 'Jonway', 'JOSS', 'Kaipan', 'Kantanka', 'Karma', 'Koenigsegg', 'Korres', 'Kia', 'Kiat', 'KishKhodro', 'KTM', 'Lada', 'Lamborghini', 'Lancia', 'LandRover', 'Landwind', 'Laraki', 'LeBlanc', 'Leitch', 'Leopard', 'Lexus', 'Li-ion', 'Lifan', 'Lightning', 'Lincoln', 'Lister', 'LocalMotors', 'Lobini', 'Lotec', 'LotusCars', 'LucraCars', 'Luxgen', 'Mahindra', 'Marussia', 'MarutiSuzuki', 'Maserati', 'Mastretta', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MG', 'Micro', 'MINI', 'Mitsubishi', 'Mitsuoka', 'Morgan', 'Mullen', 'Mycar', 'MyVi-Perodua', 'Nissan', 'Noble', 'Nota', 'Oldsmobile', 'Opel', 'OptimalEnergy', 'Orca', 'Oltcit', 'Pagani', 'Panhard', 'Panoz', 'Perana', 'Perodua', 'Peugeot', 'P.G.O.', 'Polarsun', 'Plymouth', 'Porsche', 'Praga', 'Proto/Oullim', 'Proton', 'Puritalia', 'Qoros', 'Qvale', 'Radical', 'Reliant', 'Renault', 'Reva', 'Rimac', 'Rinspeed', 'Roding', 'Roewe', 'Rolls-Royce', 'Rossin-Bertin', 'Rossion', 'Rover', 'Saab', 'Saleen', 'SAIC-GM-Wuling', 'SAIPA', 'Saker', 'Samsung', 'San', 'Sbarro', 'ScionDefunct', 'SEAT', 'ShanghaiMaple', 'SIN', 'Škoda', 'Smart', 'SpadaVettureSport', 'Spyker', 'Ssangyong', 'SSCNorthAmerica', 'Street&RacingTechnology', 'Subaru', 'Suzuki', 'Tanom', 'Tata', 'Tatra', 'Tauro', 'TawonCar', 'TDCars', 'Tesla', 'ThaiRung', 'Think', 'Toyota', 'Trekka', 'Trident', 'Triumph', 'Troller', 'Trumpchi', 'Tushek', 'TVR', 'TVS', 'Ultima', 'UMM', 'UEV', 'Uri', 'UAZ', 'VauxhallMotors', 'Vector', 'Vencer', 'Venirauto', 'Venturi', 'VEPR', 'Volkswagen', 'Volvo', 'VinFast', 'WMotors', 'Wallyscar', 'Westfield', 'Wheego', 'Wiesmann', 'Yamaha', 'YES!', 'YouabianPuma', 'yomom', 'Yugo', 'ZastavaAutomobiles', 'ZenderCars', 'ZenosCars', 'Zenvo', 'ZiL', 'ZXAuto', 'Zeta'];
var cars = ["Subaru", "Porsche", "BMW", "Mercedez", "McClaren", "Dodge", "Ford", "Hyundai", "Lamborghini", "Chevrolet"];

$(document).ready(function () {
  loadButtons();
});

$("#create_button").on("click", createButton);

function createButton() {
  event.preventDefault();
  form_text = $('#carid').val();
  console.log(form_text);

  if ((form_text) === "") {
    alert("Nice try, but you didn't put anything in the box silly!");
  } else if (carMakeList.indexOf(form_text) === -1) {
    alert("Sorry. We know cars.. and that my friend, is no car! Check your spelling or try another make!");
  } else if ((newCars.indexOf(form_text) !== -1) || (cars.indexOf(form_text) !== -1)) {
    alert("We REALLY like " + form_text + " too, but lets stick to a single button for each one!");
  } else {
    newCars.push(form_text);
    newButton = $('<button>');
    newButton.addClass("car_button");
    newButton.attr("data-name", form_text);
    newButton.text(form_text);
    $("#button_area").append(newButton);

  };
}

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//   person + api_key + "&limit=" + limit + "";
// $(this).attr("data-");

function loadButtons() {
  for (var i = 0; i < cars.length; i++) {
    newButton = $('<button>');
    $('#button_area').append(newButton[i]);
    newButton.addClass("car_button");
    newButton.attr("data-name", cars[i]);
    newButton.text(cars[i]);
    $("#button_area").append(newButton);
  }
};

// $('.car-button').on('click', function(){
// });





// function create_gifs(){
//     //grab data from button selected
//     // add data to queryurl
//     //run ajax request
//     //add gifs to gif_area
//   }

