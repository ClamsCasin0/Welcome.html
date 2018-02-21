"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
//
// Use .filter to create an array of user objects
// where each user object has at least 3 languages in the languages array.

const filteredUsers = users.filter((user) => {
    return user.languages.length >= 3;
});

console.log(filteredUsers);

// es6 simplified//
const filteredUsers = users.filter(({ languages }) => {
    return languages.length >= 3;
});

//     Use .map to create an array of strings where each element is a user's email address
//



let arrayEmails = users.map((user) => {
    return user.email;
});
//simplified// fix solution
let arrayEmails = users.map(({ user }) => email);


let arrayEmails = users.map(({ email }) => email);


console.log(arrayOfEmails);





// Use .reduce to transform the array into an object
// where the object's keys are ids and the values are'
// objects that represent each user

setup for main problem
const userObject = users.reduce((accumul, user) => {
    return accumul += user.name + " ";
}, "");

//finished solution
const userObject = users.reduce((accumul, user) => {
    accumul[user.id] = user;
    return accumul;
}, {});


//simplified es6
const userObject = users.reduce((accumul, { id, name, email, languages }) => {
    accumul[id] = {
        name,
        email,
        languages
    };

    return accumul;
}, {});


console.log(usersObject);




