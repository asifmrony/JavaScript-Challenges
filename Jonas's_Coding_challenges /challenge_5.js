//My Solution: Bugs found and need to solve

/***************************** 
var totalBills = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totalAmount: [],
    tipCalculator: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips = 0.2 * this.bills[i];
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tips = 0.15 * this.bills[i];
            } else {
                this.tips = 0.1 * this.bills[i];
            }
        }
        return this.tips;
    },
    totalAmountCalculator: function () {
        for (var j = 0; j < this.tips.length; j++) {
            this.totalAmount = this.bills[i] + this.tips[i];
        }
    }
};

totalBills.tipCalculator();
totalBills.totalAmountCalculator();
******************************************/


//Jonas's Solution for challenge 5

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function () {
        this.tips = [];
        this.finalAmount = [];

        //first: determining the percentage based on bills
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }


            //adding percentage value to the tips and finalAmount array
            this.tips[i] = bill * percentage;
            this.finalAmount[i] = bill + bill * percentage;
        }
    }
}

john.tipCalculator();
console.log(john);


//Extra challlenge after finishing: about marks family
var mark = {
    fullName: 'Mark Taylor',
    bills: [77, 375, 110, 45],
    tipCalculator: function () {
        this.tips = [];
        this.finalAmount = [];

        //first: determining the percentage based on bills
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }


            //adding percentage value to the tips and finalAmount array
            this.tips[i] = bill * percentage;
            this.finalAmount[i] = bill + bill * percentage;
        }
    }
}

mark.tipCalculator();
console.log(mark);

function averageOfTips(tips) {
    var sum = 0;
    for (var j = 0; j < tips.length; j++) {
        sum = sum + tips[j];
    }
    var average = sum / tips.length;
    return average;
}

var johnFamilyTips = john.tips;
var markFamilyTips = mark.tips;
// console.log(markFamilyTips);

johnFamilyTipsAverage = averageOfTips(johnFamilyTips);
markFamilyTipsAverage = averageOfTips(markFamilyTips);

console.log(johnFamilyTipsAverage, markFamilyTipsAverage);

if (johnFamilyTipsAverage > markFamilyTipsAverage) {
    var output = 'John Family paid the highest tip on average';
} else {
    output = 'Mark Family paid the highest tip on average';
}

console.log(output);