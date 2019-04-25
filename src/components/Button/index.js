import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colorStyle = (props) => {
  const { color } = props;
  switch (color) {
    case 'turquoise':
      return css`
        border-color: hsl(184, 80%, 43%);
        background-color: hsl(184, 80%, 43%);
        color: hsl(0, 0%, 100%);
        
        :hover {
          border-color: hsl(0, 0%, 100%);
          background-color: hsl(0, 0%, 100%);
          color: hsl(184, 80%, 43%);
        }
      `;
    default:
      return css`
        border-color: hsl(0, 0%, 71%);
        background-color: transparent;
        color: hsl(0, 0%, 71%);
        
        :hover {
          border-color: hsl(184, 80%, 43%);
          background-color: hsl(184, 80%, 43%);
          color: hsl(0, 0%, 100%);
        }
      `;
  }
};

const Button = styled.button`
  padding: 9px;
  min-width: 170px;
  box-sizing: border-box;
  border-radius: 28px;
  border: solid 1px;
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.375;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  transition: .3s;
  ${props => colorStyle(props)};
`;

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'turquoise']),
};

Button.defaultProps = {
  color: 'default',
};

export default Button;
