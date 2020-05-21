import React, { useContext } from "react";
import classNames from "classnames";
import { menuContext } from "./menu";
export interface baseMenuItemProps {
  className?: string;
  index?: string;
  disable?: boolean;
}

export type menuItemProps = baseMenuItemProps &
  React.LiHTMLAttributes<HTMLElement>;

const MenuItem: React.FC<menuItemProps> = (props) => {
  const { className, index, disable, children, ...restProps } = props;
  const context = useContext(menuContext);
  const { menuIndex, setIndex } = context;
  const classnames = classNames("menu-item", className, {
    disabled: disable,
    actived: index === menuIndex && !disable,
  });
  const clickItem = (e: React.MouseEvent) => {
    e.preventDefault();
    if (setIndex) setIndex(index as string);
  };
  return (
    <li className={classnames} onClick={clickItem} {...restProps}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

MenuItem.defaultProps = {
  disable: false,
};

export default MenuItem;
