import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";
import { Form } from "@rocketseat/unform";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FormRocketseat = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  textarea {
    box-sizing: border-box;
    resize: none;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 200px;
    padding: 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  > div {
    display: flex;
    justify-content: flex-end;

    > button {
      width: 162px;
      margin-top: 5px;
      height: 44px;
      background: #f64c75;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#f64c75")};
      }

      &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
      }

      ${css`
        svg {
          animation: ${rotate} 2s linear infinite;
        }
      `}
    }
  }
`;
