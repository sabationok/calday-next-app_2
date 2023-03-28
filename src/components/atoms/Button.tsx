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
  children?: React.ReactNode;
  style?: object;
  iconId?: string;
}

export type ButtonProps = IButtonProps &
  React.HTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  iconId,
  ...props
}) => {
  return (
    <StyledButton {...{ variant, ...props }}>
      {children}
      {iconId && <BtnIcon id={iconId} size="20px" />}
    </StyledButton>
  );
};

const BtnIcon = styled(Icon)``;

const StyledButton = styled.button<ButtonProps>`
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
  ${BtnIcon} {
    color: ${({ variant }) => paramsMap?.fill[variant]};
  }

  border-color: ${({ variant }) => paramsMap?.borderColor[variant]};
  border-radius: ${({ variant }) => paramsMap?.borderRadius[variant]};
  border-width: ${({ variant }) => paramsMap?.borderWidth[variant]};

  border-style: solid;

  background: ${({ variant }) => paramsMap?.background[variant]};
  transition: all var(--timing-function__main);

  &:hover {
    background-color: ${({ variant }) =>
      paramsMap?.backgroundColorHover[variant]};
    fill: ${({ variant }) => paramsMap?.fillHover[variant]};
    color: ${({ variant }) => paramsMap?.colorHover[variant]};
    border-color: ${({ variant }) => paramsMap?.borderColorHover[variant]};
    ${BtnIcon} {
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
    ${BtnIcon} {
      color: ${({ variant }) => paramsMap?.fillActive[variant]};
    }
  }
`;

export default Button;
