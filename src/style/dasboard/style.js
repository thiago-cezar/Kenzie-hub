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

export const Sectiondate = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 2.3rem;

  padding: 0 10%;
  width: 80%;
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--Grey-0);
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--Grey-0);
  }
`;
