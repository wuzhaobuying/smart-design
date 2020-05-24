import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export type animationType =
  | "zoom-in-left"
  | "zoom-in-top"
  | "zoom-in-right"
  | "zoom-in-bottom";

export interface baseTransitionProps {
  animation?: animationType;
}
export type transitionProps = baseTransitionProps & CSSTransitionProps;

const Transition: React.FC<transitionProps> = (props) => {
  const { classNames, animation, children, ...restProps } = props;

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
