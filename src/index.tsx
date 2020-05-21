import React from "react";
import ReactDOM from "react-dom";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuitem";
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
      <Menu mode="vertical">
        <MenuItem>0</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
      </Menu>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
