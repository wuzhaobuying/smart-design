import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classnames from "classnames";

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

interface BaseButtonProps {
  /** button的类型
   */
  btnType?: ButtonType;
  btnSize?: ButtonSize;
  className?: string;
  disable?: boolean;
  children?: React.ReactNode;
  href?: string;
}

export type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement> &
  AnchorHTMLAttributes<HTMLElement>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    btnSize,
    className,
    disable,
    children,
    href,
    ...restProps
  } = props;
  const classNames = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${btnSize}`]: btnSize,
    disable: btnType === ButtonType.Link && disable,
  });
  if (btnType === ButtonType.Link) {
    return (
      <a href={href} className={classNames} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classNames} disabled={disable} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: ButtonType.Default,
  disable: false,
};

export default Button;
