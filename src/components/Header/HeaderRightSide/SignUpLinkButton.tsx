// import SvgIcon from '@/components/SvgIcon/SvgIcon';
// import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import Icon, { IconId } from "@/components/atoms/Icon";
import { paramsMap } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";
type SignUpLinkButtonProps = {
  variant:
    | "filled"
    | "outlinedLarge"
    | "outlinedSmall"
    | "outlinedLargeGradient";
};
const SignUpLinkButton: React.FC<SignUpLinkButtonProps> = ({
  variant = "outlinedSmall",
}) => {
  return (
    <StLink href={"#"} variant={variant}>
      <span>SIGN UP</span>

      <LinkIcon id={IconId.arrow_right} />
    </StLink>
  );
};
const LinkIcon = styled(Icon)<{ variant?: string }>``;

const StLink = styled(Link)<SignUpLinkButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;

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

  &:hover {
    background-color: ${({ variant }) =>
      paramsMap?.backgroundColorHover[variant]};
    fill: ${({ variant }) => paramsMap?.fillHover[variant]};
    color: ${({ variant }) => paramsMap?.colorHover[variant]};
    border-color: ${({ variant }) => paramsMap?.borderColorHover[variant]};
    ${LinkIcon} {
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
    ${LinkIcon} {
      color: ${({ variant }) => paramsMap?.fillActive[variant]};
    }
  }
`;

export default SignUpLinkButton;
