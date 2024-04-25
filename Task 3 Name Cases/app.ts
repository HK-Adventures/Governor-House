let personName: string = "hAsSaAn kHaN";

console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
console.log(`Name in Lowercase : ${personName.toLowerCase()}`);

let step1 = personName.split(' ');

let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

let step3 = step2.join(' ');

console.log(`Name with Title Case : ${step3}`);
