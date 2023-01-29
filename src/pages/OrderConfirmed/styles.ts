import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["basedark"]};
    @media (max-width: 750px) {
    text-align:center;
  }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 750px) {
    display:flex;
    flex-direction: column;
    padding:3rem;
  }
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 3rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-card"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 600px) {
    min-width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: ${({ theme }) => theme.colors["basedark"]};
  }
`;
