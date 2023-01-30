import {
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";
import { RegularText } from "./../../Typography";

export function Intro() {

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
            STARBUCKS
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
            Independente do seu gosto ou paladar, encontrará um café Starbucks® perfeito para você.
            </RegularText>
          </section>
        </div>
      </IntroContent>
    </IntroContainer>
  );
}
