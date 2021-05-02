import React, { useState, useMemo } from 'react';
import { Button, View, TextInput, KeyboardAvoidingView } from 'react-native';
import PickerCheckBox from 'react-native-picker-checkbox';
import { getWordDefinitions } from '../../api';
import { useQuery } from 'react-query';

console.log(getWordDefinitions);

export default function Search({ addWordHandler }) {
  const [value, onChangeText] = useState('');
  const [entered, setEnter] = useState('');
  const { status, data = [] } = useQuery(['defineWord', entered], () =>
    getWordDefinitions(entered),
  );

  const items = useMemo(
    () =>
      data.map(({ partOfSpeech, definition }, index) => ({
        itemKey: `${partOfSpeech}${index}`,
        itemDescription: `(${partOfSpeech}) ${definition}`,
      })),
    [data],
  );
  console.log(data, items);

  return (
    <View style={{ padding: 10 }} behavior="padding">
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Search or Filter A Word"
      />
      <Button title="Define word" onPress={() => setEnter(value)} />
      {/* {data.length && entered && (
        <PickerCheckBox
          data={items}
          headerComponent={<Text style={{ fontSize: 25 }}>items</Text>}
          OnConfirm={(pItems) => this.handleConfirm(pItems)}
          ConfirmButtonTitle="OK"
          DescriptionField="itemDescription"
          KeyField="itemKey"
          placeholder="select some items"
          arrowColor="#FFD740"
          arrowSize={10}
          placeholderSelectedItems="$count selected item(s)"
        />
      )} */}
    </View>
  );
}
