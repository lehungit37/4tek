import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 14px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  /* background: #ffffff; */
  .icon {
    width: 24px;
    height: 24px;
  }

  input {
    flex: 1;
    color: #545454;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    background: transparent;
  }

  &.white {
    background: #ffffff;

    input {
      color: #545454;
    }
  }
`;
