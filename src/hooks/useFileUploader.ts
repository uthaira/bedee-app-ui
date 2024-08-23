import { useCallback, useEffect, useState } from "react";

export interface FileWithUploadStatus {
  file: File;
  isUploaded?: boolean;
  isFailed?: boolean;
  isInProgress?: boolean;
  imageKey?: string;
  imageUrl?: string;
  errorMessage?: string;
  id: number;
}

interface UploadService {
  (file: FileWithUploadStatus, updateProgress: (progress: number) => void): Promise<any>;
}

export const useFileUploader = (uploadService: UploadService) => {
  const [files, setFiles] = useState<FileWithUploadStatus[]>([]);
  const [uploadPercentages, setUploadPercentages] = useState<{ [key: number]: number }>({});

  const uploadFile = useCallback(async (file: FileWithUploadStatus) => {
    try {
      const resp = await uploadService(file, (progress) => {
        setUploadPercentages(prev => ({ ...prev, [file.id]: progress }));
      });
      return resp;
    } catch (error) {
      console.error("Upload failed", error);
      throw error;
    }
  }, [uploadService]);

  const addFiles = useCallback((newFiles: FileWithUploadStatus[]) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const removeFile = useCallback((id: number) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    setUploadPercentages(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const handleUploadFiles = useCallback(async () => {
    const filesToUpload = files.filter(file => !file.isUploaded && !file.isFailed && !file.isInProgress);
    if (filesToUpload.length === 0) return;

    const uploadPromises = filesToUpload.map(async (file) => {
      try {
        setFiles(prevFiles => prevFiles.map(f => 
          f.id === file.id ? { ...f, isInProgress: true } : f
        ));
        const resp = await uploadFile(file);
        if (resp?.data?.imageKeys?.length) {
          setFiles(prevFiles => prevFiles.map(f => 
            f.id === file.id ? { ...f, imageKey: resp.data.imageKeys[0].split('/').pop(), isUploaded: true, isInProgress: false } : f
          ));
        } else {
          throw new Error('Failed to upload file');
        }
      } catch (error: any) {
        setFiles(prevFiles => prevFiles.map(f => 
          f.id === file.id ? { ...f, isFailed: true, isInProgress: false, errorMessage: error.message } : f
        ));
      }
    });

    await Promise.all(uploadPromises);
  }, [files, uploadFile]);

  useEffect(() => {
    handleUploadFiles();
  }, [files]);

  return {
    files,
    uploadPercentages,
    addFiles,
    removeFile,
    handleUploadFiles,
  };
};