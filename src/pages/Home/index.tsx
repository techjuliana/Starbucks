import { Intro } from "./../../components/componentsHome/Intro";
import { OurCoffees } from "./../../components/componentsHome/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
}
