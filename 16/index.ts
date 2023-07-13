const guests = ['anas', 'fakhir', 'islam'];

const sendInvite = (guests: string[]) => guests.forEach(guest => {
    console.log(`Hi! ${guest}, \nYou are cordially invited to join us for a delightful evening of good company, delectable cuisine, and heartwarming conversations at our home. It would be honored to have you as our guest for a memorable dinner. \nDate and time: ${new Date().toISOString()} \nLocation: ABC`);
});

sendInvite(guests);

// fakhir is not coming, 
console.log(`${guests[1]} is not coming.`);

// add faizan to guest list
guests[1] = 'faizan';

// send again invite
sendInvite(guests);

//========= 16 ==============

const getMiddleIndex = <T>(arr: Array<T>) => Math.floor(guests.length / 2);

// add new guest at beginning
guests.unshift('ali');

// add new guest at middle
guests.splice(getMiddleIndex(guests), 0, 'rizwan');

// add new guest in the end
guests.push('farooq');

// new guests 
console.log(`New guests for bigger dinner table: ${guests[0]}, ${guests[getMiddleIndex(guests) - 1]}, ${guests.slice(-1)}`);

sendInvite(guests);