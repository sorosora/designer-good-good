import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import Section from 'components/wrong/Section';
import { ArticleCard } from 'components/wrong/Card';
import Button from 'components/wrong/Button';

const ArticleSection = styled(Section)`
  padding: 43px;
  margin-bottom: 27px;
    
  ${Section.Title} {
    margin-bottom: 5px;
  }
  
  ${Section.Subtitle} {
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div``;

const articleList = [
  {
    id: 0,
    title: 'Case Study no 第187條讓西瓜爆掉的橡皮筋',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting…',
    coverImgSrc: 'https://picsum.photos/id/237/240/370',
  },
  {
    id: 1,
    title: 'Case Study no 第187條讓西瓜爆掉的橡皮筋',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting…',
    coverImgSrc: 'https://picsum.photos/id/37/240/370',
  },
  {
    id: 2,
    title: 'Case Study no 第187條讓西瓜爆掉的橡皮筋',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting…',
    coverImgSrc: 'https://picsum.photos/id/23/240/370',
  },
];

const IndexPage = () => (
  <Wrapper>
    <GridWrapper>
      <Section>
        <Grid>
          <Col width={[2 / 12]} offset={[1 / 12]}>
            <Button>BUTTON</Button>
          </Col>
          <Col width={[2 / 12]} offset={[2 / 12]}>
            <Button>BUTTON</Button>
          </Col>
          <Col width={[2 / 12]} offset={[2 / 12]}>
            <Button>BUTTON</Button>
          </Col>
        </Grid>
      </Section>
      <ArticleSection>
        <Section.Title>卡片設計和配圖的重要性</Section.Title>
        <Section.Subtitle>How we do it</Section.Subtitle>
        <Grid>
          {
            articleList.map(article => (
              <Col width={[4 / 12]} key={article.id}>
                <ArticleCard
                  title={article.title}
                  content={article.content}
                  linkProps={{
                    href: {
                      pathname: '/article',
                      query: {
                        articleId: article.id,
                      },
                    },
                    as: `/article/${article.id}`,
                  }}
                  coverImgSrc={article.coverImgSrc}
                />
              </Col>
            ))
          }
        </Grid>
      </ArticleSection>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
