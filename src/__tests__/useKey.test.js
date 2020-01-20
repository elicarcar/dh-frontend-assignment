import React, { useState } from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import "jest-styled-components";
import useKey from "../customHooks/useKey";
import App from "../App";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { toHaveFocus } from "@testing-library/jest-dom/dist/to-have-focus";

expect.extend({ toHaveFocus });

describe("useKey custom hook", () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Type or Search..");

  act(() => {
    fireEvent.keyDown(window, { key: "Enter", code: 13 });
  });
  expect(input).toHaveFocus();

  act(() => {
    fireEvent.keyDown(window, { key: "Escape", code: 27 });
  });
  expect(input).not.toHaveFocus();
});
