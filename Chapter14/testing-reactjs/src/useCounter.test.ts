import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { test, expect } from "vitest";

test("useCounter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(10);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(0);
});
