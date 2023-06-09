import styled from "styled-components";
import { paramsMap } from "@/styles/theme";
import Icon from "./Icon";

export type BtnVariantNames =
  | "filled"
  | "outlinedLarge"
  | "outlinedLargeGradient"
  | "outlinedSmall";
export interface IButtonProps {
  variant: BtnVariantNames;
  style?: object;
  iconId?: string;
}

const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = "filled", iconId, ...props }) => {
  return (
    <StyledButton {...{ variant, ...props }}>
      {children}
      {iconId && <Icon id={iconId} size="20px" className="myIcon" />}
    </StyledButton>
  );
};

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;

  font-family: inherit;
  font-weight: 700;

  user-select: none;
  text-transform: uppercase;
  white-space: nowrap;

  width: fit-content;

  padding: ${({ variant }) => paramsMap?.padding[variant]};

  font-size: ${({ variant }) => paramsMap?.fontSize[variant]};
  line-height: ${({ variant }) => paramsMap?.lineHeight[variant]};

  min-height: ${({ variant }) => paramsMap?.minHeight[variant]};
  min-width: ${({ variant }) => paramsMap?.minWidth[variant]};

  background-color: ${({ variant }) => paramsMap?.backgroundColor[variant]};
  fill: ${({ variant }) => paramsMap?.fill[variant]};
  color: ${({ variant }) => paramsMap?.color[variant]};

  border-color: ${({ variant }) => paramsMap?.borderColor[variant]};
  border-radius: ${({ variant }) => paramsMap?.borderRadius[variant]};
  border-width: ${({ variant }) => paramsMap?.borderWidth[variant]};

  border-style: solid;

  background: ${({ variant }) => paramsMap?.background[variant]};
  transition: all var(--timing-function__main);

  & .myIcon {
    color: ${({ variant }) => paramsMap?.fill[variant]};
  }
  &:hover {
    background-color: ${({ variant }) =>
      paramsMap?.backgroundColorHover[variant]};
    fill: ${({ variant }) => paramsMap?.fillHover[variant]};
    color: ${({ variant }) => paramsMap?.colorHover[variant]};
    border-color: ${({ variant }) => paramsMap?.borderColorHover[variant]};
    & .myIcon {
      color: ${({ variant }) => paramsMap?.fillHover[variant]};
    }
  }
  &:active {
    background-color: ${({ variant }) =>
      paramsMap?.backgroundColorActive[variant]};
    fill: ${({ variant }) => paramsMap?.fillActive[variant]};
    color: ${({ variant }) => paramsMap?.colorActive[variant]};
    border-color: ${({ variant }) => paramsMap?.borderColorActive[variant]};
    background: ${({ variant }) => paramsMap?.backgroundActive[variant]};
    & .myIcon {
      color: ${({ variant }) => paramsMap?.fillActive[variant]};
    }
  }
`;

export default Button;
