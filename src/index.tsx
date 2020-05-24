import React from "react";
import ReactDOM from "react-dom";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/submenu";
import MenuItem from "./components/Menu/menuitem";
import Icon from "./components/Icon/icon";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Button>default btn</Button>
      <Button
        btnType={ButtonType.Link}
        btnSize={ButtonSize.Large}
        disable={true}
      >
        primary large
      </Button>
      <Button btnType={ButtonType.Primary} btnSize={ButtonSize.Small}>
        primary large
      </Button>
      <Button btnType={ButtonType.Primary} btnSize={ButtonSize.Large}>
        primary large
      </Button>
      <Button btnType={ButtonType.Danger} btnSize={ButtonSize.Large}>
        primary large
      </Button>
      <Menu>
        <MenuItem>0</MenuItem>
        <MenuItem>1</MenuItem>
        <SubMenu title="2">
          <MenuItem>2-0</MenuItem>
          <MenuItem>2-1</MenuItem>
          <MenuItem>2-2</MenuItem>
        </SubMenu>
        <MenuItem>3</MenuItem>
      </Menu>
      <Icon icon="coffee"></Icon>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
