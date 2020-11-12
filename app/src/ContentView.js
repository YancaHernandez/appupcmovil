import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { WebView } from "react-native-webview";

import colors from "../styles/colors";
import NavigationView from "./NavigationView";

const ContentView = ({ uri }) => {
  const webViewRef = useRef();

  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const handleBackPress = () => {
    webViewRef.current.goBack();
  };

  const handleForwardPress = () => {
    webViewRef.current.goForward();
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: uri }}
        originWhitelist={["*"]}
        onLoadProgress={({ nativeEvent }) => {
          this.loadingProgress = nativeEvent.progress;
          setProgress(this.loadingProgress);
        }}
        onNavigationStateChange={(state) => {
          const back = state.canGoBack;
          const forward = state.canGoForward;
          setCanGoBack(back);
          setCanGoForward(forward);
        }}
      />

      <NavigationView
        onBackPress={handleBackPress}
        onForwardPress={handleForwardPress}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
      />

      {progress != 1 ? (
        <ProgressBar progress={progress} color={colors.PRIMARY} />
      ) : (
        <ProgressBar
          progress={progress}
          color={colors.PRIMARY}
          visible={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContentView;
