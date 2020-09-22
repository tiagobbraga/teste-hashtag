import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import CustomButtom from './CustomButtom';
import IUser from '../interfaces/IUser';

export default ({ id, url, html_url, avatar_url, login, followers, following, onShowProfile, onRemoveItem }: IUser) => {
  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <Image style={styles.avatar} source={{ uri: avatar_url }} />
        <Text style={styles.name}>{login}</Text>
        <View style={styles.info}>
          <Text>Followers {followers}</Text>
          <Text>Following {following}</Text>
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
