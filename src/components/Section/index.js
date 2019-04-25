import styled from 'styled-components';

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: hsl(220, 3%, 21%);
`;

const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: hsl(220, 3%, 34%);
`;

const Section = styled.section`
  position: relative;
  padding: 40px 0;
  margin-bottom: 30px;

  :not(:first-child) {
    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-left: -15px;
      margin-bottom: 40px;
      width: calc(100% + 15px * 2);
      height: 1px;
      background-color: hsl(214, 17%, 92%);
    }
  }
  
  ${Title} {
    margin-bottom: 6px;
  }
  
  ${Subtitle} {
    margin-bottom: 40px;
  }
`;

Section.Title = Title;
Section.Subtitle = Subtitle;

export default Section;
