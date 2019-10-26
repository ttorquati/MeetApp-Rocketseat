import styled, { keyframes, css } from "styled-components";
import { darken, lighten } from "polished";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: ${darken(0.04, "#22202c")};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      width: 46px;
      height: 46px;
      border-right: 1px solid ${lighten(0.2, "#22202c")};
    }

    a {
      font-weight: bold;
      color: #fff;

      transition: color 0.2s;

      &:hover {
        color: #f94d6a;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 36px;
    height: 36px;
    margin-left: 10px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  button {
    margin-left: 24px;
    padding: 0 20px;
    height: 42px;
    background: #f94d6a;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, "#f94d6a")};
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
`;
