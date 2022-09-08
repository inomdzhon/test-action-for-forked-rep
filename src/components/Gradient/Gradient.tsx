import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Gradient.css";

export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Тип градиента
   */
  mode?: "tint" | "white" | "black";
  /**
   * Направление градиента
   */
  to?: "top" | "bottom";
}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/Gradient
 */
export const Gradient = ({
  mode = "tint",
  children,
  to = "top",
  ...restProps
}: GradientProps) => {
  return (
    <div
      role="presentation"
      {...restProps}
      vkuiClass={classNames(
        "Gradient",
        `Gradient--md-${mode}`,
        `Gradient--to-${to}`
      )}
    >
      {children}
    </div>
  );
};
