var guests = ['anas', 'fakhir', 'islam'];
var sendInvite = function (guests) { return guests.forEach(function (guest) {
    console.log("Hi! ".concat(guest, ", \nYou are cordially invited to join us for a delightful evening of good company, delectable cuisine, and heartwarming conversations at our home. It would be honored to have you as our guest for a memorable dinner. \nDate and time: ").concat(new Date().toISOString(), " \nLocation: ABC"));
}); };
sendInvite(guests);
// fakhir is not coming, 
console.log("".concat(guests[1], " is not coming."));
// add faizan to guest list
guests[1] = 'faizan';
// send again invite
sendInvite(guests);
