import React, { useContext } from "react";
import classnames from "classnames";
import { menuContext } from "./menu";
export interface baseMenuItemProps {
  className?: string;
  index?: string;
  disabled?: boolean;
}

export type menuItemProps = baseMenuItemProps &
  React.LiHTMLAttributes<HTMLElement>;

const MenuItem: React.FC<menuItemProps> = (props) => {
  const { className, index, disabled, children, ...restProps } = props;
  const context = useContext(menuContext);
  const { menuIndex, setIndex } = context;
  const classNames = classnames("menu-item", className, {
    disabled: disabled,
    actived: index === menuIndex && !disabled,
  });
  const clickItem = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(index);
    if (setIndex) setIndex(index as string);
  };
  return (
    <li className={classNames} onClick={clickItem} {...restProps}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

MenuItem.defaultProps = {
  disabled: false,
};

export default MenuItem;
