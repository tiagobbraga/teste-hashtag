import React from 'react';
import { CenterView, CommonText, CardView } from '../styled';

interface Props {
  total: number;
}

export default ({ total }: Props) => {
  if (!total || total === 0) return null;
  return (
    <CardView backgroundColor='#f1f1f1' padding={5}>
      <CenterView>
        <CommonText color='black'>Total de usuários: {total}</CommonText>
      </CenterView>
    </CardView>
  );
};
