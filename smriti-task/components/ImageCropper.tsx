// components/ImageCropper.tsx
import { useState, useCallback } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedAreaPixels: Crop) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCropComplete }) => {
  const [crop, setCrop] = useState<Crop>({ unit: 'px', width: 30, x: 0, y: 0, height: 0 });

  const onCropChange = useCallback((newCrop: Crop) => {
    setCrop(newCrop);
  }, []);

  const onCropCompleted = useCallback((_, croppedAreaPixels: Crop) => {
    onCropComplete(croppedAreaPixels);
  }, [onCropComplete]);

  return (
    <div className="image-cropper-container">
      <ReactCrop
        src={imageSrc as any}
        crop={crop as any}
        onChange={onCropChange as any}
        onComplete={onCropCompleted as any}
        aspect={1}
      />
    </div>
  );
};

export default ImageCropper;
