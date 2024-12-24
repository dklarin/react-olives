import React from "react";
import { styledTheme } from "../../styling/theme";
import { memoize } from "lodash";
import { icons } from "./icons";

export const styleSvg = (component) => {
  return styledTheme(component)`
  rect {
    fill: ${(props) => props.color || props.theme.color};
  }
    path {
      fill: ${(props) => props.color || props.theme.color};
    }
    polygon{
      fill: ${(props) => props.color || props.theme.color};
    }
  `;
};

export function makeIcon(name, options = { size: 16 }) {
  const Icon = icons[name];

  if (!Icon) return;

  const { size, color } = options;
  const resolvedSize = size || 16;

  const iconComponent = memoize(
    (props) => (
      <Icon
        color={color}
        style={Object.assign(
          { alignSelf: "center" },
          { width: `${resolvedSize}px`, height: `${resolvedSize}px` },
          props.style
        )}
        className={props.className}
      />
    ),
    () => `icon_${name}_size_${size}`
  );

  return iconComponent;
}
