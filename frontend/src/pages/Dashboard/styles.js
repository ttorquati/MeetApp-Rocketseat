import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

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

    a {
      display: block;
      padding: 10px 24px;
      background: #f94d6a;
      font-size: 16px;
      color: #fff;
      border-radius: 4px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, "#f94d6a")};
      }
    }
  }

  span {
    display: block;
    margin-top: 80px;
    color: #fff;
    font-size: 18px;
  }

  ul {
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-gap: 10px;
  }
`;

export const Meetup = styled.li`
  padding: 20px;
  border-radius: 8px;

  background: ${props =>
    props.past ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.2)"};

  transition: color 0.4s;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    opacity: ${props => (props.past ? 0.4 : 1)};

    div:first-child {
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #fff;
      }
    }

    div:last-child {
      display: flex;
      align-items: center;

      span {
        margin-top: 2px;
        color: #999;
        font-size: 16px;
      }

      svg {
        margin-left: 20px;
      }
    }

    &:hover {
      div:first-child {
        strong {
          color: #f94d6a;
        }
      }

      div:last-child {
        span {
          color: #f94d6a;
        }

        svg {
          fill: #f94d6a;
        }
      }
    }
  }
`;
