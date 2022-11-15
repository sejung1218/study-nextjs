import Router from "next/router";
import * as React from "react";
import { kakaoInit } from "../kakaoInit";
import { Button, Container, styled, Typography } from "@mui/material";

export default function Kakao() {
  const KakaoLogout = () => {
    const kakao = kakaoInit();

    console.log("kakao access token : ", kakao.Auth.getAccessToken());
    // kakao access token 확인

    kakao.API.request({
      // url: "/v1/user/logout",
      url: "/v1/user/unlink",
      success: (data: any) => {
        console.log("data : ", data);
        Router.push("/");
      },
      fail: (error: any) => {
        console.log("error : ", error);
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
