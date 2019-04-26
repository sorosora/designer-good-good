import styled from 'styled-components';
import PropTypes from 'prop-types';

const colorStyle = (props) => {
  const { color } = props;
  switch (color) {
    case 'yellow':
      return 'hsl(37, 96%, 61%)';
    case 'turquoise':
      return 'hsl(184, 80%, 43%)';
    case 'red':
      return 'hsl(8, 100%, 68%)';
    default:
      return '';
  }
};

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  color: ${props => colorStyle(props)};
`;

const Time = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 14px;
  line-height: 1.375;
  font-weight: bold;
  letter-spacing: 2px;
  color: hsl(0, 0%, 71%);
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.2px;
  color: hsl(220, 3%, 34%);
`;

const Subject = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 12px;
  line-height: 1.375;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${props => colorStyle(props)};
`;

const Wrapper = styled.div`
  ${Title} {
    margin-bottom: 34px;
  }
  
  ${Time} {
    margin-bottom: 16px;
  }
  
  ${Content} {
    margin-bottom: 24px;
  }
`;

const LearningSchedule = (props) => {
  const {
    color, title, time, content, subject, ...otherProps
  } = props;
  return (
    <Wrapper {...otherProps}>
      <Title color={color}>{title}</Title>
      <Time>{time}</Time>
      <Content>{content}</Content>
      <Subject color={color}>{subject}</Subject>
    </Wrapper>
  );
};

LearningSchedule.propTypes = {
  color: PropTypes.oneOf(['yellow', 'turquoise', 'red']).isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default LearningSchedule;
