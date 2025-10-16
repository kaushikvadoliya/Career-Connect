import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  const renderWebViewLoading = () => (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        renderLoading={renderWebViewLoading}
        source={{ uri: 'https://www.github.com/' }}
        startInLoadingState={true}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    marginTop: 20,
    flex: 1,
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default WebViewScreen;
