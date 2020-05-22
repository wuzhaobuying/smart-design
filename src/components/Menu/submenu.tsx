import React, { useState } from "react";
import classnames from "classnames";
import { menuItemProps } from "./menuitem";

interface baseSubMenuProps {
  index?: string;
  className?: string;
  title?: string;
}

export type subMenuProps = baseSubMenuProps &
  React.LiHTMLAttributes<HTMLElement>;

const SubMenu: React.FC<subMenuProps> = (props) => {
  const [opened, setOpened] = useState(false);
  const { index, className, children, title, ...restProps } = props;
  const classNames = classnames("submenu", className, {
    opened,
  });
  const renderChildren = () => {
    return React.Children.map(children, (item, subIndex) => {
      if (
        (item as React.FunctionComponentElement<menuItemProps>).type
          .displayName === "MenuItem"
      ) {
        return React.cloneElement(
          item as React.FunctionComponentElement<menuItemProps>,
          { index: `${index}-${subIndex}`, className: "submenu-item" }
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
      onClick={() => setOpened(!opened)}
    >
      <div className="submenu-title">{title}</div>
      <ul>{renderChildren()}</ul>
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
