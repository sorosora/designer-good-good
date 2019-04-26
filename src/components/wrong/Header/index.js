import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';

const HeaderWrapper = styled.div``;

const Header = (props) => {
  const { ...otherProps } = props;
  return (
    <HeaderWrapper {...otherProps}>
      <GridWrapper />
    </HeaderWrapper>
  );
};

export default Header;
