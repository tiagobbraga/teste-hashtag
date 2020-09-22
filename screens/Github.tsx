import React from 'react';
import { View, StyleSheet, TextInput, Text, FlatList, ActivityIndicator, Linking, Alert } from 'react-native';

import CustomButton from '../components/CustomButtom';
import UserItem from '../components/UserItem';
import IUser from '../interfaces/IUser';

export default () => {
  const [value, setValue] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState<IUser[]>([]);

  const onFind = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const json = await response.json();
      setUsers([...users, json]);
      setValue('');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onShowProfile = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir a url ${url}`);
    }
  };

  const onRemoveItem = (id: number) => {
    const data = users.filter((item) => item.id !== id);
    setUsers(data);
  };

  return (
    <View style={styles.page}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder='Buscar...'
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <CustomButton title='Buscar' onPress={onFind} />
      </View>
      <ActivityIndicator hidesWhenStopped={true} animating={loading} />
      <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item }) => <UserItem {...item} onShowProfile={onShowProfile} onRemoveItem={onRemoveItem} />}
        keyExtractor={(item) => item.id}
      />
      <Text>Total de usuários: {users.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 40,
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  searchArea: {
    flexDirection: 'row',
    padding: 5,
  },
  list: {
    flex: 1,
  },
});
