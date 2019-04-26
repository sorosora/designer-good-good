import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import Horoscope from 'components/Horoscope';

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 36px;
  line-height: 1.375;
  font-weight: 600;
  text-align: center;
  color: hsl(220, 3%, 21%);
`;

const Block = styled.div`
  background-color: hsla(0, 0%, 71%, 0.18);
`;

const HoroscopeBlock = styled(Block)`
  padding: 40px 0;
  
  ${Title} {
    margin-bottom: 42px;
  }
`;

const Wrapper = styled.div``;

const horoscopeList = [
  {
    id: 0,
    sign: 'Cancer',
    title: '巨蟹座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    id: 1,
    sign: 'Aries',
    title: '牡羊座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    id: 2,
    sign: 'Leo',
    title: '獅子座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    id: 3,
    sign: 'Virgo',
    title: '處女座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    id: 4,
    sign: 'Taurus',
    title: '金牛座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    id: 5,
    sign: 'Gemini',
    title: '雙子座的愛恨糾葛',
    content: 'No more Mulitple Platforms. Now it had seen unable uneasy.'
      + 'Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
];

const P2Page = (props) => {
  const { ...otherProps } = props;
  return (
    <Wrapper {...otherProps}>
      <HoroscopeBlock>
        <GridWrapper>
          <Title>All the pricing has these features…</Title>
          <Grid verticalGutter={['32px']}>
            {
              horoscopeList.map(horoscope => (
                <Col width={[4 / 12]} key={horoscope.id}>
                  <Horoscope
                    title={horoscope.title}
                    content={horoscope.content}
                    sign={horoscope.sign}
                  />
                </Col>
              ))
            }
          </Grid>
        </GridWrapper>
      </HoroscopeBlock>
    </Wrapper>
  );
};

export default P2Page;
