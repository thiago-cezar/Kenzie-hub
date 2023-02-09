import styled from "styled-components";

export const MainDas = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--Grey-4);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 4.5rem;
    width: 80%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      width: 4rem;
      height: 2rem;
      background-color: var(--Grey-3);
      color: var(--Grey-0);
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        transition: 150ms;
        font-size: 14px;
        background-color: var(--Grey-2);
      }
    }
  }
`;

export const SectionUser = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.5rem;
  padding: 0 10%;
  width: 80%;

  border-top: 1px solid var(--Grey-3);
  border-bottom: 1px solid var(--Grey-3);

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: var(--Grey-0);
  }
  p {
    font-size: 12px;
    font-weight: 600;
    color: var(--Grey-1);
  }
`;

export const SectionDate = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1.8rem;

  width: 80%;
  h2 {
    font-size: 16px;
    font-weight: 600;
    color: var(--Grey-0);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    background-color: var(--Grey-3);
    border: none;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    color: var(--Grey-0);

    cursor: pointer;
  }
`;

export const UlDas = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  list-style: none;
  width: 80%;
  overflow: auto;
  background-color: var(--Grey-3);
  border-radius: 4px;
  padding: 1.4rem 1.3rem;
  gap: 1rem;
  max-height: 20rem;
  margin-bottom: 5rem;

  ::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--Grey-4);
    padding: 0 1rem;
    border-radius: 4px;
    min-height: 3rem;
    h3 {
      color: var(--Grey-0);
      font-size: 15px;
      font-weight: 700;
    }
    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;
      p {
        font-size: 12px;
        color: var(--Grey-1);
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--Grey-0);
      }
    }
    &:hover {
      background-color: var(--Grey-2);
      div {
        p {
          color: var(--Grey-0);
        }
      }
    }
  }
`;

export const H2Das = styled.h2`
  margin-top: 5rem;
  color: var(--Grey-0);
  font-size: 18px;
`;
