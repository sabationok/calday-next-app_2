import styled from "styled-components";
import { paramsMap } from "@/styles/theme";
import Icon from "./Icon";

export interface ButtonProps {
  variant:
    | "filled"
    | "outlinedLarge"
    | "outlinedSmall"
    | "outlinedLargeGradient";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  style?: object;
  iconId?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  type = "button",
  style,
  iconId,
  ...props
}) => {
  return (
    <StyledButton {...{ variant, type, style, ...props }}>
      {children}
      {iconId && <BtnIcon id={iconId} size="20px" />}
    </StyledButton>
  );
};

const BtnIcon = styled(Icon)``;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;

  font-family: inherit;
  font-weight: 700;

  user-select: none;
  text-transform: uppercase;

  width: fit-content;

  padding: ${({ variant }: ButtonProps) => paramsMap?.padding[variant]};

  font-size: ${({ variant }: ButtonProps) => paramsMap?.fontSize[variant]};
  line-height: ${({ variant }: ButtonProps) => paramsMap?.lineHeight[variant]};

  min-height: ${({ variant }: ButtonProps) => paramsMap?.minHeight[variant]};
  min-width: ${({ variant }: ButtonProps) => paramsMap?.minWidth[variant]};

  background-color: ${({ variant }: ButtonProps) =>
    paramsMap?.backgroundColor[variant]};
  fill: ${({ variant }: ButtonProps) => paramsMap?.fill[variant]};
  color: ${({ variant }: ButtonProps) => paramsMap?.color[variant]};
  ${BtnIcon} {
    color: ${({ variant }) => paramsMap?.fill[variant]};
  }

  border-color: ${({ variant }: ButtonProps) =>
    paramsMap?.borderColor[variant]};
  border-radius: ${({ variant }: ButtonProps) =>
    paramsMap?.borderRadius[variant]};
  border-width: ${({ variant }: ButtonProps) =>
    paramsMap?.borderWidth[variant]};

  border-style: solid;

  background: ${({ variant }: ButtonProps) => paramsMap?.background[variant]};
  transition: all var(--timing-function__main);

  &:hover {
    background-color: ${({ variant }: ButtonProps) =>
      paramsMap?.backgroundColorHover[variant]};
    fill: ${({ variant }: ButtonProps) => paramsMap?.fillHover[variant]};
    color: ${({ variant }: ButtonProps) => paramsMap?.colorHover[variant]};
    border-color: ${({ variant }: ButtonProps) =>
      paramsMap?.borderColorHover[variant]};
    ${BtnIcon} {
      color: ${({ variant }) => paramsMap?.fillHover[variant]};
    }
  }
  &:active {
    background-color: ${({ variant }: ButtonProps) =>
      paramsMap?.backgroundColorActive[variant]};
    fill: ${({ variant }: ButtonProps) => paramsMap?.fillActive[variant]};
    color: ${({ variant }: ButtonProps) => paramsMap?.colorActive[variant]};
    border-color: ${({ variant }: ButtonProps) =>
      paramsMap?.borderColorActive[variant]};
    background: ${({ variant }: ButtonProps) =>
      paramsMap?.backgroundActive[variant]};
    ${BtnIcon} {
      color: ${({ variant }) => paramsMap?.fillActive[variant]};
    }
  }
`;

export default Button;
