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

  display: flex;
  flex-direction: column;
  align-items: center;

  ${css`
    > svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      display: block;
      font-size: 32px;
      color: #fff;
      font-weight: normal;
    }

    div {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        padding: 10px 24px;
        background: #4dbaf9;
        font-size: 16px;
        color: #fff;
        border-radius: 4px;

        transition: background 0.2s;

        &:hover {
          background: ${darken(0.1, "#4dbaf9")};
        }

        svg {
          margin-right: 8px;
        }
      }

      button {
        display: flex;
        align-items: center;
        padding: 10px 24px;
        background: #f94d6a;
        font-size: 16px;
        color: #fff;
        border-radius: 4px;
        border: none;

        margin-left: 20px;

        transition: background 0.3s;

        &:hover {
          background: ${darken(0.06, "#F94D6A")};
        }

        &[disabled] {
          cursor: not-allowed;
          opacity: 0.6;
        }

        svg {
          margin-right: 8px;
        }

        > span {
          ${css`
            > svg {
              animation: ${rotate} 2s linear infinite;
            }
          `}
        }
      }
    }
  }
`;

export const Meetup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 40px;

  img {
    border-radius: 4px;
    width: 940px;
    height: 300px;
  }

  span {
    margin-top: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }

  div {
    margin-top: 20px;

    display: flex;

    span {
      font-size: 16px;
      color: #ccc;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      &:last-child {
        margin-left: 40px;
      }
    }
  }
`;
