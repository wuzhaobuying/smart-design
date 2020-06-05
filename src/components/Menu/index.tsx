import { FC } from "react";
import Menu, { menuProps } from "./menu";
import SubMenu, { subMenuProps } from "./submenu";
import MenuItem, { menuItemProps } from "./menuitem";

export type IMenuComponent = FC<menuProps> & {
  Item: FC<menuItemProps>;
  SubMenu: FC<subMenuProps>;
};
const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
