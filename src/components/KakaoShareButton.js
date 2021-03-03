import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const KakaoShareButton = () => {
  const location = useLocation();
  const beerInfo = location.state.beerInfo;

  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("5a6a27bdf52fdfab032840311f483de0");
      }
      kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: `${beerInfo.beerTitle}`,
          description: "나와 닮은 맥주는?",
          imageUrl: `${beerInfo.beerImg}`, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "나도 테스트 하기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <div className="kakao-share-button">
        <button id="kakao-link-btn">
          {/* <img src="/icons/kakao.png" alt="kakao-share-icon" /> */}
          카카오톡에 공유하기
        </button>
      </div>
    </>
  );
};
export default KakaoShareButton;
