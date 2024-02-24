import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("should be in document", () => {
    render(<App />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
