//JSON placeholder for free fake APIs
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => console.log("loaded data", data));
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => displayUserName(users));
}

function displayUserName(users) {
    document.getElementById("title").innerText = "Users List";
    const ul = document.getElementById("user-list");
    users.forEach((user) => {
        // console.log(user.name);
        const li = document.createElement("li");
        li.innerText = `Name: ${user.name}
        Email: ${user.email}`;
        ul.appendChild(li);
    });
}
