import React from 'react';
import { Keyboard, FlatList, Alert } from 'react-native';
import styled from 'styled-components/native';
import ContainerViewInterface from '../interfaces/ContainerViewInterface';

// comps
import Title from '../shared/Title';
import SearchArea from '../shared/SearchArea';
import UserItem from '../shared/UserItem';
import CountUsers from '../shared/CountUsers';

// interface
import IUser from '../interfaces/IUser';

// api
import Users from '../services/API/Users';

// styled
const ContainerView = styled.View<ContainerViewInterface>`
  flex: 1;
  background: ${(props) => props.backgroundColor};
`;

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
      console.log(error);
      Alert.alert('Usuário não encontrado!');
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
    <ContainerView backgroundColor='#f6f8fa'>
      <Title urlImage={require('../../assets/github.png')} title='Teste' />
      <SearchArea onFind={onFind} loading={loading} />
      <CountUsers total={users.length} />
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem {...item} onRemoveItem={onRemoveItem} />}
        keyExtractor={(item: IUser) => item.id.toString()}
      />
    </ContainerView>
  );
};
