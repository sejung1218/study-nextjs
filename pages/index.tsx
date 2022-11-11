import { Box, Button, styled, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SubmitBtn variant="contained" type="button" color="error">
        <Link href={'/test01'} as={'tost'}>
          <Typography>ONE</Typography>
        </Link>
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
  margin: 5px 0 0 5px;
`;
