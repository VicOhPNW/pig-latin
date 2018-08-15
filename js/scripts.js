$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

  var inputTextVerbiage = $("input#inputTextVerbiage").val();
  var outputTextTranslation = translation(inputTextVerbiage);

  $("#outputTextTranslation").text(outputTextTranslation);



  });
});
