import { Box, Button, styled, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const testProps = 'TEST_MESSAGE';

  console.log('testProps : ', testProps);

  return (
    <>
      <SubmitBtn variant="contained" type="button" color="error">
        <Link href={'/test01'} as={'tost01'}>
          <Typography>ONE</Typography>
        </Link>
      </SubmitBtn>
      <SubmitBtn variant="contained" type="button" color="secondary">
        <Link href={'/test02'} as={'tost02'}>
          <Typography>TWO</Typography>
        </Link>
      </SubmitBtn>
    </>
  );
}

const SubmitBtn = styled(Button)`
  width: 60px;
  height: 30px;
  margin: 5px 0 0 5px;
`;
