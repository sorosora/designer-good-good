import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../Card';

const SC = {};

SC.Cover = styled(Card.Cover)``;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-family: ${({ theme }) => theme.font.family.pingFang};
  font-size: 22px;
  line-height: 1.39;
  font-weight: 600;
  color: hsl(220, 3%, 21%);
`;

const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-family: ${({ theme }) => theme.font.family.pingFang};
  font-size: 18px;
  line-height: 1.72;
  color: hsl(220, 3%, 34%);
`;

const ReadMore = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.375;
  font-weight: 600;
  text-align: right;
  color: hsl(0, 0%, 71%);
  transition: .3s;
`;

SC.Content = styled(Card.Content)`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  
  ${Title} {
    margin-bottom: 12px;
  }
  
  ${Content} {
    margin-bottom: 28px;
  }
  
  ${ReadMore} {
    margin-top: auto;
    margin-left: auto;
  }
`;

SC.Card = styled(Card)`
  box-shadow: 1px 16px 26px 0 hsla(0, 0%, 0%, 0.09);
  background-color: hsl(0, 0%, 100%);
`;

const A = styled.a``;

const ArticleCard = (props) => {
  const {
    title, content, linkProps, coverImgSrc, ...otherProps
  } = props;
  return (
    <Link {...linkProps} passHref>
      <A>
        <SC.Card {...otherProps}>
          <SC.Cover imgSrc={coverImgSrc} ratio={['370:240']} />
          <SC.Content>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <ReadMore>READ MORE</ReadMore>
          </SC.Content>
        </SC.Card>
      </A>
    </Link>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkProps: PropTypes.shape({ ...Link.propTypes, children: undefined }).isRequired,
  coverImgSrc: PropTypes.string.isRequired,
};

export default ArticleCard;
