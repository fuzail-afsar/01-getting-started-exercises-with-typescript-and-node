const guests = ['anas', 'fakhir', 'islam'];

guests.forEach(guest => {
    console.log(`Hi! ${guest}, \nYou are cordially invited to join us for a delightful evening of good company, delectable cuisine, and heartwarming conversations at our home. It would be honored to have you as our guest for a memorable dinner. \nDate and time: ${new Date().toISOString()} \nLocation: ABC`);
});