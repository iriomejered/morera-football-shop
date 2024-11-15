// Almacenar los comentarios
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// Referencias al DOM
const commentForm = document.getElementById("comment-form");
const commentName = document.getElementById("comment-name");
const commentMessage = document.getElementById("comment-message");
const commentList = document.getElementById("comment-list");

// Renderizar los comentarios
function renderComments() {
    commentList.innerHTML = "";
    comments.forEach((comment, index) => {
        commentList.innerHTML += `
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

// Guardar comentarios en localStorage
function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Agregar un nuevo comentario
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = commentName.value.trim();
    const message = commentMessage.value.trim();

    if (name === "" || message === "") {
        alert("Por favor, llena ambos campos antes de enviar tu comentario.");
        return;
    }

    comments.push({ name, message });
    saveComments();
    renderComments();
    commentForm.reset();
});

// Eliminar un comentario
function deleteComment(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este comentario?")) {
        comments.splice(index, 1);
        saveComments();
        renderComments();
    }
}

renderComments();
