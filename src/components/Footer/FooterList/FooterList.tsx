import testData from "@/testData";
import Link from "next/link";
import styled from "styled-components";

const FooterList: React.FC = () => {
  const { company, useCases, support, blog, contacts } = testData.footerData;
  return (
    <StyledFooterList>
      <FooterListItem>
        <Title>{company.title}</Title>

        <LinksList>
          <ListItemTextBold>{company.company}</ListItemTextBold>
        </LinksList>
      </FooterListItem>

      <FooterListItem>
        <Title>{useCases.title}</Title>

        <LinksList>
          {useCases.links.map((link) => (
            <LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </LinksListItem>
          ))}
        </LinksList>
      </FooterListItem>

      <FooterListItem>
        <Title>{support.title}</Title>

        <LinksList>
          {support.links.map((link) => (
            <LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </LinksListItem>
          ))}
        </LinksList>
      </FooterListItem>

      <FooterListItem>
        <Title>{blog.title}</Title>

        <LinksList>
          {blog.links.map((link) => (
            <LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </LinksListItem>
          ))}
        </LinksList>
      </FooterListItem>

      <FooterListItem>
        <Title>{contacts.title}</Title>

        <LinksList>
          <ListItemTextBold>
            <a href={`mailto${contacts.email}`}>{contacts.email}</a>
          </ListItemTextBold>
        </LinksList>
      </FooterListItem>
    </StyledFooterList>
  );
};

export const StyledFooterList = styled.ul`
  display: grid;
  justify-content: center;
  gap: 16px;

  margin-bottom: 60px;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
    justify-content: start;
  }
`;

export const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  color: ${({ theme }) => theme.bagePrimary};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinksListItem = styled.li`
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;
  color: #ffffff;
`;
export const ListItemTextBold = styled.li`
  font-weight: 800;
  font-size: 18px;
  color: #ffffff;
`;

export default FooterList;
