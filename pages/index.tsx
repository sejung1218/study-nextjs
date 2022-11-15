import { Box, Button, styled, Typography } from "@mui/material";
import Link from "next/link";
import { Router } from "next/router";
import { kakaoInit } from "./kakao";

export default function Home() {
  // const testProps = 'TEST_MESSAGE';
  // console.log('testProps : ', testProps);

  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();
    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: "/v2/user/me", // 사용자 정보 가져오기
          success: (res: any) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push("/kakao");
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
    // setting complete

    return (
      <>
        <SubmitBtn variant="contained" type="button" color="error">
          <Link href={"/test01"} as={"tost01"}>
            <Typography>ONE</Typography>
          </Link>
        </SubmitBtn>
        <SubmitBtn variant="contained" type="button" color="secondary">
          <Link href={"/test02"} as={"tost02"}>
            <Typography>TWO</Typography>
          </Link>
        </SubmitBtn>
      </>
    );
  };
}

const SubmitBtn = styled(Button)`
  width: 60px;
  height: 30px;
  margin: 5px 0 0 5px;
`;
