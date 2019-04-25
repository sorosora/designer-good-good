import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import Section from 'components/Section';
import { ArticleCard } from 'components/Card';

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
        <Section.Title>卡片設計和配圖的重要性</Section.Title>
        <Section.Subtitle>How we do it</Section.Subtitle>
        <Grid>
          {
            articleList.map(article => (
              <Col width={[4 / 12]}>
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
      </Section>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
