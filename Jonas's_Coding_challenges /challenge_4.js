var john = {
    fullname: 'John Smith',
    mass: 70, //in kg
    height: 1.7, //in meter
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    fullname: 'Mark Taylor',
    mass: 70, //in kg
    height: 1.75, //in meter
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullname + ' has ' + john.BMI + ' BMI which is higher than Mark\'s.')
} else if (john.BMI < mark.BMI) {
    console.log(mark.fullname + ' has ' + mark.BMI + ' BMI which is higher than John\'s.')
} else {
    console.log('They have Same BMI');
}


/**
 * Challenge 'looping Backward' : print an arry in the reverse way
 */

var values = ['John', 'Smith', 1980, 'designer', false, 'blue'];

console.log(values.length);

for (var i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
}