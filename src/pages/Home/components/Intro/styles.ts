import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro.jpg";
import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";

export const IntroContainer = styled.section`
  width: 100%;
  height: 38rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  section{
    background: ${({ theme }) => theme.colors["base-card"]};
    padding:1rem;
    margin:2rem;
    border-radius: 6px 36px 6px 36px;
    justify-content:left;
    max-width:40rem;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
