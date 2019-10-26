import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  align-self: center;
  margin-bottom: 8px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
    }

    ${css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

    input {
      display: none;
    }
  }
`;
