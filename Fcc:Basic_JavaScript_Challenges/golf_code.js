/*In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
 //var temp;
  if(strokes == 1){
    //temp = "Hole-in-one!";
    return names[0];
  } else if(strokes <= par - 2){
    //temp = "Eagle";
    return names[1];
  } else if(strokes == par - 1){
    //temp = "Birdie";
    return names[2];
  } else if(strokes == par){
    //temp = "Par";
    return names[3];
  } else if(strokes == par + 1){
    //temp = "Bogey";
    return names[4];
  } else if(strokes == par + 2){
    //temp = "Double Bogie";
    return names[5];
  } else if(strokes >= par + 3){
    //temp = "Go Home!";
    return names[6];
  }
  //return temp;
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 9));

