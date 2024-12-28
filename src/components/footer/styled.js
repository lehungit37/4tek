import styled from "styled-components";

export const StyledFooter = styled.footer`
  .footer {
    padding: 104px 203px 100px 203px;
    background-color: #000;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      linear-gradient(
        180deg,
        rgba(0, 10, 255, 0.5) 0%,
        rgba(0, 0, 0, 0) 136.61%
      ),
      url("/images/bg-footer.jpeg");

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* height: 446px; */

    color: #ffffff;

    display: flex;
    gap: 40px;

    .logo {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .socials {
        display: flex;
        gap: 24px;
      }
    }

    .info {
      width: 410px;
      display: flex;
      flex-direction: column;
      gap: 40px;

      h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
      }

      &.subscribe {
        .des {
          display: flex;
          flex-direction: column;
          gap: 12px;

          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          }
        }
      }
      &.address {
        .des {
          display: flex;
          flex-direction: column;
          gap: 40px;
          font-size: 14px;
          font-weight: 400;
          line-height: 19.6px;
          .add {
            display: flex;
            gap: 8px;

            &.add-2 {
              align-items: center;

              .phones {
                display: flex;
                gap: 8px;
                align-items: center;
              }
            }
          }
        }
      }
    }

    @media (max-width: 1023px) {
      flex-direction: column;
      padding: 41.57px 16px 50.98px 16px;
      gap: 73.38px;

      .logo {
        align-items: center;
        gap: 38.09px;
      }

      .info {
        width: 100%;
        gap: 20px;

        &.address {
          .des {
            gap: 20px;
          }
        }

        &.subscribe {
          .des {
            gap: 17.34px;
          }
        }
      }
    }
  }
`;
