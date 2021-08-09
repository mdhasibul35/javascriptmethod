//usage of slice
//slice don't modify the array
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));


  //without slice

  function sliceArrayWithout(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArrayWithout(inputAnim, 1, 4));

  //slice example-2
  function nonMutatingSplice(cities) {
    return cities.slice(0,3);
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));