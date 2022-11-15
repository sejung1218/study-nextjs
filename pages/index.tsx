import { Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Router from "next/router";
import { kakaoInit } from "./kakaoInit";

export default function Home() {
  const kakaoLogin = async () => {
    const kakao = kakaoInit();

    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: "/v2/user/me", // 사용자 정보 가져오기
          success: (data: any) => {
            console.log("data : ", data);
            console.log(
              "1. kakao access token : ",
              kakao.Auth.getAccessToken()
            );
            Router.push("/kakao");
          },
          fail: (error: any) => {
            console.log("error : ", error);
          },
        });
      },
      fail: (error: any) => {
        console.log("error : ", error);
      },
    });
  };

  const kakaoSignin = async () => {
    Router.push("https://accounts.kakao.com/weblogin/create_account");
  };
  // setting complete

  return (
    <LoginContainer>
      <LoginBtn onClick={kakaoLogin}>
        <Typography style={{ fontSize: "2rem" }}>
          KAKAO
          <br />
          로그인
        </Typography>
      </LoginBtn>
      <SigninBtn onClick={kakaoSignin}>
        <Typography style={{ fontSize: "2rem" }}>
          KAKAO
          <br />
          회원가입
        </Typography>
      </SigninBtn>
    </LoginContainer>
  );
}

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginBtn = styled(Button)`
  border: 1px solid black;
  width: 260px;
  height: 130px;
  background-color: yellow;
  color: black;
  margin-top: 20px;
`;

const SigninBtn = styled(Button)`
  border: 1px solid black;
  width: 260px;
  height: 130px;
  background-color: pink;
  color: black;
  margin-top: 20px;
`;
