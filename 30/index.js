var usernames = ['admin', 'fuzail', 'ali', 'osama', 'faraz'];
usernames.forEach(function (username) {
    if (username === 'admin')
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    else
        console.log("Hello ".concat(username, ", thank you for logging in again."));
});
