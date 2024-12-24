import { useState } from 'react';
import { api } from '../services/api';

interface UploadVideoParams {
  title: string;
  description: string;
  videoFile: File;
  thumbnail: File | null;
}

export function useVideoUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadVideo = async (params: UploadVideoParams) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setUploadProgress(i);
      }

      await api.uploadVideo(params);
      
      setUploadProgress(100);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadVideo,
    isUploading,
    uploadProgress,
  };
}