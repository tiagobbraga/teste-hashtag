import React from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import CustomButton from './CustomButton';

interface Props {
  loading: boolean;
  onFind: (term: string) => void;
}

export default ({ loading, onFind }: Props) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <View style={styles.searchArea}>
      <TextInput
        style={styles.input}
        clearButtonMode='always'
        clearTextOnFocus={true}
        autoCapitalize='none'
        autoCompleteType='username'
        autoCorrect={false}
        placeholder='Nome do usuário'
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <View style={{ width: 80, alignContent: 'center', justifyContent: 'center' }}>
        {loading ? (
          <ActivityIndicator animating={loading} />
        ) : (
          <CustomButton title='Buscar' onPress={() => onFind(value)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
