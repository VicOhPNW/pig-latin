

var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
  // var consanants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x"];
// ,"y","z","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W","X", "Y","Z"


//checks if starting character is vowel or consanant - boolean
//   function checkStartingLetter(string) {
//     if (vowels.includes(string.charAt(0))) {
//       return "vowel"
//   } else {
//     return "consonant"
//   }
// }
function checkStartingLetter(string) {
  if (vowels.includes(string.charAt(0))) {
    return string;

  }
}
  } else {
    return "consonant"
  }
}



  // if (inputText != vowels) || (inputText != consonants){
  //   return inputText;
  // };



$(document).ready(function(){

  $("form#pig-latin").submit(function(event){
    event.preventDefault();

  var inputText = $("input#inputText").val();
  // var outputText = translation(inputText);

  $("#outputText").text(inputText);

  })

})
