 // Add functionality for comment submission
 document.querySelectorAll('.comment-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input').value;
      const message = form.querySelector('textarea').value;

      if (name.trim() && message.trim()) {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
        form.nextElementSibling.appendChild(comment);

        form.reset(); // Clear form after submission
      } else {
        alert('Please fill in all fields before submitting your comment.');
      }
    });
  });