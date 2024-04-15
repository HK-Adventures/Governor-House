var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FavPlaces = ["Makkha", "Times Square", "Paris", "Grand Canyan", "Canada"];
//Original
console.log("\t\nOriginal Order \t\n ".concat(FavPlaces));
//In Alphabatical Order With Original
console.log("\t\nIn Alphabatical Order \t\n " + __spreadArray([], FavPlaces, true).sort());
console.log("\t\nOriginal Order\t\n ".concat(FavPlaces));
//In Reverse Alphabatical Order
console.log("\t\nIn Reverse Alphabatical Order\t\n" + __spreadArray([], FavPlaces, true).sort().reverse());
console.log("\t\nOriginal Order\t\n ".concat(FavPlaces));
//Reveersing the Original 
console.log("\t\nReverse of the Original\t\n" + FavPlaces.reverse());
//Reversing Again
console.log("\t\nAgain Reverse\t\n" + FavPlaces.reverse());
//Chaning the Original To Alphabatical Order
console.log("\t\nIn Alphabatical Order Again\t\n ".concat(FavPlaces.sort()));
