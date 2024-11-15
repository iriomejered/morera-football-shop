let comments = JSON.parse(localStorage.getItem("COMMENTS")) || [];

const COMMENT_FORM = document.getElementById("comment-form");
const COMMENT_NAME = document.getElementById("comment-name");
const COMMENT_MESSAGE = document.getElementById("comment-message");
const COMMENT_LIST = document.getElementById("comment-list");

// Renderizar los comentarios
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

// Guardar comentarios en localStorage
function saveComments() {
    localStorage.setItem("COMMENTS", JSON.stringify(comments));
}

// Agregar un nuevo comentario
COMMENT_FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = COMMENT_NAME.value.trim();
    const message = COMMENT_MESSAGE.value.trim();

    if (name === "" || message === "") {
        alert("Por favor, llena ambos campos antes de enviar tu comentario.");
        return;
    }

    comments.push({name, message});
    saveComments();
    renderComments();
    COMMENT_FORM.reset();
});

// Eliminar un comentario
function deleteComment(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este comentario?")) {
        comments.splice(index, 1);
        saveComments();
        renderComments();
    }
}

// Inicializar la renderización de comentarios
renderComments();
