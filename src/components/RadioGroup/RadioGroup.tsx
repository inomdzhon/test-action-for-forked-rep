import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./RadioGroup.css";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/RadioGroup
 */
export const RadioGroup = ({
  mode = "vertical",
  children,
  ...restProps
}: RadioGroupProps) => (
  <div
    vkuiClass={classNames("RadioGroup", `RadioGroup--${mode}`)}
    {...restProps}
  >
    {children}
  </div>
);
