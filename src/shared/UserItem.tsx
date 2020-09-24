import React from 'react';
import { View, StyleSheet, Image, Text, Linking, Alert } from 'react-native';
import CustomButtom from './CustomButton';
import IUser from '../interfaces/IUser';

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
    <View style={styles.container}>
      <View style={styles.userArea}>
        <Image style={styles.avatar} source={{ uri: avatar_url }} />
        <Text style={styles.name}>{login}</Text>
        <View style={styles.info}>
          <Text>Seguidores {followers}</Text>
          <Text>Seguindo {following}</Text>
        </View>
      </View>
      <CustomButtom onPress={() => onShowProfile(html_url)} title='Visualizar perfil' />
      <View style={styles.space} />
      <CustomButtom onPress={() => onRemoveItem(id)} title='Remover perfil' color='red' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderBottomColor: '#e1e4e8',
    backgroundColor: 'white',
  },
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
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
