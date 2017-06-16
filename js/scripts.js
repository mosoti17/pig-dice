///Business logic
function player1(points) {
  this.points = points;
}
player1.prototype.rollScore = function (randomValue) {
  while (randomValue > 0) {
    if (randomValue === 1) {
    alert("Next Player's Turn")
    $('#button1').prop('disabled',true);
    $('#button2').prop('disabled',false);
    break;
  }else if (this.points+randomValue > 100) {
    alert("Player1 has won")
    $('#button1').prop('disabled',true);
    $('#button2').prop('disabled',true);
    break;
  } else {
    return this.points += randomValue;
  }

  }

}
function player2(points) {
  this.points = points;

}
player2.prototype.rollScore = function (randomValue) {
  while (randomValue > 0) {
    if (randomValue === 1) {
    alert("Next Players Turn")
    $('#button2').prop('disabled',true);
    $('#button1').prop('disabled',false);
    break;
  }else if (this.points > 100) {
    alert("Player2 has won")
    $('#button1').prop('disabled',true);
    $('#button2').prop('disabled',true);
    break;

  }  else {
    return this.points += randomValue;
  }
  }
}

///User Interface
$(document).ready(function () {
  var newPlayer1 = new player1(0);

  $("form#player1").click(function (event) {
    event.preventDefault();
    var input1 = Math.floor(Math.random() * 6) + 1;

    newPlayer1.rollScore(input1)
    console.log(newPlayer1.points)
    $("ul#roll1").text("Player1's roll is " + input1)
    $("ul#results1").text("Player1's total is " +newPlayer1.points)
  });
  var newPlayer2 = new player2(0);
  $("form#player2").click(function (event) {
    event.preventDefault();
    var input2 = Math.floor(Math.random() * 6) + 1;

    newPlayer2.rollScore(input2)
    console.log(newPlayer2.points)
    $("ul#roll2").text("Player2's roll is " + input2)
    $("ul#results2").text("Player2's total is " +newPlayer2.points)
  });

});
