///Business logic
function player1(input1) {
  this.input1 = input1;

}
function player2(input2) {
  this.input2 = input2;

}

///User Interface
$(document).ready(function () {
  $("form#player1").submit(function (event) {
    event.preventDefault();
    var input1 = Math.floor(Math.random() * 6) + 1;
    var newPlayer1 = new player1(input1);
    console.log(newPlayer1)
  });
  $("form#player2").submit(function (event) {
    event.preventDefault();
    var input2 = Math.floor(Math.random() * 6) + 1;
    var newPlayer2 = new player2(input2);
    console.log(newPlayer2)
  });

});
