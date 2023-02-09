import styled from "styled-components";

export const Conteiner = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  .modal-box {
    display: flex;
    flex-direction: column;
    background: var(--Grey-3);
    border-radius: 5px;
    position: relative;
    width: 23rem;
    height: 20rem;

    .headerM {
      display: flex;
      align-items: center;
      height: 2.5rem;
      padding-left: 1rem;
      background-color: var(--Grey-2);
      border-radius: 4px;

      h2 {
        font-size: 14px;
        font-weight: 700;
        color: var(--Grey-0);
      }
    }
    .formM {
      display: flex;
      flex-direction: column;
      padding-top: 1.5rem;
      gap: 1rem;
      div {
        margin: 0 auto;
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        label {
          color: var(--Grey-0);
          font-size: 12px;
        }
        input,
        select {
          height: 2.5rem;
          border: none;
          outline: none;
          background-color: var(--Grey-2);
          color: var(--Grey-0);
          border-radius: 4px;
          padding-left: 1rem;
          border: 1px solid transparent;
          &:focus {
            border: 1px solid var(--Grey-0);
          }
        }
        p {
          font-size: 12px;
          color: var(--Negative);
        }
      }
    }
    .close {
      position: absolute;
      top: -9px;
      right: -9px;
      background-color: var(--Grey-2);
      width: 21px;
      height: 21px;
      border: none;
      border-radius: 50%;
      color: var(--Grey-0);
      cursor: pointer;
      &:hover {
        color: var(--Negative);
      }
    }

    .buttonM {
      margin: 0 auto;
      margin-top: 1rem;
      width: 85%;
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
    }
  }
`;
