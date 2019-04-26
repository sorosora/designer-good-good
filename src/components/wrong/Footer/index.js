import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';
import Subscription from 'components/wrong/Subscription';

const FooterWrapper = styled.div``;

const Footer = (props) => {
  const { ...otherProps } = props;
  return (
    <FooterWrapper {...otherProps}>
      <Subscription />
      <GridWrapper />
    </FooterWrapper>
  );
};

export default Footer;
