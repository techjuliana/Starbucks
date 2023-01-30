import { screen, render } from "@testing-library/react";
import { HomePage } from "../Home";

const renderComponent = () => {
  return render(
<HomePage/>
  )
}

describe('home', () => {
  it("o componente renderiza", () => {
    renderComponent();

    expect(screen.getByText("lendo")).toBeTruthy();
  })
})