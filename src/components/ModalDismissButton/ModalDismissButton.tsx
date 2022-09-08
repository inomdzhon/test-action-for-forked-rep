import * as React from "react";
import { Icon20Cancel } from "@vkontakte/icons";
import { Tappable } from "../Tappable/Tappable";
import "./ModalDismissButton.css";

export type ModalDismissButtonProps = React.HTMLAttributes<HTMLButtonElement>;

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/ModalDismissButton
 */
export const ModalDismissButton = ({
  "aria-label": ariaLabel = "Закрыть",
  ...restProps
}: ModalDismissButtonProps) => {
  return (
    <Tappable
      vkuiClass="ModalDismissButton"
      {...restProps}
      aria-label={ariaLabel}
      activeMode="ModalDismissButton--active"
      hoverMode="ModalDismissButton--hover"
    >
      <Icon20Cancel />
    </Tappable>
  );
};
