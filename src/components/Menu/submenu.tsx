import React, { useState } from "react";
import classnames from "classnames";
import { menuItemProps } from "./menuitem";
import Icon from "../Icon/icon";

interface baseSubMenuProps {
  index?: string;
  className?: string;
  title: string;
}

export type subMenuProps = baseSubMenuProps &
  React.LiHTMLAttributes<HTMLElement>;

const SubMenu: React.FC<subMenuProps> = (props) => {
  const [opened, setOpened] = useState(false);
  const { index, className, children, title, ...restProps } = props;
  const classNames = classnames("submenu-item menu-item", className);
  const onMouseEnter = () => {
    setOpened(!opened);
  };
  const onMouseLeave = () => {
    setOpened(!opened);
  };

  const renderChildren = () => {
    return React.Children.map(children, (item, subIndex) => {
      if (
        (item as React.FunctionComponentElement<menuItemProps>).type
          .displayName === "MenuItem"
      ) {
        return React.cloneElement(
          item as React.FunctionComponentElement<menuItemProps>,
          { index: `${index}-${subIndex}` }
        );
      } else {
        console.error("SubMenu子组件里只能有MenuItem组件");
      }
    });
  };
  return (
    <li
      className={classNames}
      {...restProps}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="submenu-title">
        {title} <Icon className="arrow-icon" icon="angle-down"></Icon>
      </div>
      <ul className={opened ? "submenu opened" : "submenu closed"}>
        {renderChildren()}
      </ul>
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
