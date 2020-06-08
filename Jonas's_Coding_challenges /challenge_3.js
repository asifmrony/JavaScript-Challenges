function tipCalculator(bill) {
    var tips;
    if (bill < 50) {
        tips = 0.2 * bill;
    } else if (bill > 50 && bill < 200) {
        tips = 0.15 * bill;
    } else {
        tips = 0.1 * bill;
    }
    return tips;
}
/*
var restaurenOneTips = tipCalculator(124);
var restaurenTwoTips = tipCalculator(48);
var restaurenThreeTips = tipCalculator(268);

var totalTips = [restaurenOneTips, restaurenTwoTips, restaurenThreeTips];
var finalPay = [124 + tipCalculator(124), 48 + tipCalculator(48), 268 + tipCalculator(268)];

console.log(totalTips);
console.log(finalPay);
*/

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator([bills[2]])
];

var finalBills = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(tips);
console.log(finalBills);