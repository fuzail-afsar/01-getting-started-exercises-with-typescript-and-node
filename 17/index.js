var guests = ['anas', 'fakhir', 'islam'];
var sendInvite = function (guests, message) {
    if (message === void 0) { message = ""; }
    return guests.forEach(function (guest) {
        var msg = message || 'You are cordially invited to join us for a delightful evening of good company, delectable cuisine, and heartwarming conversations at our home. It would be honored to have you as our guest for a memorable dinner.';
        console.log("Hi! ".concat(guest, ", \n").concat(msg, " \nDate and time: ").concat(new Date().toISOString(), " \nLocation: ABC"));
    });
};
sendInvite(guests);
// fakhir is not coming, 
console.log("".concat(guests[1], " is not coming."));
// add faizan to guest list
guests[1] = 'faizan';
// send again invite
sendInvite(guests);
//========= 16 ==============
var getMiddleIndex = function (arr) { return Math.floor(arr.length / 2); };
// add new guest at beginning
guests.unshift('ali');
// add new guest at middle
guests.splice(getMiddleIndex(guests), 0, 'rizwan');
// add new guest in the end
guests.push('farooq');
// new guests 
console.log("New guests for bigger dinner table: ".concat(guests[0], ", ").concat(guests[getMiddleIndex(guests) - 1], ", ").concat(guests.slice(-1)));
sendInvite(guests);
//========= 17 ==============
console.log('Invite only two people for dinner.');
// un-invite message
for (var i = guests.length - 1; i > 1; i--) {
    console.log("sorry! ".concat(guests.pop(), " can\u2019t invite you to dinner"));
}
sendInvite(guests, 'You are still invited to dinner.');
// empty array
guests.length = 0;
console.log(guests);
