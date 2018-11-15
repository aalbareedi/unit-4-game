$(document).ready(function() {
  var red = 0,
    blue = 0,
    yellow = 0,
    green = 0,
    totalScore = 0,
    numOfLosses = 0,
    numOfWins = 0,
    compScore = 0;

  compScore = generateRandom(19, 120);
  red = generateRandom(1, 12);
  blue = generateRandom(1, 12);
  yellow = generateRandom(1, 12);
  green = generateRandom(1, 12);

  $("#scoreCounter").text(compScore);

  $("#red").click(function() {
    totalScore += red;
    if (totalScore > compScore) {
      // if user loses
      numOfLosses++;
      $("#lossesCounter").text(numOfLosses);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else if (totalScore == compScore) {
      // if user wins
      numOfWins++;
      $("#winsCounter").text(numOfWins);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else {
      // means that they are still playing.
      $("#currentUserScore").text(totalScore);
    }
  });
  $("#blue").click(function() {
    totalScore += blue;
    if (totalScore > compScore) {
      // if user loses
      numOfLosses++;
      $("#lossesCounter").text(numOfLosses);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else if (totalScore == compScore) {
      // if user wins
      numOfWins++;
      $("#winsCounter").text(numOfWins);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else {
      // means that they are still playing.
      $("#currentUserScore").text(totalScore);
    }
  });
  $("#yellow").click(function() {
    totalScore += yellow;
    if (totalScore > compScore) {
      // if user loses
      numOfLosses++;
      $("#lossesCounter").text(numOfLosses);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else if (totalScore == compScore) {
      // if user wins
      numOfWins++;
      $("#winsCounter").text(numOfWins);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else {
      // means that they are still playing.
      $("#currentUserScore").text(totalScore);
    }
  });
  $("#green").click(function() {
    totalScore += green;
    if (totalScore > compScore) {
      // if user loses
      numOfLosses++;
      $("#lossesCounter").text(numOfLosses);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else if (totalScore == compScore) {
      // if user wins
      numOfWins++;
      $("#winsCounter").text(numOfWins);
      compScore = generateRandom(19, 120);
      red = generateRandom(1, 12);
      blue = generateRandom(1, 12);
      yellow = generateRandom(1, 12);
      green = generateRandom(1, 12);
      totalScore = 0;
      $("#currentUserScore").text(totalScore);
      $("#scoreCounter").text(compScore);
    } else {
      // means that they are still playing.
      $("#currentUserScore").text(totalScore);
    }
  });

  function generateRandom(min, max) {
    var randomNum = Math.random() * (max - min) + min; //returns 1 - startNum
    return Math.ceil(randomNum); //returns number in between startNum & endNum
  }
});
