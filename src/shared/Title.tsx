import React from 'react';
import { Image, Text, ImageSourcePropType } from 'react-native';
import { CenterView, CommonText } from '../styled';

interface Props {
  urlImage?: ImageSourcePropType;
  title: string;
}

export default ({ urlImage, title }: Props) => {
  return (
    <CenterView flexDirection='column' backgroundColor='transparent'>
      {urlImage && <Image source={urlImage} style={{ width: 40, height: 40 }} />}
      <CommonText fontWeight='400' fontSize={18} color='black'>
        {title}
      </CommonText>
    </CenterView>
  );
};
