import Link from "next/link";
import styled from "styled-components";

export type FooterLinkProps = {
  name: string;
  link: string;
};
export type FooterSectionProps = {
  title: string;
  links: FooterLinkProps[];
};

export type FooterListProps = {
  footerMenuSections: FooterSectionProps[];
  contacts: any;
  company: any;
};

const FooterMenuList: React.FC<FooterListProps> = ({
  footerMenuSections,
  company,
  contacts,
}) => {
  return (
    <StyledFooterList>
      <FooterListItem>
        <Title>{company.title}</Title>

        <LinksList>
          <ListItemTextBold>{company.name}</ListItemTextBold>
        </LinksList>
      </FooterListItem>

      {footerMenuSections.map(({ title, links }, idx) => (
        <FooterListItem key={idx}>
          <Title>{title}</Title>

          <LinksList>
            {links.map((link, idx) => (
              <LinksListItem key={idx}>
                <Link href="#">{link.name}</Link>
              </LinksListItem>
            ))}
          </LinksList>
        </FooterListItem>
      ))}

      <FooterListItem>
        <Title>{contacts.title}</Title>

        <LinksList>
          <ListItemTextBold>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </ListItemTextBold>
        </LinksList>
      </FooterListItem>
    </StyledFooterList>
  );
};

const StyledFooterList = styled.ul`
  display: grid;
  /* justify-content: start; */
  gap: 48px;
  padding: 0 44px;
  margin-bottom: 60px;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
    justify-content: start;
    gap: 16px;
    padding: 0;
  }
`;

const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  color: ${({ theme }) => theme.bagePrimary};
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinksListItem = styled.li`
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;
  color: #ffffff;
`;
const ListItemTextBold = styled.li`
  font-weight: 800;
  font-size: 18px;
  color: #ffffff;
`;

export default FooterMenuList;
