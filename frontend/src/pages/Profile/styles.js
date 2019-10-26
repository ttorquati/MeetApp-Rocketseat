import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
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

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
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
  }
`;
