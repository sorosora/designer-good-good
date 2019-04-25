import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import Section from 'components/Section';
import { ArticleCard, AlbumCard } from 'components/Card';

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

const albumList = [
  {
    id: 0,
    title: 'Sketch Okinawa',
    subtitle: 'FONTECH',
    count: 11,
    coverImgSrc: 'https://picsum.photos/id/11/240/370',
    tagColor: 'black',
  },
  {
    id: 1,
    title: 'Sketch XD',
    subtitle: 'FONTECH',
    count: 12,
    coverImgSrc: 'https://picsum.photos/id/12/240/370',
    tagColor: 'green',
  },
  {
    id: 2,
    title: 'Sketch ABC',
    subtitle: 'FONTECH',
    count: 901,
    coverImgSrc: 'https://picsum.photos/id/901/240/370',
    tagColor: 'yellow',
  },
  {
    id: 3,
    title: 'Sketch Taipei',
    subtitle: 'FONTECH',
    count: 132,
    coverImgSrc: 'https://picsum.photos/id/132/240/370',
    tagColor: 'yellow',
  },
  {
    id: 4,
    title: 'Sketch Okinawa',
    subtitle: 'FONTECH',
    count: 11,
    coverImgSrc: 'https://picsum.photos/id/21/240/370',
    tagColor: 'orange',
  },
  {
    id: 5,
    title: 'Sketch XD',
    subtitle: 'FONTECH',
    count: 12,
    coverImgSrc: 'https://picsum.photos/id/122/240/370',
    tagColor: 'orange',
  },
  {
    id: 6,
    title: 'Sketch ABC',
    subtitle: 'FONTECH',
    count: 901,
    coverImgSrc: 'https://picsum.photos/id/91/240/370',
    tagColor: 'orange',
  },
  {
    id: 7,
    title: 'Sketch Taipei',
    subtitle: 'FONTECH',
    count: 132,
    coverImgSrc: 'https://picsum.photos/id/32/240/370',
    tagColor: 'green',
  },
];

const IndexPage = () => (
  <Wrapper>
    <GridWrapper>
      <Section>
        <Grid verticalGutter={['24px']}>
          {
            albumList.map(album => (
              <Col width={[3 / 12]} key={album.id}>
                <AlbumCard
                  title={album.title}
                  subtitle={album.subtitle}
                  linkProps={{
                    href: {
                      pathname: '/album',
                      query: {
                        albumId: album.id,
                      },
                    },
                    as: `/album/${album.id}`,
                  }}
                  coverImgSrc={album.coverImgSrc}
                  count={album.count}
                  tagColor={album.tagColor}
                />
              </Col>
            ))
          }
        </Grid>
      </Section>
      <Section>
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
      </Section>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
