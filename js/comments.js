function loadData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => dsiplayComment(data));
}
loadData();

function dsiplayComment(comments) {
    // console.log(comments);
    const commentSection = document.getElementById("comments");
    for (const comment of comments) {
        const div = document.createElement("div");
        div.classList.add("comment-box");
        div.innerHTML = `
            <h3>Name: ${comment.name}</h3>
            <h4>Email: ${comment.email}</h4>
            <p>${comment.body}</p>
        `;
        commentSection.appendChild(div);
    }
}
