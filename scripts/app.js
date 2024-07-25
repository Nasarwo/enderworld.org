var array = [
  "ШВЕПСУ ХОТИТЕ?",
  "I'm Drive",
  "ТУТ НЕТ НОСКОВ",
  "НАЖМЕШЬ - ГЕЙ",
  "ПАВЕЛ ГЕЙ",
  "ЧЕШСКИЙ ИНОАГЕНТ?",
];
var randomIndex = Math.floor(Math.random() * array.length);
var text = array[randomIndex];
document.getElementById("text").innerHTML = text;
