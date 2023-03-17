import { memo } from "react";
import styled from "styled-components";

export const IconId = {
  check: "check",
  menu: "menu",
  close: "close",
  keyboard_arrow_right: "keyboard_arrow_right",
  arrow_right: "arrow_right",
  transfer_arrows: "transfer_arrows",
};

type IconProps = {
  id?: string;
  color?: string;
  size?: string;
  width?: string;
  height?: string;
  className?: string;
  style?: object;
  fontSize?: string;
};

const Icon: React.FC<IconProps> = ({
  id,
  color,
  size,
  width,
  height,
  className,
  style,
}) => {
  return (
    <StyledIcon
      className={[`icon-${id}`, className].join(" ")}
      {...{ color, size, width, height, style }}
    />
  );
};

const StyledIcon = styled.div<IconProps>`
  /* min-width: ${({ width, size }) => size || width || "18px"}; */

  color: ${({ color }) => color || "black"};
  &::before {
    display: block;
    font-size: ${({ width, size }) => size || width || "18px"};
    /* min-width: ${({ width, size }) => size || width || "18px"}; */
    color: ${({ color }) => color};
  }
`;

export default memo(Icon);
