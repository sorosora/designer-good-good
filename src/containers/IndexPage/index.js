import Link from 'next/link';
import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';

const A = styled.a`
  font-size: 20px;
  line-height: 1.39;
  color: hsl(184, 80%, 43%);
  
  :hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div``;

const IndexPage = () => (
  <Wrapper>
    <GridWrapper>
      <ul>
        <li>
          <Link href='/p1' passHref>
            <A>p1</A>
          </Link>
        </li>
        <li>
          <Link href='/p2' passHref>
            <A>p2</A>
          </Link>
        </li>
        <li>
          <Link href='/p3' passHref>
            <A>p3</A>
          </Link>
        </li>
        <li>
          <Link href='/wrong/p1' passHref>
            <A>wrong p1</A>
          </Link>
        </li>
        <li>
          <Link href='/wrong/p2' passHref>
            <A>wrong p2</A>
          </Link>
        </li>
        <li>
          <Link href='/wrong/p3' passHref>
            <A>wrong p3</A>
          </Link>
        </li>
      </ul>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
