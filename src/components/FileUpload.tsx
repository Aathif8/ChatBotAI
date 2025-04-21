import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true);

    // Create FormData to send via fetch/axios
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://chatbotai-api-2jse.onrender.com/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload successful:", data);
        toast.success("File uploaded successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setUploading(false);
      })
      .catch((err) => {
        console.error("Upload failed:", err);
        toast.success("File uploaded Failed.Try Again later!", {
            position: "top-right",
            autoClose:2000,
          });
        setUploading(false);
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <label className="block mb-2 text-md font-medium">
        Upload your FAQ Document:
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
        disabled={uploading}
      />
      <button
        onClick={handleUpload}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer !file:cursor-not-allowed"
        disabled={!file || uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
