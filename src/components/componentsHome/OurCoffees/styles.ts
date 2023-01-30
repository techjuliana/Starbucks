import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    padding:2rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    padding:2rem;
  }
 
`;
