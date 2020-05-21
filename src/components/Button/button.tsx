import React from "react";
import ClassNames from "classnames";

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
  btnType?: ButtonType;
  btnSize?: ButtonSize;
  className?: string;
  disable?: boolean;
  children?: React.ReactNode;
  href?: string;
}

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    btnSize,
    className,
    disable,
    children,
    href,
    ...restProps
  } = props;
  const classNames = ClassNames("btn", className, {
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
