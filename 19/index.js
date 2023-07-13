var guests = ['anas', 'fakhir', 'islam'];
guests.forEach(function (guest) {
    console.log("Hi! ".concat(guest, ", \nYou are cordially invited to join us for a delightful evening of good company, delectable cuisine, and heartwarming conversations at our home. It would be honored to have you as our guest for a memorable dinner. \nDate and time: ").concat(new Date().toISOString(), " \nLocation: ABC"));
});
console.log("".concat(guests.length, " are invited on dinner."));
