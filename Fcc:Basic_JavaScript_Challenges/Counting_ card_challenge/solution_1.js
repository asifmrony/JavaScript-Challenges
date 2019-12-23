var count = 0;

function cc(card) {
  // Only change code below this line
  var arr = [];
  arr.push(card);
  for(var i = 0; i < arr.length; i++){
    (arr[i] >= 2 && arr[i] <= 6) ? count++ :
      (arr[i] >= 7 && arr[i] <= 9) ? count+=0 :
        count--;
  }
  if(count == 0 || count <= 0){
    console.log(count + " Hold");
  } else {
    console.log(count + " Bet");
  }
  
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display

//cc(2); cc(3); cc(7); cc('K'); cc('A');
//cc(2); cc(3); cc(4); cc(5); cc(6);
//cc(7); cc(8); cc(9);
//cc(10); cc('j'); cc('Q'); cc('K'); cc('A');
//cc(3); cc(7); cc('Q'); cc(8); cc('A');
//cc(2); cc('J'); cc(9); cc(2); cc(7);
//cc(2); cc(2); cc(10);
cc(3); cc(2); cc('A'); cc(10); cc('K');

