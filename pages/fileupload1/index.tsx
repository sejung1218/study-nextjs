import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload1() {
  const [fileName, setFileName] = useState();

  const onDrop = useCallback((acceptedFiles: any) => {
    setFileName(acceptedFiles[0].path);
    console.log("acceptedFiles1 : ", acceptedFiles);
  }, []);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      "image/gif": [],
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
    },
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <Container>
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
      <Typography>{fileName}</Typography>
      <h4>Accepted files</h4>
      <ul>{acceptedFileItems}</ul>
      <h4>Rejected files</h4>
      <ul>{fileRejectionItems}</ul>
    </Container>
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
