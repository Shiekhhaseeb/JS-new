// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//   const data = JSON.parse(xhr.response);
//   console.log(data);
// };
// xhr.send();

/**************** */
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status <300) {
//           const data = JSON.parse(xhr.response);
//   console.log(data);
//     }
// else{
//     console.log('Something went wrong');

// }
// };
// // if internaet is disconnected we get n/w related error
// //thus use :-->
// xhr.onerror = ()=>{//works with n/w failure
// console.log("network error");
// }

// xhr.send();
//https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
/*All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

1xx informational response – the request was received, continuing process
2xx successful – the request was successfully received, understood, and accepted
3xx redirection – further action needs to be taken in order to complete the request
4xx client error – the request contains bad syntax or cannot be fulfilled
5xx server error – the server failed to fulfil an apparently valid request */
/********************************** */
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);

    const id = data[3].id
    console.log(id);
    //https://jsonplaceholder.typicode.com/posts/id(1,2,3...)
    const xhr2 = new XMLHttpRequest()
    const URL2 =`${URL}/${id}` 
        console.log(URL2);
        xhr.open("GET",URL2)//req this url
        xhr2.onload=()=>{
            const data2 = JSON.parse(xhr.response);
            console.log(data2);
            
        }

  } else {
    console.log("Something went wrong");
  }
};

xhr.onerror = () => {
  console.log("network error");
};

xhr.send();
