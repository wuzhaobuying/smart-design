import React from "react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuitem";

export default {
  component: Menu,
  title: "Menu",
  decorators: [
    (storyFn) => <div style={{ margin: "0 10px" }}>{storyFn()}</div>,
  ],
};

export const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);
