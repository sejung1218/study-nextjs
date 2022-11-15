import { Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Router from "next/router";
import { kakaoInit } from "./kakaoInit";

export default function Home() {
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
  };
  // setting complete

  return (
    <LoginContainer>
      <LoginBtn onClick={kakaoLogin}>
        <Typography style={{ fontSize: "2rem" }}>KAKAO Login</Typography>
      </LoginBtn>
    </LoginContainer>
  );
}

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const LoginBtn = styled(Button)`
  border: 1px solid black;
  width: 260px;
  height: 130px;
  background-color: yellow;
  color: black;
`;
