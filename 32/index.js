var current_users = ['admin', 'fuzail', 'ali', 'osama', 'faraz'];
var new_users = ['islam', 'anas', 'admin', 'fuzail', 'fakhir'];
new_users.forEach(function (newUser) {
    var isUserFound = false;
    for (var i = 0; i < current_users.length; i++) {
        var user = current_users[i];
        if (user.toLowerCase() === newUser.toLowerCase()) {
            isUserFound = true;
            break;
        }
    }
    if (isUserFound) {
        console.log('person will need to enter a new username');
    }
    else {
        console.log('username is available');
    }
});
