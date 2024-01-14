// pages/index.tsx
import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import ImageCropper from '../components/ImageCropper';

const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    setCroppedImage(null);
  };

  const handleCropComplete = (croppedAreaPixels: any) => {
    // Perform any action with the cropped image data, e.g., upload to server.
    console.log('Cropped Area:', croppedAreaPixels);
  };

  return (
    <div>
      <h1>Image Cropper</h1>
      <ImageUpload onFileChange={handleFileChange} />
      {selectedFile && (
        <ImageCropper imageSrc={URL.createObjectURL(selectedFile)} onCropComplete={handleCropComplete} />
      )}
    </div>
  );
};

export default Home;
