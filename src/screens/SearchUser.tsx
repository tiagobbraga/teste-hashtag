import React from 'react';
import { View, StyleSheet, Keyboard, FlatList, Alert } from 'react-native';

// comps
import Title from '../shared/Title';
import SearchArea from '../shared/SearchArea';
import UserItem from '../shared/UserItem';
import CountUsers from '../shared/CountUsers';

// interface
import IUser from '../interfaces/IUser';

// api
import Users from '../services/API/Users';

export const hasUserInList = (data: Array<IUser>, id: number) => {
  const users = data.filter((item) => item.id === id);
  return Boolean(users.length);
};

export default () => {
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState<IUser[]>([]);

  const onFind = async (term: string) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const { data } = await Users.searchUserByName(term);
      addNewUser(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onRemoveItem = (id: number) => {
    const data = users.filter((item) => item.id !== id);
    setUsers(data);
  };

  const addNewUser = (data: any) => {
    if (!hasUserInList(users, data.id)) {
      setUsers([...users, data]);
    } else {
      Alert.alert('Você já adicionou esse usuário');
    }
  };

  return (
    <View style={[styles.page, styles.flex]}>
      <Title urlImage={require('../../assets/github.png')} title='Teste' />
      <SearchArea onFind={onFind} loading={loading} />
      <CountUsers total={users.length} />
      <FlatList
        data={users}
        style={styles.flex}
        renderItem={({ item }) => <UserItem {...item} onRemoveItem={onRemoveItem} />}
        keyExtractor={(item: IUser) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  page: {
    backgroundColor: '#f6f8fa',
  },
});
