import { Icon28CancelOutline } from "@vkontakte/icons";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { IOS } from "../../lib/platform";
import { getTitleFromChildren } from "../../lib/utils";
import { usePlatform } from "../../hooks/usePlatform";

/**
 * @see https://inomdzhon.github.io/test-action-for-forked-rep/#/PanelHeaderClose
 */
export const PanelHeaderClose = ({
  children = "Отмена",
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      {...restProps}
    >
      {platform === IOS ? children : <Icon28CancelOutline />}
    </PanelHeaderButton>
  );
};
