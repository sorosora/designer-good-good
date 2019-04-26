import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import { Img } from 'shared-components';
import Horoscope from 'components/Horoscope';
import LearningSchedule from './LearningSchedule';

const SC = {};

SC.LearningSchedule = styled(LearningSchedule)``;

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

const ImgWrapper = styled.div`
  max-width: 400px;
`;

const AnalyzeWrapper = styled.div`
  ${ImgWrapper} {
    margin-left: 9px;
  }
  
  ${SC.LearningSchedule} {
    margin-top: 33px;
  }
`;

const ProjectWrapper = styled.div`
  ${ImgWrapper} {
    margin-left: -14px;
  }
  
  ${SC.LearningSchedule} {
    margin-top: 70px;
  }
`;

const ProductWrapper = styled.div`
  ${ImgWrapper} {
    margin-left: auto;
    margin-right: 9px;
  }
  
  ${SC.LearningSchedule} {
    margin-top: 60px;
  }
`;

const LearningWrapper = styled.div`
  padding: 44px 0 95px;
  
  ${Title} {
    margin-bottom: 32px;
  }
  
  ${ProjectWrapper} {
    margin-top: -30px;
  }
  
  ${ProductWrapper} {
    margin-top: 7px;
  }
`;

const Wrapper = styled.div``;

const scheduleList = [
  {
    id: 'analyze',
    title: 'Analyze',
    time: 'FRIDAY - 5:30AM - 9:30AM',
    content: 'We are building a map of the initial state.'
      + 'We analyze ideas from different perspectives. We identify areas of uncertainty. We create a formal business model.',
    subject: 'BUSINESS MODEL, CANVAS',
  },
  {
    id: 'project',
    title: 'Project',
    time: 'SATURDAY - 10:00PM - 9:00AM',
    content: 'We identify and personalize your target group.'
      + 'We examine the expectations of your clients and the context in which they use them from your product.'
      + 'We design the best way to meet your needs.',
    subject: 'PERSONS UX, CUSTOMER USER JOURNEY MAP',
  },
  {
    id: 'product',
    title: 'Product',
    time: 'SUNDAY - 10:00PM - 9:00AM',
    content: 'We design the product in a multidimensional way.'
      + 'We extract its unique value. We test and pitch to create a coherent narrative.',
    subject: 'PAPER PROTOTYPING, STORYTELLING',
  },
];

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
      <LearningWrapper>
        <GridWrapper>
          <Title>What will you learn?</Title>
          <AnalyzeWrapper>
            <Grid>
              <Col width={[5 / 12, 5 / 12]} offset={[1 / 12, 1 / 12]}>
                <ImgWrapper>
                  <Img src='/static/images/image-1@2x.png' type='width' />
                </ImgWrapper>
              </Col>
              <Col width={[5 / 12]}>
                <SC.LearningSchedule
                  color='yellow'
                  title={scheduleList[0].title}
                  time={scheduleList[0].time}
                  content={scheduleList[0].content}
                  subject={scheduleList[0].subject}
                />
              </Col>
            </Grid>
          </AnalyzeWrapper>
          <ProjectWrapper>
            <Grid>
              <Col width={[5 / 12, 5 / 12]} offset={[1 / 12, 1 / 12]}>
                <SC.LearningSchedule
                  color='turquoise'
                  title={scheduleList[1].title}
                  time={scheduleList[1].time}
                  content={scheduleList[1].content}
                  subject={scheduleList[1].subject}
                />
              </Col>
              <Col width={[5 / 12, 5 / 12]} offset={[1 / 12, 1 / 12]}>
                <ImgWrapper>
                  <Img src='/static/images/image-2@2x.png' type='width' />
                </ImgWrapper>
              </Col>
            </Grid>
          </ProjectWrapper>
          <ProductWrapper>
            <Grid>
              <Col width={[5 / 12, 5 / 12]}>
                <ImgWrapper>
                  <Img src='/static/images/image-3@2x.png' type='width' />
                </ImgWrapper>
              </Col>
              <Col width={[5 / 12, 5 / 12]} offset={[1 / 12, 1 / 12]}>
                <SC.LearningSchedule
                  color='red'
                  title={scheduleList[2].title}
                  time={scheduleList[2].time}
                  content={scheduleList[2].content}
                  subject={scheduleList[2].subject}
                />
              </Col>
            </Grid>
          </ProductWrapper>
        </GridWrapper>
      </LearningWrapper>
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
