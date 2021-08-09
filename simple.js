//concat 
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
 
 }
 var first = [1, 2, 3];
 var second = [4, 5];
 console.log(nonMutatingConcat(first, second));
 

 //square only integers and + ve 
 const squareList = arr => {

    return arr.filter(elm=>elm>0).filter(elm=>Math.ceil(elm)==elm).map(elm=>elm*elm);
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  //sorting alphabetic

  function alphabeticalOrder(arr) {
    return arr.sort((a,b)=>{
      
      return a===b?0:a>b?1:-1;
    }
    
    );
    
    }
    console.log(alphabeticalOrder([ "c", "a", "z", "g"]));

    //non mutating sort
    var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

let newArray=arr.slice().sort((a,b)=>{
  return a===b?0:a>b?1:-1;
}
);
return newArray;

}
console.log(nonMutatingSort(globalArray));

//SPLIT STRING into array

function splitify(str) {
    //This includes spaces and punctuation, but not underscores. It’s equivalent to /[^A-Za-z0-9_]/
    return str.split(/[^A-Za-z0-9_]/);
  }
  console.log(splitify("Hello World,I am code"));

  function sentensify(str) {

    return str.split(/\W/).join(" ");
    
    }
    console.log(sentensify("May-the-force-be-with-you"));
//space remove
    function urlSlug(title) {

        return  title.split(" ")
          .filter(elm=>elm!=="")
          .join("-")
          .toLowerCase();
      }
      console.log(urlSlug(" Winter Is Coming"));

      //check posistive
      function checkPositive(arr) {
        return arr.every(elm=>elm>0);
        }
        console.log(checkPositive([1, 2, 3, -4, 5]));

        //addition super
        function add(x) {
            return function(y){
              return function(z){
                return x+y+z;
              }
            }
            }
            add(10)(20)(30);

//the element thats doesnt match return that array 
            function diffArray(arr1, arr2) {
              var newArr = [];
              for(let i=0;i<arr1.length;i++){
                if(arr2.indexOf(arr1[i])<0){
                  newArr.push(arr1[i]);
                }
              }
                for(let i=0;i<arr2.length;i++){
                if(arr1.indexOf(arr2[i])<0){
                  newArr.push(arr2[i]);
                }
              }
              return newArr;
            }
            
            console.log(diffArray([1, 2,7,3, 5], [1, 2, 3, 4, 5]));