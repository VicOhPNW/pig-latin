$(document).ready(function(){

  var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
  var consanants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x"];

// ,"y","z","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W","X", "Y","Z"

  // if (inputTextVerbiage != vowels) || (inputTextVerbiage != consonants){
  //   return inputTextVerbiage;
  // };





  $("form#pig-latin").submit(function(event){
    event.preventDefault();

  var inputTextVerbiage = $("input#inputTextVerbiage").val();
  // var outputTextTranslation = translation(inputTextVerbiage);

  alert(inputTextVerbiage);

  });

});
