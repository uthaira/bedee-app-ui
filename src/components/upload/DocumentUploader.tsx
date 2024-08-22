import { Avatar, Box, Button, CircularProgress, IconButton, LinearProgress, Stack } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

import React, { useCallback, useRef, useState } from "react";
import DialogModal from "../modal/DialogModal";

import UploadIcon from "../../icons/UploadIcon";
import CloseIcon from "../../icons/CloseIcon";
import TrashbinIcon from "../../icons/trashbin";
import { Colors } from '../../colors'
import { P2 } from '../font'

interface FileWithUploadStatus {
  file: File;
  isUploaded?: boolean;
  isFailed?: boolean;
  isInProgress?: boolean;
  imageKey?: string;
  imageUrl?: string;
  errorMessage?: string;
  id: number;
}

interface LabelConfig {
  uploadButtonLabel: string;
  cameraButtonLabel: string;
  photoButtonLabel: string;
  fileButtonLabel: string;
  uploadedLabel: string;
}

interface DocumentUploaderProps {
  files: FileWithUploadStatus[];
  uploadPercentages: { [key: number]: number };
  maxFileCount?: number;
  maxFileSizeMB?: number;
  fileInfo?: string;
  onFileChange?: (files: FileWithUploadStatus[]) => void;
  onRemoveFile?: (id: number) => void;
  labelConfig?: LabelConfig;
}

export default function DocumentUploader({
  files,
  uploadPercentages,
  maxFileCount = 10,
  maxFileSizeMB = 10,
  fileInfo = '',
  onFileChange,
  onRemoveFile,
  labelConfig = {
    uploadButtonLabel: 'อัปโหลด',
    cameraButtonLabel: 'กล้อง',
    photoButtonLabel: 'รูปภาพ',
    fileButtonLabel: 'ไฟล์',
    uploadedLabel: 'อัปโหลดแล้ว',
  },
}: DocumentUploaderProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const takePhotoInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const existingFileCount = files.length;
      const newFiles = Array.from(selectedFiles)
        ?.slice(0, maxFileCount - existingFileCount)
        ?.map(file => {
        const isMaxSize = file.size > maxFileSizeMB * 1024 * 1024;
        return {
          file,
            id: Date.now() + Math.random(),
            isUploaded: false,
            isFailed: isMaxSize,
            isInProgress: false,
            errorMessage: isMaxSize ? `กรุณาเลือกอัปโหลดไฟล์ที่มีขนาดไม่เกิน ${maxFileSizeMB} MB` : undefined,
            imageUrl: URL.createObjectURL(file),
        }
      });

      const uniqueNewFiles = newFiles.filter(newFile => 
        !files.some(existingFile => 
          existingFile.file.name === newFile.file.name && 
          existingFile.file.size === newFile.file.size
        )
      );

      if (uniqueNewFiles.length > 0) {
        onFileChange?.(uniqueNewFiles);
      }
    }
    setOpenDialog(false);
  };

  const renderImageUpload = useCallback((file: FileWithUploadStatus, index: number) => {
    const progress = uploadPercentages[file.id] || 0;

    if (file.isUploaded) {
      return (
        <Stack key={`upload-status-${index}`} flexDirection="row" justifyContent="space-between" alignItems="center" gap="8px" width="100%">
          <Stack flexDirection="row" alignItems="center" maxWidth="90%">
            <Avatar
              src={file.imageUrl}
              sx={{
                width: 32,
                height: 32,
                marginRight: '16px',
                bgcolor: Colors.white,
              }}
              variant="square"
            >
              <TextSnippetOutlinedIcon sx={{ color: Colors.black }} />
            </Avatar>
            <P2
              text={file.file.name}
              color={Colors.success}
              sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            />
          </Stack>
          <IconButton onClick={() => onRemoveFile?.(file.id)}>
            <TrashbinIcon color={Colors.black} />
          </IconButton>
        </Stack>
      );
    }

    if (file.isFailed) {
      return (
        <Stack key={`upload-status-${index}`} flexDirection="row" justifyContent="space-between" gap="8px" width="100%">
          <Stack
            flexDirection="row"
            gap="16px"
            width="80%"
          >
            <ErrorIcon color="error" />
            <Stack maxWidth="100%">
              <P2
                text={file.file.name}
                color={Colors.error}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              />
              {file.errorMessage && <P2
                text={file.errorMessage}
                color={Colors.error}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              />}
            </Stack>
          </Stack>
          <IconButton onClick={() => onRemoveFile?.(file.id)}>
            <CloseIcon color={Colors.error} />
          </IconButton>
        </Stack>
      );
    }

    if (file.isInProgress) {
      return (
        <Stack key={`upload-status-${index}`} width="100%">
          <Stack flexDirection="row" justifyContent="space-between">
            <CircularProgress size={20} sx={{ color: Colors.primary001 }} />
            <P2
              text={file.file.name}
              color={Colors.gray7}
              sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            />
            <IconButton onClick={() => onRemoveFile?.(file.id)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: '4px',
              borderRadius: '4px',
              backgroundColor: Colors.white,
              '& .MuiLinearProgress-bar': { backgroundColor: Colors.primary001 },
            }}
          />
        </Stack>
      );
    }

    return null;
  }, [uploadPercentages, onRemoveFile]);

  const handleSelectOption = (optionId: string) => {
    switch (optionId) {
      case 'camera':
        return takePhotoInputRef.current?.click();
      case 'photo':
        return photoInputRef.current?.click();
      case 'file':
        return fileInputRef.current?.click();
      default:
        return;
    }
  };

  return (
    <>
      <Stack sx={{ py: '8px', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', bgcolor: '#FBFBFC' }}>
        <Button
          startIcon={<UploadIcon />}
          variant="outlined"
          onClick={() => setOpenDialog(true)}
          sx={{
            borderRadius: '32px',
            gap: '8px',
            fontSize: '14px',
            py: '10px',
            px: '18px',
            borderColor: Colors.gray3,
            backgroundColor: Colors.white,
            color: Colors.gray7,
            '&:hover': { borderColor: Colors.gray3 },
            '&.Mui-disabled': { color: Colors.gray5, backgroundColor: Colors.white, opacity: 0.6 },
          }}
        >
          {labelConfig.uploadButtonLabel}
        </Button>
        <Box mt="12px">
          <P2 text={fileInfo} color={Colors.gray5} />
        </Box>
      </Stack>

      <Stack mt="16px" alignItems="center" justifyContent="center" flexDirection="row">
        <P2 text={labelConfig.uploadedLabel} />
        <Box ml="4px">
          <P2 text={`${files.length} / ${maxFileCount}`} />
        </Box>
      </Stack>

      <Stack mt="16px" gap="16px">
        {files.map(renderImageUpload)}
      </Stack>

      <input type="file" accept="image/png, image/jpeg" capture="user" ref={takePhotoInputRef} style={{ display: "none" }} multiple onChange={handleFileChange} />
      <input type="file" accept="image/png, image/jpeg" ref={photoInputRef} style={{ display: "none" }} multiple onChange={handleFileChange} />
      <input type="file" accept="application/pdf" ref={fileInputRef} style={{ display: "none" }} multiple onChange={handleFileChange} />

      <DialogModal
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        hasCancelButton
        onSelectOption={handleSelectOption}
        options={[
          { id: 'camera', title: labelConfig.cameraButtonLabel },
          { id: 'photo', title: labelConfig.photoButtonLabel },
          { id: 'file', title: labelConfig.fileButtonLabel },
        ]}
      />
    </>
  );
}