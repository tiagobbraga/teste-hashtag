import React from 'react';
import { TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

import { CommonText } from '../styled';

// styled
interface ButtonViewInterface {
  backgroundColor: string;
  height: number;
}
const AreaButtonView = styled.View<ButtonViewInterface>`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: ${(props) => `${props.height}px`};
  background: ${(props) => props.backgroundColor};
`;

interface Props {
  title: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default ({ title, color = '#2ea44f', onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <AreaButtonView height={40} backgroundColor={color}>
        <CommonText fontWeight='500' fontSize={16}>
          {title}
        </CommonText>
      </AreaButtonView>
    </TouchableWithoutFeedback>
  );
};
