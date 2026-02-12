const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { uploadFile } = require("../controllers/fileController");

// Upload route
router.post("/upload", uploadFile, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({ 
    message: "File uploaded successfully!",
    filename: req.file.filename 
  });
});

// List files route
router.get("/list", (req, res) => {
  const uploadsDir = path.join(__dirname, "../../uploads");
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to list files" });
    }
    res.status(200).json(files);
  });
});

// Download file route
router.get("/download/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../../uploads", filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  // Use res.download() which properly triggers the download dialog
  res.download(filePath, filename, (err) => {
    if (err) {
      console.error("Download error:", err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Download failed" });
      }
    }
  });
});

module.exports = router;