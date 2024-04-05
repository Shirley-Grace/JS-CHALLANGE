
function challange1(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const challange1Done = false;
            if (challange1Done) {
                resolve("First one Done!!");
            }
            else {
                reject("First not complete")
            }
        }, 4000);
    })
}
function challange2(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const challange2Done = true;
            if (challange2Done) {
                resolve("Second one Done!!");
            }
            else {
                reject("second not complete")
            }
        }, 2000);
    })
}
function challange3(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const challange3Done = true;
            if (challange3Done) {
                resolve("Third one Done!!");
            }
            else {
                reject("third not complete")
            }
        }, 4000);
    })
}
function challange4(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const challange4Done = true;
            if (challange4Done) {
                resolve("Fourth one Done!!");
            }
            else {
                reject("Fourth not complete")
            }
        },2500);
    })
}
function challange5(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const challange5Done = true;
            if (challange5Done) {
                resolve("Fifth one Done!!");
            }
            else {
                reject("Fifth not complete")
            }
        }, 1200);
    })
}


challange1().then(value => { console.log(value); return challange2() })
    .then(value => { console.log(value); return challange3() })
    .then(value => { console.log(value); return challange4() })
    .then(value => { console.log(value); return challange5() })
    .then(value => { console.log(value); console.log("Challanges all Doneee!!!") })
    .catch(error => console.error(error))

