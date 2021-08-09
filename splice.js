function nonMutatingSplice(cities) {
    return cities.splice(0,3);
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));