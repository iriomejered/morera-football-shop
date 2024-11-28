let comments = JSON.parse(localStorage.getItem("COMMENTS")) || [];

const COMMENT_FORM = document.getElementById("comment-form");
const COMMENT_MESSAGE = document.getElementById("comment-message");
const COMMENT_LIST = document.getElementById("comment-list");

// Check if the user is registered
function isUserRegistered() {
    return localStorage.getItem("name") !== null;
}

// Render the comments
function renderComments() {
    COMMENT_LIST.innerHTML = "";
    comments.forEach((comment, index) => {
        COMMENT_LIST.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="comment-name">${comment.name}</div>
                    <div class="comment-message">${comment.message}</div>
                </div>
                <button class="delete-btn" onclick="deleteComment(${index})">Eliminar</button>
            </li>
        `;
    });
}

// Save the commens in the localStorage
function saveComments() {
    localStorage.setItem("COMMENTS", JSON.stringify(comments));
}

// Add a new comment
COMMENT_FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isUserRegistered()) {
        alert("Necesitas registrarte para poder comentar.");
        return;
    }

    const name = localStorage.getItem("name"); // Get the name from localStorage
    const message = COMMENT_MESSAGE.value.trim();

    if (message === "") {
        alert("Por favor, escribe un comentario antes de enviarlo.");
        return;
    }

    comments.push({name, message});
    saveComments();
    renderComments();
    COMMENT_FORM.reset();
});

// Delete a comment
function deleteComment(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este comentario?")) {
        comments.splice(index, 1);
        saveComments();
        renderComments();
    }
}

// Start rendering the comments
renderComments();
