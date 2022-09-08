import React from "react";
import { Link } from "@vkui";

export const LinkRenderer = ({ href: _href, ...restProps }) => {
  const href = _href?.replace(
    "https://inomdzhon.github.io/test-action-for-forked-rep/",
    ""
  );

  return <Link href={href} {...restProps} />;
};

export default LinkRenderer;
