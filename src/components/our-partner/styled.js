import styled from "styled-components";

export const StyledOurPartner = styled.section`
  padding: 120px 80px;
  background: #f6f6f6;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
  scroll-margin-top: 16px;

  .title {
    font-family: var(--playFair);
    font-size: 60px;
    font-weight: 900;
    line-height: 80px;
    letter-spacing: 3.6px;
    text-align: center;
  }

  .arrow {
    /* position: absolute; */
    width: 40px;
    height: 40px;
    box-shadow: 0px 4px 10px 0px #00000040;
    border-radius: 10px;
    cursor: pointer;
    /* top: 50%;
    z-index: 10;
    transform: translateY(-50%); */

    &.left-arrow {
      left: 0px;
    }
    &.right-arrow {
      right: 0px;

      img {
        transform: rotate(180deg);
      }
    }
  }

  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-logo {
    display: flex;
    overflow: hidden;
    gap: 40px;
    max-width: 1460px;

    position: relative;
    .logo {
      transition: 1s;
    }
  }

  @media (max-width: 1023px) {
    padding: 40px 0px;
    gap: 40px;
    .title {
      padding: 0 16px;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.6px;
    }

    .arrow {
      position: absolute;
      z-index: 10;

      &.left-arrow {
        left: 16px;
      }
      &.right-arrow {
        right: 16px;

        img {
          transform: rotate(180deg);
        }
      }
    }

    .list-logo {
      gap: 12px;
      overflow: unset;
      .logo {
        width: 188px;
        height: 72px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
