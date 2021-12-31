import { EmptyListInfo } from 'components/atoms/EmptyListInfo/EmptyListInfo';
import React from 'react';
import { Wrapper } from './EmptyList.styles';

const EmptyList = () => (
  <Wrapper>
    <EmptyListInfo>👀 Todo list is empty</EmptyListInfo>
    <EmptyListInfo>Add your first todo above ☝️</EmptyListInfo>
  </Wrapper>
);

export default EmptyList;
