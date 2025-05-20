import { Meta, StoryObj } from '@storybook/react';
import DocumentUploader from './DocumentUploader';
import { useFileUploader, FileWithUploadStatus } from '../../hooks/useFileUploader';
import Box from '@mui/material/Box';
import React from 'react';

const mockUploadService = (file: FileWithUploadStatus, updateProgress: (progress: number) => void) => {
  return new Promise((resolve, reject) => {
    if (file.file.size > 10 * 1024 * 1024) {
      setTimeout(() => {
        reject(new Error(`File size exceeds the maximum limit of 10MB.`));
      }, 500);
    } else {
      let currentProgress = 0;
      const interval = setInterval(() => {
        const randomIncrement = Math.floor(Math.random() * 10) + 5;
        currentProgress = Math.min(100, currentProgress + randomIncrement);

        updateProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);

          if (Math.random() < 0.2) {
            reject(new Error("Upload failed due to a system error."));
          } else {
            resolve({ data: { imageKeys: [`uploaded_image/${file.file.name}`] } });
          }
        }
      }, 200);
    }
  });
};

const meta: Meta<typeof DocumentUploader> = {
  title: 'Components/DocumentUploader',
  component: DocumentUploader,
  argTypes: {
    maxFileCount: { control: 'number' },
    maxFileSizeMB: { control: 'number' },
    fileInfo: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof DocumentUploader>;

export const Default: Story = {
  render: (args) => {
    const { files, uploadPercentages, addFiles, removeFile } = useFileUploader(mockUploadService);

    const handleFileChange = (newFiles: FileWithUploadStatus[]) => {
      addFiles(newFiles);
    };

    return (
      <Box width="375px">
        <DocumentUploader
          {...args}
          files={files}
          uploadPercentages={uploadPercentages}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />
      </Box>
    );
  },
  args: {
    maxFileCount: 10,
    maxFileSizeMB: 10,
    fileInfo: 'รองรับไฟล์ PDF, JPEG, PNG',
  },
};

export const WithUploadingFile: Story = {
  render: (args) => {
    const initialFiles: FileWithUploadStatus[] = [
      {
        id: 1,
        file: new File(["sample"], "uploading.jpg", { type: "image/jpeg" }),
        isInProgress: true,
        imageUrl: 'https://via.placeholder.com/150',
      },
    ];

    const { files, uploadPercentages, addFiles, removeFile } = useFileUploader(mockUploadService);

    React.useEffect(() => {
      addFiles(initialFiles);
    }, [addFiles]);

    const handleFileChange = (newFiles: FileWithUploadStatus[]) => {
      addFiles(newFiles);
    };

    return (
      <Box width="375px">
        <DocumentUploader
          {...args}
          files={files}
          uploadPercentages={{ ...uploadPercentages, 1: 50 }}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />
      </Box>
    );
  },
  args: {
    maxFileCount: 10,
    maxFileSizeMB: 10,
    fileInfo: 'รองรับไฟล์ PDF, JPEG, PNG',
  },
};

export const WithFailedFile: Story = {
  render: (args) => {
    const initialFiles: FileWithUploadStatus[] = [
      {
        id: 2,
        file: new File(["sample"], "failed.jpg", { type: "image/jpeg" }),
        isFailed: true,
        errorMessage: "กรุณาเลือกอัปโหลดไฟล์ที่มีขนาดไม่เกิน 10 MB",
        imageUrl: 'https://via.placeholder.com/150',
      },
    ];

    const { files, uploadPercentages, addFiles, removeFile } = useFileUploader(mockUploadService);

    React.useEffect(() => {
      addFiles(initialFiles);
    }, [addFiles]);

    const handleFileChange = (newFiles: FileWithUploadStatus[]) => {
      addFiles(newFiles);
    };

    return (
      <Box width="375px">
        <DocumentUploader
          {...args}
          files={files}
          uploadPercentages={uploadPercentages}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />
      </Box>
    );
  },
  args: {
    maxFileCount: 10,
    maxFileSizeMB: 10,
    fileInfo: 'รองรับไฟล์ PDF, JPEG, PNG',
  },
};

export const WithSuccessFile: Story = {
  render: (args) => {
    const initialFiles: FileWithUploadStatus[] = [
      {
        id: 3,
        file: new File(["sample"], "success.jpg", { type: "image/jpeg" }),
        isUploaded: true,
        imageUrl: 'https://via.placeholder.com/150',
      },
    ];

    const { files, uploadPercentages, addFiles, removeFile } = useFileUploader(mockUploadService);

    React.useEffect(() => {
      addFiles(initialFiles);
    }, [addFiles]);

    const handleFileChange = (newFiles: FileWithUploadStatus[]) => {
      addFiles(newFiles);
    };

    return (
      <Box width="375px">
        <DocumentUploader
          {...args}
          files={files}
          uploadPercentages={uploadPercentages}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />
      </Box>
    );
  },
  args: {
    maxFileCount: 10,
    maxFileSizeMB: 10,
    fileInfo: 'รองรับไฟล์ PDF, JPEG, PNG',
  },
};

export const WithMaxFiles: Story = {
  render: (args) => {
    const initialFiles: FileWithUploadStatus[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      file: new File(["sample"], `file${i + 1}.jpg`, { type: "image/jpeg" }),
      imageUrl: 'https://via.placeholder.com/150',
    }));

    const { files, uploadPercentages, addFiles, removeFile } = useFileUploader(mockUploadService);

    React.useEffect(() => {
      addFiles(initialFiles);
    }, [addFiles]);

    const handleFileChange = (newFiles: FileWithUploadStatus[]) => {
      addFiles(newFiles);
    };

    return (
      <Box width="375px">
        <DocumentUploader
          {...args}
          files={files}
          uploadPercentages={uploadPercentages}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />
      </Box>
    );
  },
  args: {
    maxFileCount: 10,
    maxFileSizeMB: 10,
    fileInfo: 'รองรับไฟล์ PDF, JPEG, PNG',
  },
}