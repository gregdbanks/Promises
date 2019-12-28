import "./styles.css";

const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open("GET", "https://randomuser.me/api/");
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); // we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };

  request.onerror = () => {
    reject(Error("Error fetching data.")); // error occurred, reject the  Promise
  };

  request.send(); // send the request
});

console.log("Asynchronous request made.");

promise.then(
  data => {
    console.log(JSON.parse(data).results);
    document.body.textContent = `Hello my name is 
    ${JSON.parse(data).results[0].name.first} 
    and you can email me at 
    ${JSON.parse(data).results[0].email}`;
  },
  error => {
    console.log("Promise rejected.");
    console.log(error.message);
  }
);
