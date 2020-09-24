import React from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';

interface Props {
  urlImage?: ImageSourcePropType;
  title: string;
}

export default ({ urlImage, title }: Props) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {urlImage && <Image source={urlImage} style={{ width: 40, height: 40 }} />}
      <Text>{title}</Text>
    </View>
  );
};
