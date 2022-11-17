import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <FileUploadContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )
        //   <FileUploadBtn variant="contained" color="secondary">
        //     파일업로드
        //   </FileUploadBtn>
      }
    </FileUploadContainer>
  );
}

const FileUploadContainer = styled(Container)`
  display: flex;
  justify-content: center;
  /* vertical-align: middle; */
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid black;
  width: 250px;
  height: 250px;
`;

const FileUploadBtn = styled(Button)`
  color: white;
`;
