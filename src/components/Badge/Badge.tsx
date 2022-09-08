import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Badge.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  mode: "new" | "prominent";
}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/Badge
 */
export const Badge = ({ mode = "new", ...restProps }: BadgeProps) => (
  <span vkuiClass={classNames("Badge", `Badge--${mode}`)} {...restProps} />
);
