//Task 14
var GuestList = ["Ahmed", "Ashir", "Zohaib", "Muneeb", "Mustajab"];
console.log("\n List Of Invitations : \n");
for (var a = 0; a < GuestList.length; a++) {
    console.log("Dear ".concat(GuestList[a], " : \n You are invited to dinner. \n"));
}
//Task 15
//Zohaib is not comming so replacing his name with Ali.
console.log("\"Due to some personal reason ".concat(GuestList[2], ", can't come to dinner.\""));
GuestList[2] = "Ali";
console.log("\n New List Of Invitations :\n");
for (var b = 0; b < GuestList.length; b++) {
    console.log("Dear ".concat(GuestList[b], " : \n You are invited to dinner. \n"));
}
//Task 16
//Found a bigger place so inviting 3 more friends.
console.log("Good News Everyone!! I have found a bigger  place for the dinner, so more space is avaibale and guess what more people are comming. \n");
GuestList.unshift("Mustafa");
GuestList.splice(2, 0, "Noman");
GuestList.push("Mousab");
for (var c = 0; c < GuestList.length; c++) {
    console.log("Dear ".concat(GuestList[c], " : \n You are invited to dinner. \n"));
}
//Task 17
//None of places are available for the date of the dinner so the only place available on that date is small and is big enough for 3 people including me so need to univite some people.
console.log("Sad News Everyone!! The new place I found isn't available for the date we all are free so the new place can only attend 3 people including me so only 2 more people are coming.");
while (GuestList.length > 2) {
    var NotInvited = GuestList.pop();
    console.log("\n Sorry ".concat(NotInvited, ", Due to limited space I can't invite you for the dinner. \n"));
}
for (var d = 0; d < GuestList.length; d++) {
    console.log("Dear ".concat(GuestList[d], " : \n You are still invited to dinner. \n"));
}
GuestList.pop();
GuestList.pop();
console.log(GuestList);
