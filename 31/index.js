var usernames = ['admin', 'fuzail', 'ali', 'osama', 'faraz'];
// set usernames to empty
// usernames.length = 0;
if (usernames && !usernames.length) {
    console.log('We need to find some users!');
}
else {
    usernames.forEach(function (username) {
        if (username === 'admin')
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        else
            console.log("Hello ".concat(username, ", thank you for logging in again."));
    });
}
