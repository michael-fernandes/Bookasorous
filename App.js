import { Provider } from 'react-redux';
import configureStore from './store/store';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Books, DefineWord } from './src/containers';

import { Colors } from 'react-native/Libraries/NewAppScreen';

//creates react query client
const queryClient = new QueryClient();

// redux store, for lifted state
const store = configureStore();

const App: () => React$Node = () => {
  const [words, addWord] = useState([]);

  const addWordHandler = (word) => {
    addWord([...words, word]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ padding: 10 }}>
          <KeyboardAvoidingView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Books words={words} />
              <DefineWord addWordHandler={addWordHandler} />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
