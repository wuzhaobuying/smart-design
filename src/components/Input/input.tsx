import React, { useState, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import Icon from "../Icon/icon";

export type inputSize = "lg" | "sm";
export type addSize = string | React.ReactElement;

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  inputSize?: inputSize;
  inputIcon?: IconProp;
  className?: string;
  append?: addSize;
  prepend?: addSize;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    disabled,
    inputSize,
    inputIcon,
    className,
    append,
    prepend,
    ...restProps
  } = props;
  const [value, setValue] = useState<string>("");
  const classNames = classnames("smart-input-wrapper", className, {
    [`input-size-${inputSize}`]: inputSize,
    "is-disabled": disabled,
    "input-group": !!prepend || !!append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  return (
    <div className={classNames}>
      {!!prepend && <div className="smart-input-group-prepend">{prepend}</div>}
      {!!inputIcon && (
        <div className="icon-wrapper">
          <Icon icon={inputIcon} title={`title-${inputIcon}`} />
        </div>
      )}
      <input
        className="smart-input-inner"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        disabled={disabled}
        {...restProps}
      />
      {!!append && <div className="smart-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
