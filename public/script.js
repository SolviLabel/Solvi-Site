document.addEventListener("DOMContentLoaded", () => {
  const fileList = document.getElementById("file-list");
  const uploadForm = document.getElementById("upload-form");

  // Load file list
  fetch("/api/files")
    .then((res) => res.json())
    .then((files) => {
      files.forEach((file) => {
        const li = document.createElement("li");
        li.textContent = file;
        li.addEventListener("click", () => {
          window.open(`/download/${file}`, "_blank");
        });
        fileList.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Error loading files:", err);
    });

  // Handle file upload
  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.error("Error uploading files:", err);
      });
  });
});