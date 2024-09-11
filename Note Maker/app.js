document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText === '') return;  // Don't add empty tasks

    // Create note element
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        ${noteText}
        <button class="delete-btn">&times;</button>
    `;

    // Append note to notes container
    const notesContainer = document.getElementById('notes');
    notesContainer.appendChild(note);

    // Clear input field
    noteInput.value = '';

    // Add delete functionality
    const deleteBtn = note.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        notesContainer.removeChild(note);
    });
});
