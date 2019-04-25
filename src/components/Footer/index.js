import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';

const FooterWrapper = styled.div``;

const Footer = (props) => {
  const { ...otherProps } = props;
  return (
    <FooterWrapper {...otherProps}>
      <GridWrapper />
    </FooterWrapper>
  );
};

export default Footer;
