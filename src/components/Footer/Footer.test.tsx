import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  test("should renders footer with left and right content", () => {
    render(<Footer />);

    expect(screen.getByText(/© Google 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/Version: 0.1.0/i)).toBeInTheDocument();
  });

  test("should renders the footer with correct className", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("footer");
  });
});
