document.addEventListener("DOMContentLoaded", () => {
  // Handle file upload
  const uploadForm = document.getElementById("upload-form");

  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    fetch("/file/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("File uploaded successfully!");
          location.reload(); // Reload to show the file list
        } else {
          alert("Upload failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
        alert("An error occurred during upload.");
      });
  });

  // Fetch and display file list
  fetch("/file/list")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch file list");
      }
    })
    .then((files) => {
      const fileList = document.getElementById("file-list");
      fileList.innerHTML = "";

      if (files.length === 0) {
        fileList.innerHTML = "<li>No files found.</li>";
        return;
      }

      files.forEach((file) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `/file/download/${file}`;
        a.textContent = file;
        a.target = "_blank"; // Open in new tab
        li.appendChild(a);
        fileList.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Error fetching file list:", err);
      alert("An error occurred while fetching files.");
    });
});