import * as React from "react";
import { HasRootRef } from "../../types";
import "./Div.css";

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/Div
 */
export const Div = ({ children, getRootRef, ...restProps }: DivProps) => {
  return (
    <div {...restProps} ref={getRootRef} vkuiClass="Div">
      {children}
    </div>
  );
};
