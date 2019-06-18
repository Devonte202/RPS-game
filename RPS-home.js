$(document).ready(function(){
  // rock = 1
  // paper = 2
  // scissors = 3
  var x;
  var s_p = 0; //player score
  var s_a = 0; //computer score
  var r = 1;
  var AI_pick;
  var Player_pick;
  var renders = {
      1:'<img class="col-sm rendered_element" id="rock" src="rock.png"></img>', // rock render
      2:'<img class="col-sm rendered_element" id="paper" src="paper.png"></img>', //paper render
      3:'<img class="col-sm rendered_element" id="scissors" src="scissors.png"></img>' //scissors render
    };


   // Code below is responsible for the fade in fade out transitions between pages
    $(".mode-text").hide();
    $(".mode-text").delay(600).fadeIn();
    $("#rock").hide();
    $("#rock").delay(600).fadeIn();
    $("#paper").hide();
    $("#paper").delay(600).fadeIn();
    $("#scissors").hide();
    $("#scissors").delay(600).fadeIn();

  $("#start-button").click(function(){

    $("#start-button").fadeOut();
    $("#start-text").fadeOut();
    $(location).delay( 600 ).attr('href', 'RPS-single.html');

  });
$("body").on("click",".mode-button-s", function(){
    $(".mode-text").fadeOut();
    $(".mode-text").fadeOut();
    $(location).delay( 600 ).attr('href', 'RPS-single.html');
  });
// To avoid creating more html files, program will empty "game screen" and fill with new information when the replay button is pressed
    $("body").on("click","#replay", function(){
      $("#game_screen").empty();
        $("#game_screen").append('<center> <div class="mode-button"> <h1 class="mode-text">Choose your weapon</h1></div></center><center><div><img class="col-sm option" id="rock" src="rock.png"></img><img class="col-sm option" id="paper" src="paper.png"></img><img class="col-sm option" id="scissors" src="scissors.png"></img></div></center>');
         r++;
          $("#round_num").text("Round " + r);
    });
    $("#round_num").text("Round " + r);

// This code assigns the players click on the image to the numerical reference of R.P.S
   $("body").on("click",".option", function(){
      if (this.id == "rock") {
         game_Play(1);
        console.log(1);
      }else if (this.id == "paper") {
        game_Play(2);
        console.log(2);
      }else if (this.id == "scissors") {
        game_Play(3);
        console.log(3);
      }
    })

// This clears the game screen and displays the result of the round
    function result_Function(p, a) {
        $("#game_screen").empty();
        $("#game_screen").append('<div id="render_Box">'+ renders[p] + renders[a] + '</div>');
    }
// This clears the game screen and displays the result of the round in the event of a tie
    function tie_Function(p) {
        $("#game_screen").empty();
          $("#game_screen").append('<div id="render_Box">'+ renders[p] + renders[p] + '</div>');
          $("#game_screen").append('<center><div class="result_Banner">Tie Game!</div></center>');
          $("#game_screen").append('<div class="btn btn-primary" id="replay">Play Again</div>');
    }
// This function creates the computer opponents random choice between R.P.S and compares it to the players choice
    function game_Play(p_choice) {
      Player_pick = p_choice;
      // AI choice
      x = Math.round(Math.random()*100);
      if (x >= 1 &&  x < 34) {
          (AI_pick = 1);
      }else if(x >= 34 && x < 67){
        (AI_pick = 2);
      } else{
        (AI_pick = 3);
      }
      // Possibilties
      if (AI_pick == p_choice) {
           tie_Function(p_choice);
           console.log("Tie game");
      }else if(p_choice == 1 && AI_pick == 3){ // rock vs paper
        console.log("Player wins");
        result_Function(p_choice, AI_pick);
        $("#game_screen").append('<center><div class="result_Banner">You Won!</div></center>');
          $("#game_screen").append('<div class="btn btn-primary" id="replay">Play Again</div>');
          $("#play").empty();
          s_p++;
          $("#play").append("Player" + " " + s_p);
      } else if(p_choice == 2 && AI_pick == 1){ // paper vs rock
        console.log("Player wins");
          result_Function(p_choice, AI_pick);
          $("#game_screen").append('<center><div class="result_Banner">You Won!</div></center>');
          $("#game_screen").append('<div class="btn btn-primary" id="replay">Play Again</div>');
          $("#play").empty();      //Scoreboard code starts here
          s_p++;
          $("#play").append("Player" + " " + s_p);
      } else if(p_choice == 3 && AI_pick == 2){ // scissors vs paper
        console.log("Player wins");
          result_Function(p_choice, AI_pick);
          $("#game_screen").append('<center><div class="result_Banner">You Won!</div></center>');
          $("#game_screen").append('<div class="btn btn-primary" id="replay">Play Again</div>');
          $("#play").empty();
          s_p++;
          $("#play").append("Player" + " " + s_p);
      } else{
       console.log("Player loses");
         result_Function(p_choice, AI_pick);
         $("#game_screen").append('<center><div class="result_Banner">You Lost...</div></center>');
         $("#game_screen").append('<div class="btn btn-primary" id="replay">Play Again</div>');
         $("#comp").empty();
         s_a++;
         $("#comp").append("Computer" + " " + s_a);
      }
         if (s_p == 3 && s_a < 3) {
            alert("You Win!");
            $(location).delay( 600 ).attr('href', 'RPS-home.html');
         } else if(s_p < 3 && s_a == 3){
           alert("You Lose...");
           $(location).delay( 600 ).attr('href', 'RPS-home.html');
         }
    }

});
