import styled from 'styled-components';
import { Status } from 'components/atoms/Status/Status';

export const Notification = styled(Status)`
  display: flex;
  justify-content: center;
  margin-top: 105px;
  font-size: 14px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;
