import { Box, Button, styled, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Box>asd123</Box>
      <SubmitBtn variant="contained" type="button" color="error">
        <Typography>ONE</Typography>
      </SubmitBtn>
      <SubmitBtn variant="contained" type="button" color="secondary">
        <Typography>TWO</Typography>
      </SubmitBtn>
    </>
  );
}
const SubmitBtn = styled(Button)`
  width: 60px;
  height: 30px;
  margin: 0 0 0 5px;
`;
