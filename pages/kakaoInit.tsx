export const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init("7609c7271a69a84ff6a0f1c39a21adab");
  }

  return kakao;
};
