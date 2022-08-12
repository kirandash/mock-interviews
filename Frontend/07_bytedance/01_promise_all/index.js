// Implement Promise.all
// The default promise all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success 1")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success 2")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success 3")
    }, 1000)
})

Promise.all([p1, p2, p3]).then(resp => {
    console.log(resp)
}).catch(e => {
    console.error(e)
});

/**
 * Psuedocode
 * Create an Object which will return all fn
 * all should return a promise
 * in promise loop through all promises and assign responses to array using index instead of push since order is important
 * also use a counter to count number of promises resolved instead of index since order is async
 * When the number of promises resolved is equal to the length of the task array we will resolve the overall results array.
 */
const MyPromise = {
    all: function(promises) {
        const results = [];
        let promiseCompleted = 0;
        return new Promise((resolve, reject) => {
            promises.forEach((promise, idx) => {
                promise.then(resp => {
                    // use index based assignment instead of results.push since async
                    results[idx] = resp;
                    promiseCompleted++; // use counter instead of index since async
                    if(promiseCompleted === promises.length){
                        resolve(results);
                    }
                }).catch(e => {
                    reject(e)
                })
            })
        })
    }
}

MyPromise.all([p1, p2, p3]).then(resp => {
    console.log(resp)
}).catch(e => {
    console.error(e)
})