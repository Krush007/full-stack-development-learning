// ==========================
// CALLBACK EXAMPLE
// ==========================

function getDataCallback(callback) {
  setTimeout(() => {
    callback("Data received using Callback");
  }, 2000);
}

getDataCallback((data) => {
  console.log(data);
});

// Output after 2 seconds:
// Data received using Callback



// ==========================
// PROMISE EXAMPLE
// ==========================

function getDataPromise() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data received using Promise");
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

getDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Output after 2 seconds:
// Data received using Promise