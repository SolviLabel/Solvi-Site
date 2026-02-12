// server/routes/files.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { uploadFile } = require("../controllers/fileController");

// Upload route
router.post("/upload", uploadFile, (req, res) => {
  res.status(200).send("File uploaded successfully!");
});

// List files route
router.get("/list", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to list files" });
    }
    res.status(200).json(files);
  });
});

module.exports = router;