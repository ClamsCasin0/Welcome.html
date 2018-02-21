"use strict";

// function wait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, {});
//     });
// };
const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });

};

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

           const wait = delay => {
               return new Promise((resolve) => {
                   setTimeout(() => {
                       resolve(delay);
                   }, delay);
               });
           };
// const waitDelayPromise = wait();
//     console.log(waitDelayPromise);
//     waitDelayPromise.then((delay) => console.log('Delay wait done after $(delay / 1000) seconds'));

           wait(3000).then((delay) => console.log(`Wait finished after ${delay / 1000} seconds!`));


//Generate a Personal Access Token for the github api.
//
//We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:
//
//
//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
const dateOfLastCommit = username => {
    const url = `https://api.github.com/users/${username}/events/public`;

    const options = {
        headers: {
            'Authorization': 'token 9fe608508a84e43ec59f5f01ca3f4db7fa877ef1'
        }
    };

    return fetch(url, options)
        .then(response => response.json())
        .then(data => data[0].created_at);
};

console.log(dateOfLastCommit('ClamsCasin0').then(lastCommitDate => console.log(lastCommitDate)));
