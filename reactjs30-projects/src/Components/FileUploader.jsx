import React, { useState } from 'react';


const FileUploader = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);

      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file (jpeg, png, etc.)');
      setSelectedFile(null);
      setPreview(null);
    }
  };

  
  const handleFileUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile.name);
     
    } else {
      alert('No file selected.');
    }
  };

  return (
    <div className="uploader-container">
      <h2>Image Uploader</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Selected Preview" />
        </div>
      )}
      
      <button onClick={handleFileUpload}>Upload Image</button>
    </div>
  );
};

export default FileUploader;
