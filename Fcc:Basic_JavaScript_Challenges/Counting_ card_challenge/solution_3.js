var count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display

//cc(2); cc(3); cc(7); cc('K'); cc('A');
//cc(2); cc(3); cc(4); cc(5); cc(6);
//cc(7); cc(8); cc(9);
cc(10); cc('J'); cc('Q'); cc('K'); cc('A');
//cc(3); cc(7); cc('Q'); cc(8); cc('A');
//cc(2); cc('J'); cc(9); cc(2); cc(7);
//cc(2); cc(2); cc(10);
//cc(3), cc(2), cc('A'), cc(10), cc('K');
console.log(cc());

