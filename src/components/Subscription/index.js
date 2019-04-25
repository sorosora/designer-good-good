import styled from 'styled-components';
import Button from 'components/Button';

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.family.pingFang};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.38;
  letter-spacing: 0.2px;
  text-align: center;
  color: hsl(0, 0%, 100%);
`;

const Input = styled.input`
  padding: 9px 16px;
  width: 398px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: hsla(0, 0%, 100%, 0.1);
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.2px;
  color: hsl(0, 0%, 100%);
  
  ::placeholder {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  height: 256px;
  background-color: hsla(220, 3%, 21%, 0.9);
  
  ${Title} {
    margin-bottom: 24px;
  }
  
  ${Input} {
    margin-bottom: 28px;
  }
`;

const Subscription = () => (
  <Wrapper>
    <Form onSubmit={event => event.preventDefault()}>
      <Title>訂閱最新消息</Title>
      <Input placeholder='Email' />
      <Button color='turquoise'>BUTTON</Button>
    </Form>
  </Wrapper>
);

export default Subscription;
