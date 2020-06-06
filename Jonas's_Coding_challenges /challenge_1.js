var marks_height = 1.63;
var marks_weight = 65;

var johns_height = 1.80;
var johns_weight = 70;

var marks_BMI = marks_weight / (marks_height * marks_height);

var johns_BMI = johns_weight / (johns_height * johns_height);

console.log(marks_BMI);

console.log(johns_BMI);

isMarksBmiHigher = marks_BMI > johns_BMI;

console.log('Is Mark\'s BMI higher than Johns ? ' + isMarksBmiHigher);