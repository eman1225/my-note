// Get the notes container element
const notesContainer = document.querySelector('.notes-container');

// Get the notes list elements
const notesList = document.querySelectorAll('.notes-list');

// Add event listeners to the notes list elements
notesList.forEach((list) => {
  list.addEventListener('click', (e) => {
    // Get the note element that was clicked
    const note = e.target.closest('.note');

    // If a note was clicked, toggle its visibility
    if (note) {
      // Toggle the visibility of the note
      note.classList.toggle('visible');

      // Get the note title and content
      const noteTitle = note.querySelector('h2').textContent;
      const noteContent = note.querySelector('p').textContent;

      // Create a new folder for the note
      const newFolder = document.createElement('div');
      newFolder.className = 'notes-list';
      newFolder.innerHTML = `
        <div class="note" data-id="${note.dataset.id}">
          <h2>${noteTitle}</h2>
          <p>${noteContent}</p>
        </div>
      `;

      // Add the new folder to the notes container
      notesContainer.appendChild(newFolder);
    }
  });
});