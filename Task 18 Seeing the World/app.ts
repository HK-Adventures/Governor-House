let FavPlaces : string[] = ["Makkha" , "Times Square" , "Paris" , "Grand Canyan" , "Canada"];

//Original

console.log (`\t\nOriginal Order \t\n ${FavPlaces}`);

//In Alphabatical Order With Original

console.log (`\t\nIn Alphabatical Order \t\n ` + [...FavPlaces].sort());
console.log (`\t\nOriginal Order\t\n ${FavPlaces}`);

//In Reverse Alphabatical Order

console.log ("\t\nIn Reverse Alphabatical Order\t\n" + [...FavPlaces].sort().reverse());
console.log (`\t\nOriginal Order\t\n ${FavPlaces}`);

//Reveersing the Original 

console.log ("\t\nReverse of the Original\t\n" + FavPlaces.reverse());

//Reversing Again

console.log ("\t\nAgain Reverse\t\n" + FavPlaces.reverse());

//Chaning the Original To Alphabatical Order

console.log (`\t\nIn Alphabatical Order Again\t\n ${FavPlaces.sort()}`);