import styled, { keyframes } from "styled-components";

const phuThuyAnimation = keyframes`
    0%{
        transform: translateY(68px);
    }
    25%{
        transform: translateY(40px);
    }
    75%{
        transform: translateY(200px);
    }
    100%{
        transform: translateY(68px);
    }
`;

const phuThuyAnimationMB = keyframes`
    0%{
        transform: translateY(40px);
    }
    25%{
        transform: translateY(20px);
    }
    75%{
        transform: translateY(150px);
    }
    100%{
        transform: translateY(40px);
    }
`;

export const StyledAboutUs = styled.section`
  padding: 0 80px;

  scroll-margin-top: 100px;

  .content {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 0 auto;

    .left {
      display: flex;
      flex-direction: column;
      gap: 80px;
      width: 50%;
      max-width: 560px;
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .title {
          font-family: var(--playFair);
          font-size: 60px;
          font-weight: 900;
          line-height: 60px;
          letter-spacing: 3.6px;
        }

        .des {
          font-size: 14px;
          font-weight: 400;
          line-height: 19.6px;
          color: #757575;
        }
      }

      .count {
        display: flex;
        flex-direction: column;
        gap: 39px;

        .count-item {
          .number {
            font-size: 80px;
            font-weight: 700;
            line-height: 97.52px;
            letter-spacing: -1px;
            color: #079bee;
            span {
              font-size: 40px;
              line-height: 48.76px;
            }
          }
          .type {
            //styleName: Montserrat/Bold/24px;
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
          }
        }
      }
    }
    .right {
      flex: 1;
      max-width: 560px;
      padding: 113px 75px;
      background: #eeeeee;

      .list {
        display: flex;
        flex-direction: column;
        gap: 40px;

        .item {
          display: flex;
          gap: 24px;
          .icon {
            width: 50px;
            height: 50px;
            background: #e3fcff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 13px;
          }

          .info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            .title {
              font-size: 24px;
              font-weight: 700;
              line-height: 30px;
            }
            .des {
              font-size: 14px;
              font-weight: 400;
              line-height: 19.6px;
              color: #757575;
            }
          }
        }
      }
    }
  }

  .map {
    .pin-map {
      display: flex;
      justify-content: center;
    }
    .phu-thuy {
      display: flex;
      justify-content: center;
      animation: ${phuThuyAnimation} 8s infinite;
    }
  }

  @media (max-width: 1023px) {
    padding: 0;
    .content {
      flex-direction: column;
      .left,
      .right {
        width: 100%;
      }

      .left {
        gap: 39.5px;
        padding: 0 16px;

        .info {
          gap: 16px;
          h2 {
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 0.6px;
          }

          .des {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          }
        }

        .count {
          flex-direction: row;
          gap: 16px;

          .count-item {
            flex: 1;
            .number {
              font-size: 44px;
              line-height: 53.64px;
              letter-spacing: -1px;

              span {
                font-size: 20px;
                line-height: 24.38px;
                letter-spacing: -1px;
              }
            }

            .type {
              font-size: 24px;
              line-height: 30px;
            }
          }
        }
      }

      .right {
        padding: 40px 16px;

        .list {
          .item {
            gap: 20px;
            .icon {
              width: 40px;
              height: 40px;
            }

            .info {
              gap: 12px;
            }
          }
        }
      }
    }

    .map {
      .phu-thuy {
        animation-name: ${phuThuyAnimationMB};
        img {
          width: 300px;
          height: 243px;
        }
      }
      .pin-map {
        width: 100%;
        height: 146.27px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
