const current_users = ['admin', 'fuzail', 'ali', 'osama', 'faraz'];

const new_users = ['islam', 'anas', 'admin', 'fuzail', 'fakhir'];

new_users.forEach(newUser => {
    let isUserFound = false;
    for (let i = 0; i < current_users.length; i++) {
        const user = current_users[i];
        if (user.toLowerCase() === newUser.toLowerCase()) {
            isUserFound = true;
            break;
        }
    }
    if (isUserFound) {
        console.log('person will need to enter a new username');
    } else {
        console.log('username is available');
    }
})