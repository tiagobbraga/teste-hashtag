import React from 'react';
import { View, StyleSheet, Text, Linking, Alert } from 'react-native';
import CustomButtom from './CustomButton';

// interface
import IUser from '../interfaces/IUser';

// styled
import { CommonText, CardView, AvatarImage, CenterView } from '../styled';

export default ({ id, html_url, avatar_url, login, followers, following, onRemoveItem }: IUser) => {
  const onShowProfile = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir a url ${url}`);
    }
  };

  return (
    <CardView backgroundColor='gray' padding={1} margin={10} borderRadius={10}>
      <CardView backgroundColor='white' padding={10} borderRadius={10}>
        <View style={styles.userArea}>
          <CenterView>
            <AvatarImage source={{ uri: avatar_url }} />
            <CardView margin={5} backgroundColor='transparent'>
              <CommonText color='black'>{login}</CommonText>
            </CardView>
          </CenterView>
          <CenterView flexDirection='column' alignItems='flex-end' justifyContent='flex-end'>
            <CommonText textAlign='right' color='black'>
              Seguidores {followers}
            </CommonText>
            <CommonText textAlign='right' color='black'>
              Seguindo {following}
            </CommonText>
          </CenterView>
        </View>
        <CustomButtom onPress={() => onShowProfile(html_url)} title='Visualizar perfil' />
        <View style={styles.space} />
        <CustomButtom onPress={() => onRemoveItem(id)} title='Remover perfil' color='red' />
      </CardView>
    </CardView>
  );
};

const styles = StyleSheet.create({
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontSize: 14,
    marginLeft: 5,
  },
  info: {
    flexDirection: 'column',
  },
  space: {
    height: 5,
  },
});
