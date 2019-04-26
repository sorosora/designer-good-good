import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Img, RatioBox } from 'shared-components';

const CoverWrapper = styled.div``;

const ContentWrapper = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ shadow }) => (shadow ? '1px 16px 26px 0 hsla(0, 0%, 0%, 0.09)' : '')};
  background-color: hsl(0, 0%, 100%);
  transition: .3s;
  
  ${ContentWrapper} {
    flex: 1 1 auto;
  }
`;

const Cover = styled((props) => {
  const {
    imgSrc, children, ratio, ...otherProps
  } = props;
  return (
    <CoverWrapper {...otherProps}>
      <RatioBox ratio={ratio}>
        <Img src={imgSrc} type='cover' />
      </RatioBox>
      {children}
    </CoverWrapper>
  );
})``;

Cover.propTypes = {
  imgSrc: PropTypes.string,
  children: PropTypes.node,
  ratio: PropTypes.arrayOf(PropTypes.string),
};

Cover.defaultProps = {
  imgSrc: undefined,
  children: null,
  ratio: ['16:9'],
};

const Card = styled((props) => {
  const { coverImgSrc, children, ...otherProps } = props;
  return (
    <CardWrapper {...otherProps}>
      {
        coverImgSrc
          ? <Cover imgSrc={coverImgSrc} />
          : null
      }
      {children}
    </CardWrapper>
  );
})``;

Card.propTypes = {
  coverImgSrc: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  coverImgSrc: undefined,
  children: null,
};

Card.Cover = Cover;
Card.Content = ContentWrapper;

export default Card;
