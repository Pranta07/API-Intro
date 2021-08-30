// how to handle api error in javascript
/* fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=7a4e4161428809308140f56f37945c5c"
)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 404) {
            return Promise.reject("error 404");
        } else {
            return Promise.reject("some other error: " + response.status);
        }
    })
    .then((data) => console.log("data is", data))
    .catch((error) => console.log("error is", error));
 */
/*  The way to access APIs is with fetch. 
    Fetch is function built into JavaScript that allows you to query any URL/API to get back data.
    The most important part is that fetch is asynchronous so it will run in the background and
    let you know when it finishes using promises. 
*/

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=7a4e4161428809308140f56f37945c5c"
)
    .then((res) => {
        if (res.ok) return res.json();
        else console.log("Error");
    })
    .then((data) => console.log(data));
