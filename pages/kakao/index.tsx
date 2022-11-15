import Router from "next/router";
import * as React from "react";
import { kakaoInit } from "../kakaoInit";
import { Button, Container, styled, Typography } from "@mui/material";

export default function Kakao() {
  const KakaoLogout = () => {
    const kakao = kakaoInit();

    console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

    // 카카오 로그인 링크 해제
    kakao.API.request({
      url: "/v1/user/unlink",
      success: (res: any) => {
        // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
        console.log(res);
        Router.push("/");
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <LogoutContainer>
      <LogoutBtn onClick={KakaoLogout}>
        <Typography style={{ fontSize: "2rem" }}>KAKAO LOGOUT</Typography>
      </LogoutBtn>
    </LogoutContainer>
  );
}

const LogoutContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const LogoutBtn = styled(Button)`
  border: 1px solid black;
  width: 300px;
  height: 130px;
  background-color: yellow;
  color: black;
`;
