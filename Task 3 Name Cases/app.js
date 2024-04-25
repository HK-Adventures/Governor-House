var personName = "hAsSaAn kHaN";
console.log("Name in Uppercase : ".concat(personName.toUpperCase()));
console.log("Name in Lowercase : ".concat(personName.toLowerCase()));
var step1 = personName.split(' ');
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(' ');
console.log("Name with Title Case : ".concat(step3));
