import styled from "styled-components";

export const StyledHeader = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) -25%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 20px 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    background: url("/images/logo-pc.svg") no-repeat;
    height: 64px;
    width: 109px;
  }

  .bar-icon {
    display: none;
  }

  .list-menu {
    display: flex;
    gap: 84px;
    align-items: center;
  }

  .mobile-menu {
    display: none;
  }

  .menu-item {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    &.flag {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;

      position: relative;

      .list-flag {
        position: absolute;

        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #ffffff;
        top: 40px;
        right: 0;
        min-width: 162px;

        .flag-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 8px;

          &:not(:last-child) {
            border-bottom: 1px solid #c4c4c4;
          }

          .check {
            width: 24px;
            height: 24px;
          }

          .info {
            display: flex;
            align-items: center;
            gap: 4px;

            span {
              font-size: 10px;
              font-weight: 700;
              line-height: 17.5px;
              color: #000000;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    padding: 48px 16px 24px 16px;
    .logo {
      width: 68px;
      height: 40px;
      background-size: cover;
    }

    .bar-icon {
      display: block;
    }

    .list-menu {
      display: none;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      background: #ffffff;
      top: 0;
      left: 0;
      padding: 48px 16px;
      gap: 40px;

      .header {
        display: flex;
        justify-content: space-between;

        .flag {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          border-radius: 8px;

          width: 80px;
          background: #f6f6f6;

          position: relative;
        }
      }
      .mb-list-menu {
        display: flex;
        flex-direction: column;
        gap: 49px;

        .mb-menu-item {
          font-size: 14px;
          font-weight: 700;
          line-height: 17.5px;
          color: #000000;
          text-align: center;
          text-transform: uppercase;
          position: relative;

          &::before {
            content: "";
            width: 100%;
            height: 1px;
            background: #eeeeee;
            position: absolute;
            left: 0;
            bottom: -24px;
          }

          &:last-child {
            &::before {
              height: 0;
            }
          }
        }
      }
    }
  }
`;
