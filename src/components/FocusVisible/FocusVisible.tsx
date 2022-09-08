import { classNames } from "../../lib/classNames";
import "./FocusVisible.css";

export type FocusVisibleMode = "inside" | "outside";

export interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/FocusVisible
 */
export const FocusVisible = ({ mode }: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    vkuiClass={classNames("FocusVisible", `FocusVisible--${mode}`)}
  />
);
