// kilometerToMeter //
function kilometerToMeter(Kilometer) {
    var convert = Kilometer * 1000;
    return convert;
}
var result = kilometerToMeter(10);
console.log(result);

// budgetCalculator //
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    return watchPrice + phonePrice + laptopPrice;
}
var totalPrice = budgetCalculator(5, 6, 9);
console.log(totalPrice);

// hotelCost //
function hotelcost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = days - 10;
        var second10Days = remainingDays * 80;
        cost = first10Days + second10Days;
    } else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = days - 20;
        var thirdDays = remainingDays * 50;
        cost = first10Days + second10Days + thirdDays;
    }
    return cost;
}
var totalCost = hotelcost(71);
console.log(totalCost);

// megaFriend //

var long = "";

function megaFriend(array) {
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if (word.length > long.length) {
            long = word;
        }
    }
    return long;
}
var friendList = ["faisall", "khaled", "rakib", "saifulislam"];
var longName = megaFriend(friendList);
console.log(longName);