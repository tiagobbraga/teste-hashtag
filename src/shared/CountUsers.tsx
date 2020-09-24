import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  total: number;
}

export default ({ total }: Props) => {
  if (!total || total === 0) return null;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Total de usuários: {total}</Text>
    </View>
  );
};
