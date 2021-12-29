import styled from 'styled-components';

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 0.9rem;
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 700;
  text-decoration: none;
`;
