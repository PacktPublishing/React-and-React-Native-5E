import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("should handle change event", () => {
    render(<Input />);
    const input = screen.getByTestId<HTMLInputElement>("userName");
    fireEvent.change(input, { target: { value: "Mikhail" } });

    expect(input.value).toBe("Mikhail");
  });
});
