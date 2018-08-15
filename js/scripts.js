

var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
  // var consanants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x"];
// ,"y","z","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W","X", "Y","Z"


// checks if starting character is vowel or consanant - boolean
  function checkStartingLetter(string) {
    if (vowels.includes(string.charAt(0))) {
      return "vowel"
  } else {
    return "consonant"
  }
}

function outputVowelWord (string){
  if (vowels.includes(string.charAt(0))) {
    var inputText = string + "ay";
    return inputText;
  };
};







// function checkStartingLetter(string) {
//   if (vowels.includes(string.charAt(0))) {
//     return string;
//     // console.log(inputText.join('ay'));
//
//     returnWord += "ay";
//   }
//
// }
//    else {
//     return "consonant"
//   }
// };



  // if (input#inputText.includes(vowels)) || (inputText != consonants){
  //   return inputText2 = (inputText+'ay');
  // };


$(document).ready(function(){

  $("form#pig-latin").submit(function(event){
    event.preventDefault();

  var inputText = $("input#inputText").val();
  var outputText = outputVowelWord(inputText);

  $("#outputText").text(outputText);

  });

});
