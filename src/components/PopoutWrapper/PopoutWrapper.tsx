import * as React from "react";
import { classNames } from "../../lib/classNames";
import { IOS } from "../../lib/platform";
import { useTimeout } from "../../hooks/useTimeout";
import { usePlatform } from "../../hooks/usePlatform";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useDOM } from "../../lib/dom";
import "./PopoutWrapper.css";

export interface PopoutWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hasMask?: boolean;
  fixed?: boolean;
  alignY?: "top" | "center" | "bottom";
  alignX?: "left" | "center" | "right";
  closing?: boolean;
}

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/PopoutWrapper
 */
export const PopoutWrapper = ({
  alignY = "center",
  alignX = "center",
  closing = false,
  hasMask = true,
  fixed = true,
  children,
  onClick,
  ...restProps
}: PopoutWrapperProps) => {
  const platform = usePlatform();
  const [opened, setOpened] = React.useState(!hasMask);
  const elRef = React.useRef<HTMLDivElement>(null);

  const onFadeInEnd = (e?: React.AnimationEvent) => {
    if (!e || e.animationName === "vkui-animation-full-fade-in") {
      setOpened(true);
    }
  };
  const animationFinishFallback = useTimeout(
    onFadeInEnd,
    platform === IOS ? 300 : 200
  );
  React.useEffect(() => {
    !opened && animationFinishFallback.set();
  }, [animationFinishFallback, opened]);

  const { window } = useDOM();
  useGlobalEventListener(window, "touchmove", (e) => e.preventDefault(), {
    passive: false,
  });

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "PopoutWrapper",
        `PopoutWrapper--v-${alignY}`,
        `PopoutWrapper--h-${alignX}`,
        closing && "PopoutWrapper--closing",
        opened && "PopoutWrapper--opened",
        fixed && "PopoutWrapper--fixed",
        hasMask && "PopoutWrapper--masked"
      )}
      onAnimationEnd={opened ? undefined : onFadeInEnd}
      ref={elRef}
    >
      <div vkuiClass="PopoutWrapper__container">
        <div vkuiClass="PopoutWrapper__overlay" onClick={onClick} />
        <div vkuiClass="PopoutWrapper__content">{children}</div>
      </div>
    </div>
  );
};
