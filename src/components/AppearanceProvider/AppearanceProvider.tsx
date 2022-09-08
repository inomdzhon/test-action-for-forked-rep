import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { AppearanceProviderContext } from "./AppearanceProviderContext";
import { getScheme } from "../../helpers/getScheme";
import { classNamesString } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";

export interface AppearanceProviderProps {
  appearance?: AppearanceType;
  children?: React.ReactNode;
}

export const generateVKUITokensClassName = (
  platform: string,
  appearance: string
): string => {
  let tokensPlatform;
  switch (platform) {
    case Platform.ANDROID:
      tokensPlatform = "vkBase";
      break;
    case Platform.IOS:
      tokensPlatform = "vkIOS";
      break;
    case Platform.VKCOM:
      tokensPlatform = "vkCom";
      break;
    default:
      tokensPlatform = platform;
  }

  return `vkui--${tokensPlatform}--${appearance}`;
};

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/AppearanceProvider
 */
export const AppearanceProvider = ({
  children,
  appearance = "light",
}: AppearanceProviderProps) => {
  const platform = usePlatform();
  const scheme = getScheme({
    platform,
    appearance,
  });

  return (
    <AppearanceProviderContext.Provider value={appearance}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: classNamesString(
              child.props.className,
              `vkui${scheme}`,
              generateVKUITokensClassName(platform, appearance)
            ),
          });
        }
        return child;
      })}
    </AppearanceProviderContext.Provider>
  );
};
