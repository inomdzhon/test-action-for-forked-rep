import * as React from "react";
import { PlatformType, platform } from "./platform";
import { BrowserInfo, computeBrowserInfo } from "./browser";
import { DOMContext, getDOM } from "../lib/dom";

export interface SSRContextInterface {
  platform: PlatformType | null;
  userAgent?: string;
  browserInfo?: BrowserInfo;
}

export const SSRContext = React.createContext<SSRContextInterface>({
  platform: null,
  userAgent: "",
  browserInfo: undefined,
});

export interface SSRWrapperProps {
  userAgent?: string;
  browserInfo?: BrowserInfo;
  children?: React.ReactNode;
}

/**
 * @see https://inomdzhon.github.io/VKUI/#/SSR
 */
export const SSRWrapper = ({
  userAgent,
  browserInfo,
  children,
}: SSRWrapperProps) => {
  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  // TODO: Каждый раз создаётся новый объект для контекста - плохо
  const contextValue = {
    platform: platform(browserInfo),
    browserInfo,
    userAgent,
  };

  // TODO: move to state, and update in effect?
  const dom = getDOM();

  return (
    <SSRContext.Provider value={contextValue}>
      <DOMContext.Provider value={dom}>{children}</DOMContext.Provider>
    </SSRContext.Provider>
  );
};
