import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background-color: var(--Grey-4);
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 5rem;

  width: 100%;
  margin: 2rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width: 5rem;
    height: 2rem;
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transition: 150ms;
      font-size: 12px;
      background-color: var(--Grey-2);
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--Grey-3);
  padding: 2rem;
  border-radius: 5px;

  margin-bottom: 2rem;

  span {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: center;

    h1 {
      font-size: 18px;
      font-weight: 700;
      color: var(--Grey-0);
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: var(--Grey-1);
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      background-color: var(--Grey-2);
      &:hover {
        background-color: var(--Grey-1);
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: var(--Grey-0);
      font-weight: 400;
      font-size: 13px;
    }
    p {
      font-size: 12px;
      color: var(--Negative);
    }
    input,
    select {
      width: 13rem;
      height: 2.3rem;
      background-color: var(--Grey-2);
      border: none;
      border-radius: 4px;
      outline: 0;
      padding-left: 5px;
      border: 1px solid transparent;

      &:focus {
        border: 1px solid var(--Grey-1);
      }
      @media screen and (min-width: 736px) {
        width: 15rem;
      }
    }

    select {
      color: var(--Grey-1);
      width: 13.6rem;
      @media screen and (min-width: 736px) {
        width: 15.6rem;
      }
    }
  }
  button,
  a {
    width: 13.6rem;
    height: 2.3rem;
    background-color: var(--Color-primary-Negative);
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-0);

    &:hover {
      transition: 150ms;
      font-size: 16px;
      background-color: var(--Color-primary);
    }
    @media screen and (min-width: 736px) {
      width: 15.6rem;
    }
  }
`;
