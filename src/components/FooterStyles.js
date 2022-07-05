import styled from 'styled-components';
   
export const Box = styled.div`
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
export const Row = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: space-evenly;

`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: column;
  font-family: inherit;
  width: 100%;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-bottom:10px;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`;