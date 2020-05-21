import React, { HTMLAttributes, useState, createContext } from "react";
import classNames from "classnames";
import { menuItemProps } from "./menuitem";
export type menuMode = "vertical" | "horizontal";

interface baseMenuProps {
  className?: string;
  defaultIndex?: string;
  mode?: menuMode;
}

export type menuProps = baseMenuProps & HTMLAttributes<HTMLElement>;
export interface IMenuContext {
  menuIndex?: string;
  setIndex?: (index: string) => void;
}
export const menuContext = createContext<IMenuContext>({
  menuIndex: "0",
  setIndex: () => {},
});
const Menu: React.FC<menuProps> = (props) => {
  const { className, defaultIndex, mode, children, ...restProps } = props;
  const [index, setIndex] = useState(defaultIndex);
  const context = { menuIndex: index, setIndex };
  const classnames = classNames("menu", className, {
    [`menu-${mode}`]: mode,
  });
  const renderChildren = () => {
    return React.Children.map(children, (item, index) => {
      const child = item as React.FunctionComponentElement<menuItemProps>;
      if (
        child.type.displayName === "MenuItem" ||
        child.type.displayName === "SubMenu"
      )
        return React.cloneElement(child, { index: index.toString() });
      else console.error("Menu组件子节点必须为MenuItem组件");
    });
  };
  return (
    <menuContext.Provider value={context}>
      <ul className={classnames} {...restProps}>
        {renderChildren()}
      </ul>
    </menuContext.Provider>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
};

export default Menu;
