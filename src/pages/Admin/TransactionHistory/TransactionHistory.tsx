import React, { useState } from "react";
import axios from "axios";



const TransactionHistory = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    // Cloudinary upload preset (replace with your preset and cloud name)
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    
    console.log(imageUrl)
    
    console.log(UPLOAD_PRESET)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        // Prepare the form data for upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total!);
                        setUploadProgress(progress);
                    },
                }
            );

            // Set the uploaded image URL
            setImageUrl(response.data.secure_url);
            console.log("Uploaded Image URL:", response.data.secure_url);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Image Uploader</h2>

            {/* File Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
            />

            {/* Upload Button */}
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Upload Image
            </button>

            {/* Upload Progress */}
            {uploadProgress !== null && (
                <p className="mt-2">Upload Progress: {uploadProgress}%</p>
            )}

            {/* Uploaded Image Preview */}
            {imageUrl && (
                <div className="mt-4">
                    <p>Uploaded Image:</p>
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="w-64 h-64 object-cover border rounded"
                    />
                </div>
            )}
        </div>
    );
};
export default TransactionHistory;