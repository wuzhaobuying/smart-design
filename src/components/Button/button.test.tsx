import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

test("不带props的Button能不能正常显示", () => {
  const wrapper = render(<Button data-testid="0"></Button>);
  const testButton = wrapper.getByTestId("0");
  expect(testButton).toBeInTheDocument();
  expect(testButton.tagName).toEqual("BUTTON");
});

test("带props的Button能不能带相应的类名", () => {
  const testProps: ButtonProps = {
    btnType: ButtonType.Danger,
    btnSize: ButtonSize.Large,
  };
  const wrapper = render(<Button data-testid="1" {...testProps}></Button>);
  const testButton = wrapper.getByTestId("1");
  expect(testButton).toBeInTheDocument();
  expect(testButton).toHaveClass("btn btn-danger btn-lg");
});

test("带个onClick事件的Button能不能正确触发事件", () => {
  const testProps: ButtonProps = {
    onClick: jest.fn(),
  };
  const wrapper = render(<Button data-testid="2" {...testProps}></Button>);
  const testButton = wrapper.getByTestId("2");
  fireEvent.click(testButton);
  expect(testProps.onClick).toBeCalled();
  expect(testProps.onClick).toBeCalledTimes(1);
});
