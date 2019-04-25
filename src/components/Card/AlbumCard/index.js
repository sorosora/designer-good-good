import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InlineCenter } from 'shared-components';
import Card from '../Card';

const SC = {};

const tagImage = (props) => {
  const { color } = props;
  switch (color) {
    case 'black':
      return '/static/images/icon/tag-black.svg';
    case 'green':
      return '/static/images/icon/tag-green.svg';
    case 'yellow':
      return '/static/images/icon/tag-yellow.svg';
    case 'orange':
      return '/static/images/icon/tag-orange.svg';
    default:
      return '';
  }
};

const Tag = styled.div`
  width: 24px;
  height: 36px;
  background-image: ${props => `url(${tagImage(props)})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.375;
  font-weight: bold;
  color: hsl(0, 0%, 100%);
`;

const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 12px;
  line-height: 1.375;
  color: hsl(0, 0%, 100%);
`;

const Icon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(/static/images/icon/icon-member.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Count = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 12px;
  line-height: 1.375;
  font-style: italic;
  text-align: right;
  color: hsl(0, 0%, 100%);
  
  ${Icon} {
    margin-right: 3px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
  background-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.75));
  
  ${Tag} {
    position: absolute;
    top: 0;
    left: 24px;
  }
  
  ${Title} {
    margin-top: auto;
  }
  
  ${Count} {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`;

SC.Cover = styled(Card.Cover)`
  position: relative;
  
  ${ContentWrapper} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

SC.Card = styled(Card)`
  border-radius: 6px;
  overflow: hidden;
`;

const A = styled.a``;

const AlbumCard = (props) => {
  const {
    title, subtitle, count, linkProps, coverImgSrc, tagColor, ...otherProps
  } = props;
  return (
    <Link {...linkProps} passHref>
      <A>
        <SC.Card {...otherProps}>
          <SC.Cover imgSrc={coverImgSrc} ratio={['270:200']}>
            <ContentWrapper>
              <Tag color={tagColor} />
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              <Count>
                <InlineCenter><Icon /></InlineCenter>
                {count}
              </Count>
            </ContentWrapper>
          </SC.Cover>
        </SC.Card>
      </A>
    </Link>
  );
};

AlbumCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkProps: PropTypes.shape({ ...Link.propTypes, children: undefined }).isRequired,
  coverImgSrc: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  tagColor: PropTypes.string.isRequired,
};

export default AlbumCard;
