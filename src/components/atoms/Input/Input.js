import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: 12px;
  line-height: 12px;
  background-color: ${({ theme }) => theme.bgComponent};
  color: ${({ theme }) => theme.colorText1};
  border: none;
  outline: none;
  flex: 1 1;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorText2};
  }
`;
