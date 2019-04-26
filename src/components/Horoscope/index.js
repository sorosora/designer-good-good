import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InlineCenter } from 'shared-components';

const iconImage = (props) => {
  const { sign } = props;
  switch (sign) {
    case 'Aries':
      return '/static/images/icon/icon-aries.svg';
    case 'Cancer':
      return '/static/images/icon/icon-cancer.svg';
    case 'Leo':
      return '/static/images/icon/icon-leo.svg';
    case 'Virgo':
      return '/static/images/icon/icon-virgo.svg';
    case 'Taurus':
      return '/static/images/icon/icon-taurus.svg';
    case 'Gemini':
      return '/static/images/icon/icon-gemini.svg';
    default:
      return '';
  }
};

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-image: ${props => `url(${iconImage(props)})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  padding: 8px 0;
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 24px;
  font-weight: bold;
  color: hsl(220, 3%, 21%);
  
  ${Icon} {
    margin-right: 16px;
  }
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.75;
  color: hsl(220, 3%, 34%);
`;

const Wrapper = styled.div`
  ${Title} {
    margin-bottom: 12px;
  }
`;

const Horoscope = (props) => {
  const {
    title, content, sign, ...otherProps
  } = props;
  return (
    <Wrapper {...otherProps}>
      <Title>
        <InlineCenter><Icon sign={sign} /></InlineCenter>
        {title}
      </Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

Horoscope.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sign: PropTypes.oneOf(['Aries', 'Cancer', 'Leo', 'Virgo', 'Taurus', 'Gemini']).isRequired,
};

export default Horoscope;
