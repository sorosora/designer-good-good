import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';
import Section from 'components/Section';

const Wrapper = styled.div``;

const IndexPage = () => (
  <Wrapper>
    <GridWrapper>
      <Section>
        <Section.Title>卡片設計和配圖的重要性</Section.Title>
        <Section.Subtitle>How we do it</Section.Subtitle>
      </Section>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
