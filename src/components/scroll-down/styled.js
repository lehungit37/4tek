import styled from "styled-components";

export const StyledScrollDown = styled.div`
  position: fixed;

  bottom: 40px;
  right: 80px;

  cursor: pointer;

  transform: rotateX(0deg);
  transition: 0.2s;

  width: 66.67px;
  height: 66.67px;
  display: flex;

  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 10px 0px #0000004d;
  border-radius: 50%;
  background: #ffffff;

  img {
    transition: 0.2s;
  }

  &.rote {
    img {
      transition: 0.2s;
      transform: rotateX(180deg);
    }
  }

  @media (max-width: 1023px) {
    right: 23px;
  }
`;
