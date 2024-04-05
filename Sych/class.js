// //greetings
// //welcome
// //presentations
// //study
// //questions
// //farewell


function greetings() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const greetingsDone = true;
            if (greetingsDone) {
                resolve("Good Morning");
            }
            else {
                reject("Greetings not done")
            }
        }, 1000);

    })
}

function welcome() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const welcomeDone = true;
            if (welcomeDone) {
                resolve("Welcome to our class");
            }
            else {
                reject("welcome not done")
            }
        }, 1000);
    })
}

function presentations() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const presentationsDone = true;
            if (presentationsDone) {
                resolve("This is what i did");
            }
            else {
                reject("presentations not done")
            }
        }, 2500);
    })
}

function study() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const studyDone = true;
            if (studyDone) {
                resolve("This is what we are doing today");
            }
            else {
                reject("study not complete")
            }
        }, 4000);
    })
}

function questions() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const questionsDone = true;
            if (questionsDone) {
                resolve("Do you have any questions??", "How did you do that???", "this is how its done");
            }
            else {
                reject("questions not asked")
            }
        }, 2000);
    })
}


function farewell() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const farewellDone = true;
            if (farewellDone) {
                resolve("See you in the next class.");
            }
            else {
                reject("farewell not done")
            }
        }, 500);
    })
}

greetings().then(value => { console.log(value); return welcome() })
    .then(value => { console.log(value); return presentations() })
    .then(value => { console.log(value); return study() })
    .then(value => { console.log(value); return questions() })
    .then(value => { console.log(value); return farewell() })
    .then(value => { console.log(value); console.log("Class is Overrrr!!!") })
    .catch(error => console.error(error))










//CALLBACK HELL

// greetings(function(){
//     welcome(function(){
//         presentations(function(){
//             study(function(){
//                 questions(function(){
//                     farewell(function(){
//                         console.log("Class Done")
//                     })
//                 })
//             })
//         })
//     })
// })


