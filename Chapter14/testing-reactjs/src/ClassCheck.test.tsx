import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ClassCheck } from "./ClassCheck";

describe("ClassCheck", () => {
  it("should have class active when button was clicked", () => {
    render(<ClassCheck />);
    const button = screen.getByRole("button");

    expect(button).not.toHaveClass("active");
    fireEvent.click(button);
    expect(button).toHaveClass("active");
  });
});
