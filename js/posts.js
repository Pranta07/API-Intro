function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => displayPost(data));
}
loadPosts();
function displayPost(posts) {
    postSection = document.getElementById("posts");
    posts.forEach((post) => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postSection.appendChild(div);
    });
}

// creating a resourse using POST method
function addNewPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "New post",
            body: "ddjndeo-iqdodnndp-odjdoijdojdkpdd",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
