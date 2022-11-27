import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload1() {
  // react-dropzone file.name 으로 관리가 되기 때문에 setFileName 은 필요가 없다.
  // const [fileName, setFileName] = useState();
  // react-dropzone acceptedFiles 으로 관리가 되기 때문에 setFile 은 필요가 없다.
  // const [file, setFile] = useState<File[]>();

  const onDrop = useCallback((acceptedFiles: any) => {
    // setFileName(acceptedFiles[0].path);
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
    // txt형식 안됨...
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
      "text/txt": [],
    },
  });

  // react-dropzone은 acceptedFiles 가 파일의 상태관리를 해주고 있으므로 useState를 사용해서 파일의 상태를 관리해줄 필요가 없다.

  // useEffect(() => {
  //   setFile(acceptedFiles);
  //   console.log("file : ", file);
  // }, [file, acceptedFiles]);

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
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
      {/* <Typography>{fileName}</Typography> */}
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
