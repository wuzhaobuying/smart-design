import React from "react";
import { action } from "@storybook/addon-actions";
import Button, { ButtonSize, ButtonType } from "./button";

export default {
  component: Button,
  title: "Button",
  decorators: [
    (storyFn) => <div style={{ margin: "0 10px" }}>{storyFn()}</div>,
  ],
};

export const defaultButton = () => (
  <Button onClick={action("clicked")}>Default Button</Button>
);

export const differentSizeButton = () => (
  <>
    <Button style={{ margin: "0 10px" }} btnSize={ButtonSize.Large}>
      Large Button
    </Button>
    <Button style={{ margin: "0 10px" }} btnSize={ButtonSize.Small}>
      Small Button
    </Button>
  </>
);

export const differentTypeButton = () => (
  <>
    <Button style={{ margin: "0 10px" }} btnType={ButtonType.Default}>
      Default Button
    </Button>
    <Button style={{ margin: "0 10px" }} btnType={ButtonType.Primary}>
      Primary Button
    </Button>
    <Button style={{ margin: "0 10px" }} btnType={ButtonType.Danger}>
      Danger Button
    </Button>
    <Button style={{ margin: "0 10px" }} btnType={ButtonType.Link}>
      Link Button
    </Button>
  </>
);

export const disableButton = () => (
  <>
    <Button style={{ margin: "0 10px" }} disable>
      Disable Default Button
    </Button>
    <Button style={{ margin: "0 10px" }} disable btnType={ButtonType.Link}>
      Disable Link Button
    </Button>
  </>
);
