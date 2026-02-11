// Fetch file list from the server
fetch('/api/files')
  .then(response => response.json())
  .then(files => {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ''; // Clear the list

    files.forEach(file => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="/download/${file}" class="file-link">${file}</a>
        <a href="/delete/${file}" class="delete-link" onclick="return confirm('Are you sure you want to delete this file?')">Delete</a>
      `;
      fileList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching files:', error);
  });

// Optional: Add dark/light mode toggle
const toggle = document.createElement('button');
toggle.textContent = 'Toggle Dark Mode';
toggle.style.position = 'fixed';
toggle.style.top = '10px';
toggle.style.right = '10px';
toggle.style.zIndex = '1000';
toggle.style.padding = '10px';
toggle.style.background = '#4b0082';
toggle.style.color = '#fff';
toggle.style.border = 'none';
toggle.style.borderRadius = '5px';
toggle.style.cursor = 'pointer';
toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
};
document.body.appendChild(toggle);