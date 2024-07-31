function fetchData(callback) {
    setTimeout(() => {
        const data = {
            name: "Alice",
            age: 30,
        };
        callback(null, data);
    }, 2000);
}

function displayData(err, data) {
    if(err) {
        console.error("Error fetching data:", err);
    } else {
        console.log("Data fetched successfully:", data);
    }
}

fetchData(displayData);

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error fetching data");
        }
    }, 1000);
});

promise.then((result) => {
    console.log(result);
    return result*2;
})
.then((result) => {
    console.log(result);
    return result*3;
})
.catch((error) => {
    console.log(error);
});
