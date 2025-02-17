import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header Component", () => {
  test("should renders default left and right content when no props are provided", () => {
    render(<Header />);

    expect(screen.getByText("Agile Content")).toBeInTheDocument();
    expect(screen.getByText("Frontend test")).toBeInTheDocument();

    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();

    const userImage = screen.getByRole("img", { name: /User Icon/i });
    expect(userImage).toBeInTheDocument();
  });

  test("should renders custom left and right content when provided", () => {
    render(
      <Header
        leftContent={<div>Custom Left</div>}
        rightContent={<div>Custom Right</div>}
      />,
    );

    expect(screen.getByText("Custom Left")).toBeInTheDocument();
    expect(screen.getByText("Custom Right")).toBeInTheDocument();

    expect(screen.queryByText("Agile Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Frontend test")).not.toBeInTheDocument();
  });
});
