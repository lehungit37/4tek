import styled from "styled-components";

export const StyledOurGame = styled.section`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  padding-bottom: 128px;

  .title {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
    max-width: 860px;
    margin: 0 auto;
    h2 {
      font-family: var(--playFair);
      font-size: 60px;
      font-weight: 900;
      line-height: 60px;
      letter-spacing: 3.6px;
      color: #000000;
    }
    .des {
      font-family: var(--montserrat);
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
      color: #757575;
    }
  }

  .list-game {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }

  @media (max-width: 1023px) {
    padding: 0 16px;
    gap: 39.41px;
    padding-bottom: 36px;

    .title {
      gap: 16.05px;

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

    .list-game {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px 15px;
    }
  }
`;

export const StyledGameItem = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  scroll-margin-top: 200px;

  &:nth-child(4n + 2),
  &:nth-child(4n + 4) {
    transform: translateY(128px);
  }

  .image {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }

  .info {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    padding: 0px 32px;

    .game-title {
      font-family: var(--montserrat);
      font-size: 48px;
      font-weight: 700;
      line-height: 60px;
      color: #ffffff;
    }

    .game-des {
      font-family: var(--montserrat);
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
      color: #ffffff;
    }
  }

  @media (max-width: 1023px) {
    order: ${(props) => props.order};

    &:nth-child(4n + 2),
    &:nth-child(4n + 4) {
      transform: unset;
    }
    &:nth-child(n + 11),
    &:nth-child(4n + 3),
    &:nth-child(4n) {
      transform: translateY(36px);
    }

    .image {
      height: 268px;
    }

    .info {
      gap: 3px;
      bottom: 11px;
      padding: 0px 0px 0px 8px;
      width: 100%;

      .game-title {
        font-size: 24px;
        line-height: 30px;
      }
      .game-des {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.9px;
      }
    }
  }
`;
