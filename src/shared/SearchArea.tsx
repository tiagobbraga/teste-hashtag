import React from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';

import CustomButton from './CustomButton';

import { CenterView, CardView, Input } from '../styled';

interface Props {
  loading: boolean;
  onFind: (term: string) => void;
}

export default ({ loading, onFind }: Props) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <CardView backgroundColor='transparent' padding={5} margin={5}>
      <CenterView>
        <Input
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
            <CustomButton
              title='Buscar'
              onPress={() => {
                if (value.length <= 0) return;
                onFind(value);
              }}
            />
          )}
        </View>
      </CenterView>
    </CardView>
  );
};
