import { ThemeType } from "@/styles/theme";
import styled from "styled-components";
import Icon, { IconId } from "../Icon";

type FAQItemProps = {
  title?: string;
  descr?: string;
  onClick: React.MouseEventHandler;
  isOpen?: boolean;
  idx?: number;
};

const FAQListItem: React.FC<FAQItemProps> = ({
  title,
  descr,
  onClick,
  isOpen = false,
}) => {
  return (
    <ListItem isOpen={isOpen}>
      <OpenItemButton onClick={onClick}>
        <ItemIcon
          isOpen={isOpen}
          id={IconId.keyboard_arrow_right}
          size="24px"
        />
        <span>{title}</span>
      </OpenItemButton>

      <ItemDescription isOpen={isOpen}>
        <ItemDescriptionInner>{descr}</ItemDescriptionInner>
      </ItemDescription>
    </ListItem>
  );
};

const ListItem = styled.li<{ isOpen: boolean }>`
  background-color: ${({ isOpen }) => (isOpen ? "#ffffff" : "#f7f6f0")};

  box-shadow: -40px 20px 100px rgba(163, 159, 139, 0.1);

  fill: ${({ isOpen }) => (!isOpen ? "#d9b682" : "#62C45B")};
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid;
  border-color: ${({ isOpen }) => (isOpen ? "#d9b682" : "transparent")};

  transition: all var(--timing-function__main);
`;

const OpenItemButton = styled.button`
  display: flex;
  gap: 20px;

  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  text-align: left;
  color: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};

  width: 100%;
  padding: 21px 16px;

  border-style: none;
  background-color: transparent;
  border: 1px solid transparent;

  border-radius: 10px;
`;

const ItemDescription = styled.div<{ isOpen: boolean }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;

  color: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};

  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "0 16px 0 64px" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  transition: all var(--timing-function__main);
`;
const ItemDescriptionInner = styled.span`
  display: block;
  padding-bottom: 25px;
`;
const ItemIcon = styled(Icon)<{ isOpen: boolean }>`
  color: ${({ isOpen, theme }: { isOpen: boolean; theme: ThemeType }) =>
    isOpen ? theme.actionGreen : theme.bageDark};
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;
export default FAQListItem;
