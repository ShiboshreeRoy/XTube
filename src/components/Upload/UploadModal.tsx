import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FiUpload, FiX } from 'react-icons/fi';
import VideoUploadForm from './VideoUploadForm';
import UploadProgress from './UploadProgress';

export default function UploadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [uploadStage, setUploadStage] = useState<'form' | 'uploading' | 'processing'>('form');
  const [progress, setProgress] = useState(0);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-lg">
          <div className="flex justify-between items-center p-4 border-b">
            <Dialog.Title className="text-lg font-semibold">Upload Video</Dialog.Title>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {uploadStage === 'form' && (
              <VideoUploadForm 
                onSubmit={() => setUploadStage('uploading')}
              />
            )}
            
            {uploadStage === 'uploading' && (
              <UploadProgress progress={progress} />
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}