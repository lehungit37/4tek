import styled from "styled-components";

export const StyledBanner = styled.section`
  position: relative;
  overflow: hidden;

  .banner-bg {
    background: url("/images/banner-bg.png") no-repeat;
    background-size: cover;
    background-position: center;
    height: 1028px;
  }

  .banner-absolute {
    position: absolute;
    left: 50%;
    top: 294px;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    gap: 97px;
    align-items: center;

    background: radial-gradient(
      27.72% 27.79% at 50.81% 68.15%,
      #210544 0%,
      rgba(23, 5, 68, 0.71) 50.52%,
      rgba(23, 5, 68, 0) 100%
    );

    backdrop-filter: blur(10px);
    z-index: 10;
    width: 860px;
    border-radius: 50%;
  }

  .form {
    width: 560px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22.68px;
      text-align: center;
      color: #ffffff;
    }
  }

  .ong-tien {
    position: absolute;
    bottom: 0;
    left: 0px;
    height: 938px;
    width: 938px;
    background: url("/images/ong-tien.png") no-repeat;
    background-size: contain;

    @media (max-width: 1460px) {
      height: 638px;
      width: 638px;
    }
  }

  @media (max-width: 1023px) {
    height: 832px;
    .banner-bg {
      height: 608px;
      background-size: cover;
      background-position: center;
    }

    .banner-absolute {
      width: 100%;
      padding: 0px 16px;
      top: 136px;
      border-radius: unset;
      gap: 40px;
      backdrop-filter: unset;
    }

    .form {
      width: 100%;
      gap: 16px;
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0.9px;
        text-align: center;
      }
    }

    .ong-tien {
      width: 342px;
      height: 258px;
      background: url("/images/ong-tien-mb.png") no-repeat;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const StyledCountdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  .countDown-title {
    font-family: var(--playFair);
    font-size: 80px;
    font-weight: 900;
    line-height: 120px;
    color: #ffffff;
  }

  @media (max-width: 1023px) {
    width: 100%;
    .countDown-title {
      font-size: 40px;
      font-weight: 900;
      line-height: 50px;
      letter-spacing: 0.6px;
      text-align: center;
    }
  }
`;

export const StyledTime = styled.div`
  padding: 26px 39px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px #00000040;
  width: 756px;
  border-radius: 21px;

  display: flex;
  justify-content: center;
  gap: 120px;

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:after {
      content: ":";
      font-size: 65.17px;
      font-weight: 400;
      line-height: 79.45px;
      letter-spacing: -0.65px;
      position: absolute;
      right: -52.14px;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    .number {
      font-family: var(--playFair);
      text-align: center;
      font-size: 60px;
      font-weight: 900;
      line-height: 64px;
      width: 80px;
      height: 80px;
    }

    .unit {
      font-family: var(--montserrat);
      font-size: 15.64px;
      font-weight: 700;
      line-height: 19.07px;
    }
  }

  @media (max-width: 1023px) {
    padding: 24px 26px;

    gap: 24px;
    width: 100%;

    .group {
      &:after {
        font-size: 40px;
        font-weight: 400;
        line-height: 48.76px;
        letter-spacing: -0.65px;

        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
      }
      .number {
        font-size: 36px;
        line-height: 45px;
        width: 54px;
        height: 46px;
      }
      .unit {
        font-size: 12px;
        line-height: 14.63px;
        letter-spacing: -0.65px;
      }
    }
  }
`;
