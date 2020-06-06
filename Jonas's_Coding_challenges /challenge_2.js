var johnsTeamAverage = (100 + 120 + 130) / 3;
var mikesTeamAverage = (110 + 90 + 150) / 3;
var marysTeamAverage = (190 + 40 + 120) / 3;
console.log(johnsTeamAverage, mikesTeamAverage, marysTeamAverage);

if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage) {
    console.log('John\s team wins and their average is ' + johnsTeamAverage);
} else if (johnsTeamAverage < marysTeamAverage && mikesTeamAverage < marysTeamAverage) {
    console.log('Mary\'s team wins and their average is ' + marysTeamAverage);
} else if (johnsTeamAverage === mikesTeamAverage && johnsTeamAverage === marysTeamAverage && mikesTeamAverage === marysTeamAverage) {
    console.log('This is a draw.They wins same on average');
} else {
    console.log('Mike\'s team wins and their average is ' + mikesTeamAverage);
}