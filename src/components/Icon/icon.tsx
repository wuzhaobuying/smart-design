import React from "react";
import classnames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
export type iconTheme =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface iconProps extends FontAwesomeIconProps {
  theme?: iconTheme;
}

const Icon: React.FC<iconProps> = (props) => {
  const { theme, className, ...restProps } = props;
  const classNames = classnames("smart-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return (
    <FontAwesomeIcon className={classNames} {...restProps}></FontAwesomeIcon>
  );
};
Icon.defaultProps = {
  theme: "primary",
};
export default Icon;
